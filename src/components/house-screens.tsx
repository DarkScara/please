import { useRef, useState } from "react";
import { Camera, Check, Mic, Moon, Volume2 } from "lucide-react";
import {
  composeLetter,
  liveMood,
  rulesForDay,
  sleepBody,
  type SleepPlan,
} from "@/data/house";
import { fill, getDay, MOOD_LABEL } from "@/data/program";
import { inspectProof } from "@/lib/inspect-photo";
import { canListen, listenOnce, mantraHeard } from "@/lib/listen";
import {
  formatDuration,
  msUntilNextLocalMidnight,
  nextDayNumber,
  todayISO,
  type Availability,
  type ProgramSave,
  type SavedAssignment,
} from "@/lib/progress";
import { speak } from "@/lib/speech";

async function shrinkImage(file: File) {
  const bitmap = await createImageBitmap(file);
  const scale = Math.min(1, 768 / Math.max(bitmap.width, bitmap.height));
  const canvas = document.createElement("canvas");
  canvas.width = Math.max(1, Math.round(bitmap.width * scale));
  canvas.height = Math.max(1, Math.round(bitmap.height * scale));
  const ctx = canvas.getContext("2d");
  if (!ctx) return "";
  ctx.drawImage(bitmap, 0, 0, canvas.width, canvas.height);
  return canvas.toDataURL("image/jpeg", 0.62);
}

export function HouseHub({
  program,
  avail,
  now,
  onBegin,
  onResume,
  onAssignment,
  onBedtime,
  voiceOn,
  setVoiceOn,
}: {
  program: ProgramSave | null;
  avail: Availability;
  now: number;
  onBegin: () => void;
  onResume: () => void;
  onAssignment: () => void;
  onBedtime: () => void;
  voiceOn: boolean;
  setVoiceOn: (v: boolean) => void;
}) {
  const n = nextDayNumber(program);
  const plan = getDay(n);
  const mood = liveMood(program, plan.mood);
  const waitMs = msUntilNextLocalMidnight(new Date(now));
  const last = program?.history.at(-1);
  const lastOvernight = last ? getDay(last.day).overnight : null;
  const letter = program ? fill(composeLetter(program, n, todayISO()), program.name, { day: n, streak: program.streak }) : "";
  const rules = rulesForDay(program?.daysCompleted ?? 0);
  const bedtimeDone = program?.bedtimeDoneOn === todayISO();
  const jobOpen = Boolean(program?.assignment && program.assignmentResult !== "pass");

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
          <Volume2 className="size-4" />
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
                done ? "bg-accent text-fg" : current ? "border border-accent text-fg" : "border border-border text-faint"
              }`}
            >
              {d}
            </li>
          );
        })}
      </ol>

      {letter ? (
        <section className="mt-6 rounded-xl border border-border bg-surface p-4 shadow-[var(--shadow-panel)]">
          <p className="text-xs uppercase tracking-[0.22em] text-accent">morning note · {MOOD_LABEL[mood]}</p>
          <p className="font-display mt-3 text-xl leading-snug italic">{letter}</p>
          <button
            type="button"
            className="mt-3 h-11 text-sm text-muted"
            onClick={() => speak(letter)}
          >
            Read it to me
          </button>
        </section>
      ) : null}

      <section className="mt-4 rounded-xl border border-border bg-surface p-4">
        <p className="text-xs uppercase tracking-[0.22em] text-accent">{MOOD_LABEL[mood]}</p>
        <h2 className="font-display mt-1 text-2xl leading-tight">{plan.title}</h2>
        <p className="mt-1 text-sm text-muted">{plan.subtitle}</p>
        <p className="mt-3 text-sm leading-relaxed text-fg/90">{plan.note}</p>
        <p className="mt-3 text-xs uppercase tracking-[0.18em] text-faint">
          {plan.minutes} · {plan.gear.slice(0, 4).join(" · ")}
        </p>
      </section>

      {rules.length > 0 && (
        <section className="mt-4 rounded-lg border border-border bg-raised p-4">
          <p className="text-xs uppercase tracking-[0.2em] text-muted">house rules · they stack</p>
          <ol className="mt-3 space-y-2">
            {rules.map((r, i) => (
              <li key={r.id} className="text-sm leading-relaxed text-fg/90">
                <span className="text-faint">{i + 1}.</span> {r.text}
              </li>
            ))}
          </ol>
        </section>
      )}

      {program?.assignment && (
        <section className="mt-4 rounded-lg border border-border bg-surface p-4">
          <p className="text-xs uppercase tracking-[0.2em] text-muted">
            24h job · {program.assignmentResult === "pass" ? "accepted" : program.assignmentResult === "fail" ? "failed" : "open"}
          </p>
          <p className="mt-2 text-sm leading-relaxed">{fill(program.assignment.text, program.name)}</p>
          {jobOpen && (
            <button type="button" onClick={onAssignment} className="mt-3 h-11 w-full rounded-md bg-accent text-sm font-medium text-fg">
              Bring proof
            </button>
          )}
        </section>
      )}

      {lastOvernight && (
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
            {program.history
              .slice(-3)
              .reverse()
              .map((h) => (
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
            <p className="font-display text-2xl">Session is closed</p>
            <p className="mt-2 font-display text-4xl tabular-nums tracking-tight">{formatDuration(waitMs)}</p>
            <p className="mt-3 text-sm text-muted">One day at a time. Don't binge. Sleep is still work.</p>
          </div>
        )}
        {(avail === "ready" || avail === "fresh") && (
          <button type="button" onClick={onBegin} className="h-14 w-full rounded-lg bg-accent text-base font-medium text-fg">
            {n === 1 ? "Kneel for intake" : `I'm here for day ${n}`}
          </button>
        )}
        {program && !bedtimeDone && (
          <button type="button" onClick={onBedtime} className="h-14 w-full rounded-lg border border-border bg-raised text-sm font-medium text-fg">
            Put me to bed
          </button>
        )}
      </div>
    </main>
  );
}

export function AssignmentProof({
  assignment,
  name,
  onPass,
  onFail,
  onBack,
}: {
  assignment: SavedAssignment;
  name: string;
  onPass: (line: string) => void;
  onFail: (line: string) => void;
  onBack: () => void;
}) {
  const [preview, setPreview] = useState<string | null>(null);
  const [busy, setBusy] = useState(false);
  const [heard, setHeard] = useState("");
  const [note, setNote] = useState("");
  const fileRef = useRef<HTMLInputElement>(null);
  const text = fill(assignment.text, name);

  const gradePhoto = async () => {
    if (!preview) return;
    setBusy(true);
    try {
      const res = await inspectProof({ data: { image: preview, want: assignment.want, name } });
      if (!res.ok) {
        setNote(res.error);
        return;
      }
      setNote(res.line);
      if (res.pass) onPass(res.line);
      else onFail(res.line);
    } catch {
      setNote("She couldn't look. Smaller picture.");
    } finally {
      setBusy(false);
    }
  };

  const gradeAudio = async () => {
    setBusy(true);
    try {
      const said = await listenOnce();
      setHeard(said);
      const ok = mantraHeard(said, fill(assignment.want || assignment.text, name));
      const line = ok ? `I heard you. "${said.slice(0, 80)}" Adequate.` : `That wasn't it. I heard: "${said.slice(0, 80)}"`;
      setNote(line);
      if (ok) onPass(line);
      else onFail(line);
    } catch {
      setNote("Mic refused. Say it to the room and tap honor if you actually did.");
    } finally {
      setBusy(false);
    }
  };

  return (
    <main className="flex flex-1 flex-col py-4">
      <p className="text-xs uppercase tracking-[0.22em] text-accent">proof</p>
      <h2 className="font-display mt-2 text-3xl leading-tight">Show me</h2>
      <p className="mt-3 text-base leading-relaxed text-muted">{text}</p>
      <p className="mt-2 text-xs text-faint">Private. Not posted. Face optional. Nothing leaves this house.</p>

      {assignment.kind === "photo" && (
        <>
          <input
            ref={fileRef}
            type="file"
            accept="image/*"
            capture="environment"
            className="hidden"
            onChange={async (e) => {
              const file = e.target.files?.[0];
              if (!file) return;
              const data = await shrinkImage(file);
              setPreview(data);
              setNote("");
            }}
          />
          <button
            type="button"
            onClick={() => fileRef.current?.click()}
            className="mt-6 flex h-14 items-center justify-center gap-2 rounded-lg border border-border bg-surface text-sm"
          >
            <Camera className="size-4" />
            Take or choose a photo
          </button>
          {preview && <img src={preview} alt="" className="mt-4 max-h-64 w-full rounded-lg object-cover" />}
          <button
            type="button"
            disabled={!preview || busy}
            onClick={() => void gradePhoto()}
            className="mt-3 h-14 rounded-lg bg-accent text-sm font-medium text-fg disabled:opacity-35"
          >
            {busy ? "She's looking…" : "Let Mommy inspect"}
          </button>
        </>
      )}

      {assignment.kind === "audio" && (
        <>
          <p className="font-display mt-6 text-2xl italic">{text}</p>
          <button
            type="button"
            disabled={busy || !canListen()}
            onClick={() => void gradeAudio()}
            className="mt-4 flex h-14 items-center justify-center gap-2 rounded-lg bg-accent text-sm font-medium text-fg disabled:opacity-35"
          >
            <Mic className="size-4" />
            {busy ? "Listening…" : canListen() ? "Speak it" : "Mic not available"}
          </button>
          {heard ? <p className="mt-3 text-sm text-muted">Heard: {heard}</p> : null}
        </>
      )}

      {assignment.kind === "honor" && (
        <div className="mt-6 grid grid-cols-2 gap-2">
          <button type="button" onClick={() => onPass("You said you did it. I'll remember if you lied.")} className="h-14 rounded-lg bg-accent text-sm font-medium text-fg">
            I did it
          </button>
          <button type="button" onClick={() => onFail("You skipped the job. Noted.")} className="h-14 rounded-lg border border-border bg-surface text-sm text-muted">
            I skipped
          </button>
        </div>
      )}

      {note ? <p className="mt-4 text-sm leading-relaxed text-fg/90">{note}</p> : null}

      <button type="button" onClick={onBack} className="mt-6 h-11 text-sm text-faint">
        Back to the house
      </button>
    </main>
  );
}

export function BedtimeScreen({
  name,
  dayNum,
  thcOwn,
  includeFog,
  plan,
  onFog,
  onDone,
  onBack,
}: {
  name: string;
  dayNum: number;
  thcOwn: boolean;
  includeFog: boolean;
  plan: SleepPlan;
  onFog: () => void;
  onDone: () => void;
  onBack: () => void;
}) {
  const [said, setSaid] = useState(false);
  const [listening, setListening] = useState(false);
  const mantra = fill(plan.mantra, name);
  const body = fill(sleepBody(plan), name);

  return (
    <main className="flex flex-1 flex-col py-4">
      <p className="text-xs uppercase tracking-[0.22em] text-accent">lights out · day {dayNum}</p>
      <h2 className="font-display mt-2 text-3xl leading-tight">How you sleep</h2>
      <p className="mt-3 text-sm leading-relaxed text-fg/90">{body}</p>
      {thcOwn ? (
        <p className="mt-3 text-sm text-muted">{plan.thc}</p>
      ) : (
        <p className="mt-3 text-sm text-faint">No THC unless it is already yours. Do not start tonight.</p>
      )}
      <p className="font-display mt-6 text-2xl italic">{mantra}</p>
      <div className="mt-4 grid grid-cols-2 gap-2">
        <button type="button" onClick={() => speak(mantra)} className="h-12 rounded-md border border-border bg-surface text-sm">
          Hear it
        </button>
        <button
          type="button"
          disabled={listening}
          onClick={async () => {
            if (!canListen()) {
              setSaid(true);
              return;
            }
            setListening(true);
            try {
              const h = await listenOnce();
              setSaid(mantraHeard(h, mantra) || h.length > 6);
            } catch {
              setSaid(true);
            } finally {
              setListening(false);
            }
          }}
          className="flex h-12 items-center justify-center gap-2 rounded-md border border-border bg-surface text-sm"
        >
          <Mic className="size-4" />
          {said ? "Heard" : listening ? "…" : "Say it"}
        </button>
      </div>
      {includeFog && (
        <button type="button" onClick={onFog} className="mt-6 h-14 w-full rounded-lg border border-accent/50 bg-raised text-sm font-medium text-fg">
          Pink fog first
        </button>
      )}
      <button
        type="button"
        disabled={!said}
        onClick={onDone}
        className="mt-3 flex h-14 w-full items-center justify-center gap-2 rounded-lg bg-accent text-sm font-medium text-fg disabled:opacity-35"
      >
        <Check className="size-4" />
        I'm in bed
      </button>
      <button type="button" onClick={onBack} className="mt-3 h-11 text-sm text-faint">
        Not yet
      </button>
    </main>
  );
}
