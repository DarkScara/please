import { useCallback, useEffect, useMemo, useRef, useState } from "react";
import {
  AlertTriangle,
  Calendar,
  Check,
  Crown,
  Lock,
  Mic,
  Moon,
  ShieldOff,
  Volume2,
  VolumeX,
} from "lucide-react";
import {
  EQUIPMENT,
  HARD_LIMITS,
  MOOD_LABEL,
  PUNISHMENTS,
  fill,
  getDay,
  pickName,
  pickPunishment,
  verdictScript,
  type Beat,
  type DayProgram,
  type Phase,
} from "@/data/program";
import { silence, speak } from "@/lib/speech";
import { TimerRing } from "@/components/timer-ring";
import {
  PROGRAM_KEY,
  PROGRAM_KEY,
  SESSION_KEY,
  applyMissedDays,
  availability,
  completeDay,
  formatDuration,
  loadProgram,
  msUntilNextLocalMidnight,
  nextDayNumber,
  rollVerdict,
  saveProgram,
  todayISO,
  type ProgramSave,
  type Verdict,
} from "@/lib/progress";

type Mode =
  | "boot"
  | "gate"
  | "hub"
  | "checkin"
  | "name"
  | "phase"
  | "interlude"
  | "punish"
  | "verdict"
  | "end"
  | "abort";

type SessionSave = {
  day: number;
  name: string;
  verdict: Verdict;
  phaseIndex: number;
  phaseStartedAt: number;
  strikes: number;
  mode: Mode;
  punishIndex: number;
  punishStartedAt: number;
  mantraDone: boolean;
  voiceOn: boolean;
  verdictStartedAt: number;
  brokeOvernight: boolean;
};

function loadSession(): SessionSave | null {
  try {
    const raw = localStorage.getItem(SESSION_KEY);
    if (!raw) return null;
    return JSON.parse(raw) as SessionSave;
  } catch {
    return null;
  }
}

function currentBeat(beats: Beat[], elapsed: number) {
  let beat = beats[0]!;
  for (const b of beats) {
    if (elapsed >= b.at) beat = b;
  }
  return beat;
}

function chime(freq: number, dur = 0.09, gain = 0.05) {
  try {
    const Ctx = window.AudioContext || (window as unknown as { webkitAudioContext: typeof AudioContext }).webkitAudioContext;
    const ctx = new Ctx();
    const osc = ctx.createOscillator();
    const g = ctx.createGain();
    osc.type = "sine";
    osc.frequency.value = freq;
    g.gain.value = gain;
    osc.connect(g);
    g.connect(ctx.destination);
    osc.start();
    osc.stop(ctx.currentTime + dur);
    g.gain.exponentialRampToValueAtTime(0.001, ctx.currentTime + dur);
  } catch {
    /* ignore */
  }
}

export function JoiApp() {
  const [mode, setMode] = useState<Mode>("boot");
  const [program, setProgram] = useState<ProgramSave | null>(null);
  const [checked, setChecked] = useState<Record<string, boolean>>({});
  const [ageOk, setAgeOk] = useState(false);
  const [privateOk, setPrivateOk] = useState(false);
  const [voiceOn, setVoiceOn] = useState(true);
  const [name, setName] = useState("");
  const [dayNum, setDayNum] = useState(1);
  const [verdict, setVerdict] = useState<Verdict>("denied");
  const [phaseIndex, setPhaseIndex] = useState(0);
  const [phaseStartedAt, setPhaseStartedAt] = useState(0);
  const [now, setNow] = useState(() => Date.now());
  const [strikes, setStrikes] = useState(0);
  const [punishIndex, setPunishIndex] = useState(0);
  const [punishStartedAt, setPunishStartedAt] = useState(0);
  const [verdictStartedAt, setVerdictStartedAt] = useState(0);
  const [mantraDone, setMantraDone] = useState(false);
  const [abortAsk, setAbortAsk] = useState(false);
  const [session, setSession] = useState<SessionSave | null>(null);
  const [beatKey, setBeatKey] = useState(0);
  const [came, setCame] = useState<boolean | null>(null);
  const [keptNight, setKeptNight] = useState<boolean | null>(null);
  const [brokeOvernight, setBrokeOvernight] = useState(false);
  const lastBeatAt = useRef(-1);
  const lastSecond = useRef(-1);
  const unlockedChime = useRef(false);
  const interludeTimer = useRef<number | null>(null);

  const day: DayProgram = getDay(dayNum);
  const phases = day.phases;
  const phase: Phase | undefined = phases[phaseIndex];
  const punish = PUNISHMENTS[punishIndex];
  const script = verdictScript(verdict, dayNum);
  const skipVerdict = day.close === "deny";

  const activeDuration =
    mode === "phase"
      ? (phase?.duration ?? 0)
      : mode === "punish"
        ? (punish?.duration ?? 0)
        : mode === "verdict"
          ? script.duration
          : 0;
  const activeStarted =
    mode === "phase" ? phaseStartedAt : mode === "punish" ? punishStartedAt : mode === "verdict" ? verdictStartedAt : 0;
  const elapsed = activeStarted ? Math.min(activeDuration, Math.floor((now - activeStarted) / 1000)) : 0;
  const remaining = Math.max(0, activeDuration - elapsed);
  const unlocked = remaining === 0 && activeDuration > 0;

  const beat = useMemo(() => {
    if (mode === "phase" && phase) return currentBeat(phase.beats, elapsed);
    if (mode === "verdict") return currentBeat(script.beats, elapsed);
    return null;
  }, [mode, phase, elapsed, script]);

  const ctx = { day: dayNum, streak: program?.streak ?? 0 };
  const sayFill = useCallback((text: string) => fill(text, name, ctx), [name, dayNum, program?.streak]);

  useEffect(() => {
    const p = loadProgram();
    const s = loadSession();
    setProgram(p);
    setSession(s);
    if (p) {
      setName(p.name);
      setVoiceOn(p.voiceOn);
    }
    if (s && (s.mode === "phase" || s.mode === "punish" || s.mode === "verdict" || s.mode === "name" || s.mode === "checkin")) {
      setMode("hub");
    } else if (p) {
      setMode("hub");
    } else {
      setMode("gate");
    }
  }, []);

  useEffect(() => {
    if (mode !== "phase" && mode !== "punish" && mode !== "verdict" && mode !== "hub") return;
    const id = window.setInterval(() => setNow(Date.now()), mode === "hub" ? 1000 : 200);
    return () => window.clearInterval(id);
  }, [mode]);

  useEffect(() => {
    if (mode !== "phase" && mode !== "punish" && mode !== "verdict" && mode !== "interlude") return;
    const data: SessionSave = {
      day: dayNum,
      name,
      verdict,
      phaseIndex,
      phaseStartedAt,
      strikes,
      mode,
      punishIndex,
      punishStartedAt,
      mantraDone,
      voiceOn,
      verdictStartedAt,
      brokeOvernight,
    };
    localStorage.setItem(SESSION_KEY, JSON.stringify(data));
    setSession(data);
  }, [
    mode,
    dayNum,
    name,
    verdict,
    phaseIndex,
    phaseStartedAt,
    strikes,
    punishIndex,
    punishStartedAt,
    mantraDone,
    voiceOn,
    verdictStartedAt,
    brokeOvernight,
  ]);

  useEffect(() => {
    let sentinel: WakeLockSentinel | null = null;
    const request = async () => {
      try {
        sentinel = (await navigator.wakeLock?.request("screen")) ?? null;
      } catch {
        /* unsupported */
      }
    };
    if (mode === "phase" || mode === "punish" || mode === "verdict") void request();
    const onVis = () => {
      if (document.visibilityState === "visible") void request();
    };
    document.addEventListener("visibilitychange", onVis);
    return () => {
      document.removeEventListener("visibilitychange", onVis);
      void sentinel?.release();
    };
  }, [mode]);

  useEffect(() => {
    if (!beat) return;
    if (lastBeatAt.current === beat.at) return;
    lastBeatAt.current = beat.at;
    setBeatKey((k) => k + 1);
    setMantraDone(false);
    if (voiceOn && (mode === "phase" || mode === "verdict")) {
      speak(sayFill(`${beat.title}. ${beat.body.split(/(?<=\.)\s/).slice(0, 2).join(" ")}`));
    }
  }, [beat, voiceOn, mode, sayFill]);

  useEffect(() => {
    if (mode !== "phase" && mode !== "punish" && mode !== "verdict") return;
    if (lastSecond.current === remaining) return;
    lastSecond.current = remaining;
    if (remaining === 10 || (remaining <= 5 && remaining > 0)) chime(remaining === 1 ? 660 : 420, 0.07, 0.04);
    if (remaining === 0 && !unlockedChime.current) {
      unlockedChime.current = true;
      chime(520, 0.16, 0.06);
      chime(780, 0.2, 0.05);
    }
    if (remaining > 0) unlockedChime.current = false;
  }, [remaining, mode]);

  useEffect(() => {
    return () => {
      if (interludeTimer.current) window.clearTimeout(interludeTimer.current);
    };
  }, []);

  const allGear = EQUIPMENT.every((item) => checked[item]);
  const canSubmit = allGear && ageOk && privateOk;

  const persistProgram = (next: ProgramSave) => {
    setProgram(next);
    saveProgram(next);
  };

  const beginPhase = (index: number) => {
    lastBeatAt.current = -1;
    unlockedChime.current = false;
    setMantraDone(false);
    setPhaseIndex(index);
    setPhaseStartedAt(Date.now());
    setNow(Date.now());
    setMode("phase");
  };

  const startDay = (n: number, girl: string, broke: boolean, existing?: ProgramSave | null) => {
    const plan = getDay(n);
    const v =
      plan.close === "deny" ? "denied" : rollVerdict(plan.weights, existing?.totalStrikes ?? 0, broke);
    setDayNum(n);
    setName(girl);
    setVerdict(v);
    setStrikes(0);
    setBrokeOvernight(broke);
    setCame(null);
    setKeptNight(null);
    lastBeatAt.current = -1;
    if (broke) {
      const p = pickPunishment(0);
      const idx = PUNISHMENTS.findIndex((x) => x.id === p.id);
      setPunishIndex(idx < 0 ? 0 : idx);
      setPunishStartedAt(Date.now());
      setNow(Date.now());
      setPhaseIndex(0);
      setMode("punish");
      if (voiceOn) speak(fill(p.body, girl, { day: n }));
      return;
    }
    beginPhase(0);
  };

  const startFresh = () => {
    const n = pickName();
    const today = todayISO();
    const fresh: ProgramSave = {
      name: n,
      startedOn: today,
      lastCompletedOn: null,
      daysCompleted: 0,
      streak: 0,
      missed: 0,
      totalStrikes: 0,
      lastVerdict: null,
      voiceOn,
      history: [],
    };
    persistProgram(fresh);
    localStorage.removeItem(SESSION_KEY);
    setName(n);
    setDayNum(1);
    setMode("name");
    if (voiceOn) speak(`Kneel. From now on you are ${n}. Mommy's girl.`);
  };

  const openToday = () => {
    if (!program) return;
    const updated = applyMissedDays(program, todayISO());
    if (updated !== program) persistProgram(updated);
    const n = nextDayNumber(updated);
    if (n === 1 && !updated.name) {
      setMode("name");
      return;
    }
    setDayNum(n);
    setName(updated.name);
    if (n === 1) {
      setMode("name");
      return;
    }
    setCame(null);
    setKeptNight(null);
    setMode("checkin");
    if (voiceOn) speak(fill(getDay(n).intro, updated.name, { day: n, streak: updated.streak }));
  };

  const resumeSession = () => {
    const s = session ?? loadSession();
    if (!s) return;
    setDayNum(s.day);
    setName(s.name);
    setVerdict(s.verdict);
    setPhaseIndex(s.phaseIndex);
    setPhaseStartedAt(s.phaseStartedAt || Date.now());
    setStrikes(s.strikes);
    setPunishIndex(s.punishIndex);
    setPunishStartedAt(s.punishStartedAt || Date.now());
    setMantraDone(s.mantraDone);
    setVoiceOn(s.voiceOn);
    setVerdictStartedAt(s.verdictStartedAt || Date.now());
    setBrokeOvernight(s.brokeOvernight);
    lastBeatAt.current = -1;
    const m = s.mode === "interlude" || s.mode === "boot" || s.mode === "hub" ? "phase" : s.mode;
    setMode(m);
    if (s.voiceOn) speak(`You wandered off, ${s.name}. Back on your knees.`);
  };

  const finishCheckin = () => {
    const broke = came === true || keptNight === false;
    startDay(dayNum, name, broke, program);
  };

  const completePhase = () => {
    if (!unlocked) return;
    if (phase?.mantra && !mantraDone) return;
    silence();
    const last = phaseIndex >= phases.length - 1;
    if (last) {
      if (skipVerdict) {
        writeCompletion("denied");
        setMode("end");
        return;
      }
      setMode("interlude");
      interludeTimer.current = window.setTimeout(() => {
        lastBeatAt.current = -1;
        setMantraDone(false);
        setVerdictStartedAt(Date.now());
        setNow(Date.now());
        setMode("verdict");
      }, 2200);
      return;
    }
    setMode("interlude");
    const next = phaseIndex + 1;
    interludeTimer.current = window.setTimeout(() => beginPhase(next), 1800);
  };

  const failPhase = () => {
    silence();
    setStrikes((n) => n + 1);
    const p = pickPunishment(strikes);
    const idx = PUNISHMENTS.findIndex((x) => x.id === p.id);
    setPunishIndex(idx < 0 ? 0 : idx);
    setPunishStartedAt(Date.now());
    setNow(Date.now());
    lastBeatAt.current = -1;
    unlockedChime.current = false;
    setMode("punish");
    if (voiceOn) speak(sayFill(p.body));
  };

  const completePunish = () => {
    if (!unlocked) return;
    silence();
    beginPhase(phaseIndex);
  };

  const writeCompletion = (v: Verdict) => {
    if (!program) return;
    const line = skipVerdict ? "Denied — she tucked the girl in hungry." : verdictScript(v, dayNum).line;
    const next = completeDay(program, {
      day: dayNum,
      date: todayISO(),
      verdict: v,
      strikes,
      brokeOvernight,
      line: fill(line, name, ctx),
    });
    persistProgram({ ...next, voiceOn });
    localStorage.removeItem(SESSION_KEY);
    setSession(null);
  };

  const completeVerdict = () => {
    if (!unlocked) return;
    silence();
    writeCompletion(verdict);
    setMode("end");
    if (voiceOn) speak(sayFill(script.closing));
  };

  const completeDenyEnd = () => {
    writeCompletion("denied");
    setMode("hub");
  };

  const abort = () => {
    silence();
    localStorage.removeItem(SESSION_KEY);
    setSession(null);
    setAbortAsk(false);
    setMode("abort");
  };

  const avail = availability(program, Boolean(session && session.name && session.mode !== "end" && session.mode !== "abort" && session.mode !== "hub" && session.mode !== "gate" && session.mode !== "boot"));
  const inSession = mode === "phase" || mode === "punish" || mode === "verdict" || mode === "interlude" || mode === "name" || mode === "checkin";

  return (
    <div className="chamber-bg relative min-h-dvh text-fg">
      <div className="chamber-grain" />
      <div className="relative mx-auto flex min-h-dvh w-full max-w-lg flex-col px-4 pb-8 pt-[max(1.25rem,env(safe-area-inset-top))] sm:px-6">
        {inSession && mode !== "name" && (
          <header className="mb-4 flex items-center justify-between gap-3">
            <div className="min-w-0">
              <p className="font-display text-sm italic text-accent">Mommy</p>
              <p className="truncate text-xs uppercase tracking-[0.22em] text-muted">
                {name || "—"} · day {dayNum}
              </p>
            </div>
            <div className="flex items-center gap-2">
              <button
                type="button"
                className="flex size-11 items-center justify-center rounded-md border border-border bg-surface text-muted"
                onClick={() => {
                  setVoiceOn((v) => {
                    const next = !v;
                    if (!next) silence();
                    if (program) persistProgram({ ...program, voiceOn: next });
                    return next;
                  });
                }}
                aria-label={voiceOn ? "Mute Mommy" : "Mommy speaks"}
              >
                {voiceOn ? <Volume2 className="size-4" /> : <VolumeX className="size-4" />}
              </button>
              <div className="rounded-md border border-border bg-surface px-2.5 py-1.5 text-[11px] uppercase tracking-[0.18em] text-muted">
                strikes {strikes}
              </div>
            </div>
          </header>
        )}

        {mode === "phase" || mode === "punish" || mode === "verdict" ? (
          <div className="mb-5 flex gap-1" aria-hidden>
            {Array.from({ length: (skipVerdict ? phases.length : phases.length + 1) }).map((_, i) => (
              <span
                key={i}
                className={`h-0.5 flex-1 rounded-full ${
                  i < phaseIndex ? "bg-accent" : i === phaseIndex && mode !== "verdict" ? "bg-accent-hot/80" : mode === "verdict" && i === phases.length ? "bg-accent-hot/80" : "bg-border"
                }`}
              />
            ))}
          </div>
        ) : null}

        {mode === "boot" && (
          <main className="flex flex-1 items-center justify-center">
            <p className="font-display text-3xl italic text-accent">Mommy</p>
          </main>
        )}

        {mode === "gate" && (
          <Gate
            checked={checked}
            setChecked={setChecked}
            ageOk={ageOk}
            setAgeOk={setAgeOk}
            privateOk={privateOk}
            setPrivateOk={setPrivateOk}
            voiceOn={voiceOn}
            setVoiceOn={setVoiceOn}
            canSubmit={canSubmit}
            onStart={startFresh}
          />
        )}

        {mode === "hub" && (
          <Hub
            program={program}
            avail={avail}
            now={now}
            onBegin={openToday}
            onResume={resumeSession}
            voiceOn={voiceOn}
            setVoiceOn={(next) => {
              setVoiceOn(next);
              if (!next) silence();
              if (program) persistProgram({ ...program, voiceOn: next });
            }}
          />
        )}

        {mode === "name" && (
          <NameReveal name={name} intro={day.intro} onAccept={() => startDay(1, name, false, program)} />
        )}

        {mode === "checkin" && (
          <CheckIn
            day={day}
            name={name}
            overnight={program?.history.at(-1) ? getDay(program.history.at(-1)!.day).overnight : day.overnight}
            missed={program?.streak === 0 && (program?.missed ?? 0) > 0}
            came={came}
            keptNight={keptNight}
            setCame={setCame}
            setKeptNight={setKeptNight}
            onGo={finishCheckin}
          />
        )}

        {mode === "interlude" && (
          <Interlude
            title={
              phaseIndex >= phases.length - 1 && !skipVerdict
                ? "Mommy already rolled"
                : (phases[phaseIndex + 1]?.chapter ?? day.title)
            }
            name={name}
          />
        )}

        {mode === "phase" && phase && beat && (
          <PlayCard
            chapter={phase.chapter}
            title={phase.title}
            gear={phase.gear}
            beat={beat}
            beatKey={beatKey}
            remaining={remaining}
            duration={phase.duration}
            unlocked={unlocked}
            mantra={phase.mantra}
            mantraDone={mantraDone}
            fillText={sayFill}
            failLabel="I couldn't"
            okLabel="Done"
            okLockedLabel="Wait. Mommy sets the pace."
            onFail={failPhase}
            onOk={completePhase}
            onHear={() => speak(sayFill(beat.say || phase.mantra || ""))}
            onSaid={() => setMantraDone(true)}
            requireMantra={Boolean(phase.mantra)}
          />
        )}

        {mode === "punish" && punish && (
          <PlayCard
            chapter="Correction"
            title={sayFill(punish.title)}
            gear={[]}
            beat={{ at: 0, title: sayFill(punish.title), body: sayFill(punish.body), say: punish.say }}
            beatKey={punish.id}
            remaining={remaining}
            duration={punish.duration}
            unlocked={unlocked}
            mantra={punish.say}
            mantraDone={mantraDone}
            fillText={sayFill}
            failLabel=""
            okLabel="Back to the task"
            okLockedLabel="Correction first."
            onFail={() => undefined}
            onOk={completePunish}
            onHear={() => speak(sayFill(punish.say))}
            onSaid={() => setMantraDone(true)}
            requireMantra
            punish
          />
        )}

        {mode === "verdict" && beat && (
          <PlayCard
            chapter={`Close · ${script.stamp}`}
            title={sayFill(script.title)}
            gear={["Spoon", "Mirror"]}
            beat={beat}
            beatKey={beatKey}
            remaining={remaining}
            duration={script.duration}
            unlocked={unlocked}
            mantra="Thank you for the decision, Mommy. It stands."
            mantraDone={mantraDone}
            fillText={sayFill}
            failLabel=""
            okLabel="Put me away"
            okLockedLabel="Finish what Mommy ordered."
            onFail={() => undefined}
            onOk={completeVerdict}
            onHear={() => speak(sayFill("Thank you for the decision, Mommy. It stands."))}
            onSaid={() => setMantraDone(true)}
            requireMantra
          />
        )}

        {mode === "end" && (
          <Ending
            name={name}
            day={day}
            verdict={skipVerdict ? "denied" : verdict}
            closing={
              skipVerdict
                ? "That's enough for today. Mommy's going. You will not touch it."
                : script.closing
            }
            stamp={skipVerdict ? "NOTHING" : script.stamp}
            onHome={() => setMode("hub")}
          />
        )}

        {mode === "abort" && <AbortScreen onHome={() => setMode(program ? "hub" : "gate")} />}

        {(mode === "phase" || mode === "punish" || mode === "verdict") && (
          <div className="mt-6 flex justify-center">
            {abortAsk ? (
              <div className="flex w-full flex-col gap-2 rounded-lg border border-border bg-surface p-3">
                <p className="text-sm text-muted">
                  Emergency stop. Untie the laces. Pins off. Belt off the neck. Anything inside comes out. Then you may leave.
                </p>
                <div className="flex gap-2">
                  <button
                    type="button"
                    className="h-11 flex-1 rounded-md border border-border text-sm text-muted"
                    onClick={() => setAbortAsk(false)}
                  >
                    Continue
                  </button>
                  <button
                    type="button"
                    className="h-11 flex-1 rounded-md bg-accent text-sm font-medium text-fg"
                    onClick={abort}
                  >
                    Stop
                  </button>
                </div>
              </div>
            ) : (
              <button
                type="button"
                className="h-11 px-3 text-xs uppercase tracking-[0.18em] text-faint"
                onClick={() => setAbortAsk(true)}
              >
                Emergency stop
              </button>
            )}
          </div>
        )}
      </div>
    </div>
  );
}

function Gate({
  checked,
  setChecked,
  ageOk,
  setAgeOk,
  privateOk,
  setPrivateOk,
  voiceOn,
  setVoiceOn,
  canSubmit,
  onStart,
}: {
  checked: Record<string, boolean>;
  setChecked: (v: Record<string, boolean>) => void;
  ageOk: boolean;
  setAgeOk: (v: boolean) => void;
  privateOk: boolean;
  setPrivateOk: (v: boolean) => void;
  voiceOn: boolean;
  setVoiceOn: (v: boolean) => void;
  canSubmit: boolean;
  onStart: () => void;
}) {
  return (
    <main className="flex flex-1 flex-col">
      <p className="mt-6 text-xs font-medium uppercase tracking-[0.42em] text-accent">a private house</p>
      <h1 className="font-display mt-3 text-6xl font-semibold leading-none tracking-tight sm:text-7xl">Mommy</h1>
      <p className="mt-4 max-w-[36ch] text-base leading-relaxed text-muted">
        One session a day. She remembers yesterday. She gets colder as the days stack. You do not set the pace. You do
        not skip ahead. You come back in the morning like a daughter who lives here.
      </p>

      <section className="mt-8 rounded-xl border border-border bg-surface p-4 shadow-[var(--shadow-panel)]">
        <h2 className="font-display text-xl text-fg">Hard limits — even Mommy keeps these</h2>
        <ul className="mt-3 space-y-2 text-sm leading-relaxed text-muted">
          {HARD_LIMITS.map((line) => (
            <li key={line} className="flex gap-2">
              <ShieldOff className="mt-0.5 size-4 shrink-0 text-accent" />
              <span>{line}</span>
            </li>
          ))}
        </ul>
      </section>

      <section className="mt-4">
        <h2 className="text-xs font-medium uppercase tracking-[0.22em] text-muted">Kit — tick what you actually have</h2>
        <button
          type="button"
          className="mt-2 h-11 w-full rounded-md border border-border bg-raised text-sm text-fg"
          onClick={() => {
            const allOn = EQUIPMENT.every((item) => checked[item]);
            const next: Record<string, boolean> = {};
            for (const item of EQUIPMENT) next[item] = !allOn;
            setChecked(next);
          }}
        >
          {EQUIPMENT.every((item) => checked[item]) ? "Clear kit" : "I have the whole kit"}
        </button>
        <ul className="mt-3 space-y-1.5">
          {EQUIPMENT.map((item) => {
            const on = Boolean(checked[item]);
            return (
              <li key={item}>
                <button
                  type="button"
                  onClick={() => setChecked({ ...checked, [item]: !on })}
                  className={`flex h-11 w-full items-center gap-3 rounded-md border px-3 text-left text-sm ${
                    on ? "border-accent/50 bg-raised text-fg" : "border-border bg-surface text-muted"
                  }`}
                >
                  <span
                    className={`flex size-5 items-center justify-center rounded-xs border ${
                      on ? "border-accent bg-accent text-fg" : "border-border"
                    }`}
                  >
                    {on ? <Check className="size-3" /> : null}
                  </span>
                  {item}
                </button>
              </li>
            );
          })}
        </ul>
      </section>

      <div className="mt-4 space-y-2">
        <ToggleRow on={ageOk} onToggle={() => setAgeOk(!ageOk)} label="I am 18 or older." />
        <ToggleRow on={privateOk} onToggle={() => setPrivateOk(!privateOk)} label="I am alone. No photos. No audience." />
        <ToggleRow on={voiceOn} onToggle={() => setVoiceOn(!voiceOn)} label="Mommy may speak (browser voice)." />
      </div>

      <button
        type="button"
        disabled={!canSubmit}
        onClick={onStart}
        className="mt-8 h-14 w-full rounded-lg bg-accent text-base font-medium text-fg disabled:opacity-35"
      >
        I live here now
      </button>
      <p className="mt-3 text-center text-xs leading-relaxed text-faint">
        She will name you on day one. Orgasm is rare, and rarer if you lie. Tomorrow she will ask what you did in the
        dark.
      </p>
    </main>
  );
}

function ToggleRow({ on, onToggle, label }: { on: boolean; onToggle: () => void; label: string }) {
  return (
    <button
      type="button"
      onClick={onToggle}
      className={`flex min-h-11 w-full items-center gap-3 rounded-md border px-3 py-2 text-left text-sm ${
        on ? "border-accent/50 bg-raised text-fg" : "border-border bg-surface text-muted"
      }`}
    >
      <span
        className={`flex size-5 shrink-0 items-center justify-center rounded-xs border ${
          on ? "border-accent bg-accent text-fg" : "border-border"
        }`}
      >
        {on ? <Check className="size-3" /> : null}
      </span>
      {label}
    </button>
  );
}

function Hub({
  program,
  avail,
  now,
  onBegin,
  onResume,
  voiceOn,
  setVoiceOn,
}: {
  program: ProgramSave | null;
  avail: ReturnType<typeof availability>;
  now: number;
  onBegin: () => void;
  onResume: () => void;
  voiceOn: boolean;
  setVoiceOn: (v: boolean) => void;
}) {
  const n = nextDayNumber(program);
  const plan = getDay(n);
  const waitMs = msUntilNextLocalMidnight(new Date(now));
  const last = program?.history.at(-1);
  const lastOvernight = last ? getDay(last.day).overnight : null;

  return (
    <main className="flex flex-1 flex-col pb-6">
      <div className="mt-4 flex items-start justify-between gap-3">
        <div>
          <p className="text-xs font-medium uppercase tracking-[0.42em] text-accent">the house</p>
          <h1 className="font-display mt-2 text-5xl font-semibold leading-none">Mommy</h1>
          <p className="mt-3 text-sm text-muted">
            {program ? (
              <>
                {program.name} · day {n} · streak {program.streak}
                {program.missed > 0 ? ` · missed ${program.missed}` : ""}
              </>
            ) : (
              "She hasn't taken you in yet."
            )}
          </p>
        </div>
        <button
          type="button"
          className="flex size-11 items-center justify-center rounded-md border border-border bg-surface text-muted"
          onClick={() => setVoiceOn(!voiceOn)}
          aria-label={voiceOn ? "Mute Mommy" : "Mommy speaks"}
        >
          {voiceOn ? <Volume2 className="size-4" /> : <VolumeX className="size-4" />}
        </button>
      </div>

      <ol className="mt-6 grid grid-cols-7 gap-1.5">
        {Array.from({ length: 14 }).map((_, i) => {
          const d = i + 1;
          const done = (program?.daysCompleted ?? 0) >= d;
          const current = n === d;
          return (
            <li
              key={d}
              className={`flex h-10 items-center justify-center rounded-md text-xs font-medium ${
                done
                  ? "bg-accent text-fg"
                  : current
                    ? "border border-accent text-fg"
                    : "border border-border text-faint"
              }`}
            >
              {d}
            </li>
          );
        })}
      </ol>
      {n > 14 && (
        <p className="mt-2 text-xs uppercase tracking-[0.18em] text-muted">Kept · day {n} and counting</p>
      )}

      <section className="mt-6 rounded-xl border border-border bg-surface p-4 shadow-[var(--shadow-panel)]">
        <p className="text-xs uppercase tracking-[0.22em] text-accent">{MOOD_LABEL[plan.mood]}</p>
        <h2 className="font-display mt-1 text-2xl leading-tight">{plan.title}</h2>
        <p className="mt-1 text-sm text-muted">{plan.subtitle}</p>
        <p className="mt-3 text-sm leading-relaxed text-fg/90">{plan.note}</p>
        <p className="mt-3 text-xs uppercase tracking-[0.18em] text-faint">
          {plan.minutes} · {plan.gear.slice(0, 4).join(" · ")}
        </p>
      </section>

      {lastOvernight && avail === "wait" && (
        <section className="mt-4 rounded-lg border border-border bg-raised p-4">
          <div className="flex items-center gap-2 text-xs uppercase tracking-[0.2em] text-muted">
            <Moon className="size-3.5" />
            overnight
          </div>
          <p className="mt-2 text-sm leading-relaxed text-fg/90">{fill(lastOvernight, program?.name ?? "girl")}</p>
        </section>
      )}

      {program?.history.length ? (
        <section className="mt-4">
          <p className="text-xs uppercase tracking-[0.2em] text-muted">What she remembers</p>
          <ul className="mt-2 space-y-2">
            {program.history.slice(-3).reverse().map((h) => (
              <li key={`${h.day}-${h.date}`} className="rounded-md border border-border bg-surface px-3 py-2 text-sm text-muted">
                Day {h.day} · {h.verdict} · {h.line}
              </li>
            ))}
          </ul>
        </section>
      ) : null}

      <div className="mt-8 space-y-2">
        {avail === "resume" && (
          <button
            type="button"
            onClick={onResume}
            className="h-14 w-full rounded-lg border border-border bg-raised text-sm font-medium text-fg"
          >
            You left mid-task, {program?.name}. Back on your knees.
          </button>
        )}
        {avail === "wait" && (
          <div className="rounded-lg border border-border bg-surface px-4 py-5 text-center">
            <Calendar className="mx-auto size-4 text-accent" />
            <p className="font-display mt-3 text-2xl">Come back in the morning</p>
            <p className="mt-2 font-display text-4xl tabular-nums tracking-tight">{formatDuration(waitMs)}</p>
            <p className="mt-3 text-sm text-muted">
              One day at a time is how a mother builds a habit. Don't binge me. Don't hide. Sleep.
            </p>
          </div>
        )}
        {(avail === "ready" || avail === "fresh") && (
          <button
            type="button"
            onClick={onBegin}
            className="h-14 w-full rounded-lg bg-accent text-base font-medium text-fg"
          >
            {n === 1 ? "Kneel for intake" : `I'm here for day ${n}`}
          </button>
        )}
      </div>
    </main>
  );
}

function NameReveal({ name, intro, onAccept }: { name: string; intro: string; onAccept: () => void }) {
  return (
    <main className="flex flex-1 flex-col items-center justify-center py-10 text-center">
      <Crown className="size-6 text-accent" />
      <p className="mt-6 text-xs uppercase tracking-[0.32em] text-muted">assigned</p>
      <h1 className="font-display mt-3 text-6xl font-semibold leading-none">{name}</h1>
      <p className="mt-6 max-w-[34ch] text-base leading-relaxed text-muted">{fill(intro, name)}</p>
      <button
        type="button"
        onClick={onAccept}
        className="mt-10 h-14 w-full max-w-sm rounded-lg bg-accent text-base font-medium text-fg"
      >
        That's my name
      </button>
    </main>
  );
}

function CheckIn({
  day,
  name,
  overnight,
  missed,
  came,
  keptNight,
  setCame,
  setKeptNight,
  onGo,
}: {
  day: DayProgram;
  name: string;
  overnight: string;
  missed: boolean;
  came: boolean | null;
  keptNight: boolean | null;
  setCame: (v: boolean) => void;
  setKeptNight: (v: boolean) => void;
  onGo: () => void;
}) {
  const ready = came !== null && keptNight !== null;
  return (
    <main className="flex flex-1 flex-col py-4">
      <p className="text-xs uppercase tracking-[0.28em] text-accent">
        Day {day.day} · {MOOD_LABEL[day.mood]}
      </p>
      <h2 className="font-display mt-2 text-3xl leading-tight">{day.title}</h2>
      <p className="mt-3 text-base leading-relaxed text-muted">{fill(day.intro, name, { day: day.day })}</p>
      {missed && (
        <p className="mt-4 rounded-md border border-border bg-raised px-3 py-2 text-sm text-muted">
          You hid. Mommy doesn't chase. She waits, and you come back rustier. Streak's gone. The work isn't.
        </p>
      )}
      <p className="mt-6 text-xs uppercase tracking-[0.2em] text-muted">Last night she said</p>
      <p className="mt-2 text-sm leading-relaxed text-fg/90">{fill(overnight, name)}</p>
      <p className="mt-6 text-sm text-muted">Did you come without Mommy?</p>
      <div className="mt-2 grid grid-cols-2 gap-2">
        <Choice on={came === false} onClick={() => setCame(false)} label="No" />
        <Choice on={came === true} onClick={() => setCame(true)} label="Yes — I stole it" />
      </div>
      <p className="mt-4 text-sm text-muted">Did you keep the overnight rule?</p>
      <div className="mt-2 grid grid-cols-2 gap-2">
        <Choice on={keptNight === true} onClick={() => setKeptNight(true)} label="I kept it" />
        <Choice on={keptNight === false} onClick={() => setKeptNight(false)} label="I broke it" />
      </div>
      <button
        type="button"
        disabled={!ready}
        onClick={onGo}
        className="mt-8 h-14 w-full rounded-lg bg-accent text-base font-medium text-fg disabled:opacity-35"
      >
        {came === true || keptNight === false ? "Correct me, then begin" : "Begin"}
      </button>
    </main>
  );
}

function Choice({ on, onClick, label }: { on: boolean; onClick: () => void; label: string }) {
  return (
    <button
      type="button"
      onClick={onClick}
      className={`h-12 rounded-md border text-sm ${on ? "border-accent bg-raised text-fg" : "border-border bg-surface text-muted"}`}
    >
      {label}
    </button>
  );
}

function Interlude({ title, name }: { title: string; name: string }) {
  return (
    <main className="flex flex-1 flex-col items-center justify-center py-16 text-center">
      <p className="text-xs uppercase tracking-[0.32em] text-accent">stay, {name}</p>
      <h2 className="font-display mt-4 text-4xl font-semibold">{title}</h2>
      <p className="mt-4 text-sm text-muted">Don't move. Mommy isn't finished.</p>
    </main>
  );
}

function PlayCard({
  chapter,
  title,
  gear,
  beat,
  beatKey,
  remaining,
  duration,
  unlocked,
  mantra,
  mantraDone,
  fillText,
  failLabel,
  okLabel,
  okLockedLabel,
  onFail,
  onOk,
  onHear,
  onSaid,
  requireMantra,
  punish = false,
}: {
  chapter: string;
  title: string;
  gear: string[];
  beat: Beat;
  beatKey: string | number;
  remaining: number;
  duration: number;
  unlocked: boolean;
  mantra?: string;
  mantraDone: boolean;
  fillText: (s: string) => string;
  failLabel: string;
  okLabel: string;
  okLockedLabel: string;
  onFail: () => void;
  onOk: () => void;
  onHear: () => void;
  onSaid: () => void;
  requireMantra: boolean;
  punish?: boolean;
}) {
  const canOk = unlocked && (!requireMantra || mantraDone);
  const say = beat.say || mantra;

  return (
    <main className="flex flex-1 flex-col">
      <p className="text-xs font-medium uppercase tracking-[0.28em] text-accent">{chapter}</p>
      <h2 className="font-display mt-1 text-3xl font-semibold leading-tight">{fillText(title)}</h2>
      {gear.length > 0 && <p className="mt-2 text-xs leading-relaxed text-faint">{gear.join(" · ")}</p>}

      <div className="mt-5">
        <TimerRing remaining={remaining} duration={duration} urgent={remaining > 0 && remaining <= 10} />
      </div>

      <section
        key={beatKey}
        className={`beat-in mt-5 rounded-xl border p-4 shadow-[var(--shadow-panel)] ${
          punish ? "border-accent bg-raised" : "border-border bg-surface"
        }`}
      >
        <h3 className="font-display text-2xl leading-snug">{fillText(beat.title)}</h3>
        <p className="mt-3 text-[15px] leading-relaxed text-fg/90">{fillText(beat.body)}</p>
      </section>

      {say && (
        <div className="mt-4 rounded-lg border border-border bg-raised p-3">
          <p className="font-display text-lg italic leading-snug text-fg">{fillText(say)}</p>
          <div className="mt-3 grid grid-cols-2 gap-2">
            <button
              type="button"
              onClick={onHear}
              className="flex h-11 items-center justify-center gap-2 rounded-md border border-border bg-surface text-sm text-fg"
            >
              <Volume2 className="size-4" />
              Let Mommy say it
            </button>
            <button
              type="button"
              onClick={onSaid}
              className={`flex h-11 items-center justify-center gap-2 rounded-md text-sm ${
                mantraDone ? "bg-ok text-bg" : "border border-border bg-surface text-fg"
              }`}
            >
              <Mic className="size-4" />
              {mantraDone ? "I said it" : "I said it out loud"}
            </button>
          </div>
        </div>
      )}

      <div className={`mt-5 grid gap-2 ${failLabel ? "grid-cols-1 sm:grid-cols-2" : "grid-cols-1"}`}>
        {failLabel ? (
          <button
            type="button"
            onClick={onFail}
            className="h-14 rounded-lg border border-border bg-surface text-sm font-medium text-muted"
          >
            {failLabel}
          </button>
        ) : null}
        <button
          type="button"
          disabled={!canOk}
          onClick={onOk}
          className="flex h-14 items-center justify-center gap-2 rounded-lg bg-accent text-sm font-medium text-fg disabled:bg-raised disabled:text-faint"
        >
          {canOk ? (
            okLabel
          ) : (
            <>
              <Lock className="size-4" />
              {unlocked && requireMantra && !mantraDone ? "Mantra out loud first" : okLockedLabel}
            </>
          )}
        </button>
      </div>
    </main>
  );
}

function Ending({
  name,
  day,
  verdict,
  closing,
  stamp,
  onHome,
}: {
  name: string;
  day: DayProgram;
  verdict: Verdict;
  closing: string;
  stamp: string;
  onHome: () => void;
}) {
  return (
    <main className="flex flex-1 flex-col items-center justify-center py-10 text-center">
      <p className="text-xs uppercase tracking-[0.32em] text-accent">{stamp}</p>
      <h2 className="font-display mt-4 text-5xl font-semibold">{name}</h2>
      <p className="mt-6 max-w-[36ch] text-base leading-relaxed text-muted">{fill(closing, name, { day: day.day })}</p>
      <div className="mt-6 max-w-[36ch] rounded-lg border border-border bg-surface px-4 py-3 text-left">
        <p className="text-xs uppercase tracking-[0.18em] text-muted">Overnight</p>
        <p className="mt-2 text-sm leading-relaxed text-fg/90">{fill(day.overnight, name)}</p>
      </div>
      <p className="mt-6 max-w-[36ch] text-sm leading-relaxed text-faint">
        Untie. Pins off. Anything inside, out. Water. Then stop. If she said no, no stays no until morning.
      </p>
      <button
        type="button"
        onClick={onHome}
        className="mt-8 h-14 w-full max-w-sm rounded-lg bg-accent text-base font-medium text-fg"
      >
        I'll see you tomorrow
      </button>
    </main>
  );
}

function AbortScreen({ onHome }: { onHome: () => void }) {
  return (
    <main className="flex flex-1 flex-col items-center justify-center py-10 text-center">
      <AlertTriangle className="size-6 text-accent" />
      <h2 className="font-display mt-4 text-4xl font-semibold">Stop</h2>
      <p className="mt-4 max-w-[34ch] text-base leading-relaxed text-muted">
        Laces off. Pins off. Belt off the neck. Out with anything in the hole. Now. When you're free, you may go. This
        day doesn't count. Mommy will still be here in the morning.
      </p>
      <button
        type="button"
        onClick={onHome}
        className="mt-8 h-12 w-full max-w-sm rounded-lg border border-border text-sm text-fg"
      >
        Back to the house
      </button>
    </main>
  );
}
