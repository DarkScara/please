export function pad(n: number) {
  return n.toString().padStart(2, "0");
}

export function todayISO(d = new Date()) {
  return `${d.getFullYear()}-${pad(d.getMonth() + 1)}-${pad(d.getDate())}`;
}

export function parseISO(iso: string) {
  const [y, m, day] = iso.split("-").map(Number);
  return new Date(y!, (m ?? 1) - 1, day ?? 1);
}

export function addDays(iso: string, days: number) {
  const d = parseISO(iso);
  d.setDate(d.getDate() + days);
  return todayISO(d);
}

export function msUntilNextLocalMidnight(from = new Date()) {
  const next = new Date(from);
  next.setHours(24, 0, 0, 0);
  return Math.max(0, next.getTime() - from.getTime());
}

export function formatDuration(ms: number) {
  const s = Math.max(0, Math.floor(ms / 1000));
  const h = Math.floor(s / 3600);
  const m = Math.floor((s % 3600) / 60);
  if (h <= 0) return `${m}m`;
  return `${h}h ${pad(m)}m`;
}

export function daysBetween(a: string, b: string) {
  const ms = parseISO(b).getTime() - parseISO(a).getTime();
  return Math.round(ms / 86400000);
}

export type Verdict = "allowed" | "ruined" | "denied";

export type DayLog = {
  day: number;
  date: string;
  verdict: Verdict;
  strikes: number;
  brokeOvernight: boolean;
  line: string;
};

export type ProgramSave = {
  name: string;
  startedOn: string;
  lastCompletedOn: string | null;
  daysCompleted: number;
  streak: number;
  missed: number;
  totalStrikes: number;
  lastVerdict: Verdict | null;
  voiceOn: boolean;
  history: DayLog[];
};

export const PROGRAM_KEY = "mommy-program-v1";
export const SESSION_KEY = "mommy-session-v1";

export function loadProgram(): ProgramSave | null {
  try {
    const raw = localStorage.getItem(PROGRAM_KEY);
    if (!raw) return null;
    return JSON.parse(raw) as ProgramSave;
  } catch {
    return null;
  }
}

export function saveProgram(state: ProgramSave) {
  localStorage.setItem(PROGRAM_KEY, JSON.stringify(state));
}

export function nextDayNumber(state: ProgramSave | null) {
  return (state?.daysCompleted ?? 0) + 1;
}

export type Availability = "fresh" | "ready" | "wait" | "resume";

export function availability(state: ProgramSave | null, hasResume: boolean): Availability {
  if (hasResume) return "resume";
  if (!state) return "fresh";
  if (state.lastCompletedOn === todayISO()) return "wait";
  return "ready";
}

export function applyMissedDays(state: ProgramSave, today: string): ProgramSave {
  if (!state.lastCompletedOn) return state;
  const gap = daysBetween(state.lastCompletedOn, today);
  if (gap <= 1) return state;
  const extra = gap - 1;
  return {
    ...state,
    missed: state.missed + extra,
    streak: 0,
  };
}

export function completeDay(
  state: ProgramSave,
  entry: DayLog,
): ProgramSave {
  const today = entry.date;
  const consecutive = state.lastCompletedOn ? daysBetween(state.lastCompletedOn, today) === 1 : true;
  return {
    ...state,
    lastCompletedOn: today,
    daysCompleted: state.daysCompleted + 1,
    streak: consecutive ? state.streak + 1 : 1,
    totalStrikes: state.totalStrikes + entry.strikes,
    lastVerdict: entry.verdict,
    history: [...state.history, entry],
  };
}

export function rollVerdict(
  weights: { allowed: number; ruined: number; denied: number },
  strikes: number,
  brokeOvernight: boolean,
): Verdict {
  if (brokeOvernight) return "denied";
  let { allowed, ruined, denied } = weights;
  if (strikes > 0) {
    allowed = Math.max(0, allowed - 8 * strikes);
    ruined += 4 * strikes;
    denied += 4 * strikes;
  }
  const total = Math.max(1, allowed + ruined + denied);
  const r = Math.random() * total;
  if (r < allowed) return "allowed";
  if (r < allowed + ruined) return "ruined";
  return "denied";
}
