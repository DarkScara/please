function pad(n: number) {
  return n.toString().padStart(2, "0");
}

export function formatClock(total: number) {
  const s = Math.max(0, total);
  return `${pad(Math.floor(s / 60))}:${pad(s % 60)}`;
}

type Props = {
  remaining: number;
  duration: number;
  urgent?: boolean;
};

export function TimerRing({ remaining, duration, urgent }: Props) {
  const size = 220;
  const stroke = 6;
  const r = (size - stroke) / 2;
  const c = 2 * Math.PI * r;
  const t = duration <= 0 ? 1 : 1 - remaining / duration;
  const offset = c * (1 - Math.min(1, Math.max(0, t)));

  return (
    <div className={`relative mx-auto ${urgent ? "timer-urgent" : ""}`} style={{ width: size, height: size }}>
      <svg width={size} height={size} viewBox={`0 0 ${size} ${size}`} className="block -rotate-90">
        <circle
          cx={size / 2}
          cy={size / 2}
          r={r}
          fill="none"
          stroke="var(--color-border)"
          strokeWidth={stroke}
        />
        <circle
          cx={size / 2}
          cy={size / 2}
          r={r}
          fill="none"
          stroke={urgent ? "var(--color-accent-hot)" : "var(--color-accent)"}
          strokeWidth={stroke}
          strokeLinecap="round"
          strokeDasharray={c}
          strokeDashoffset={offset}
        />
      </svg>
      <div className="absolute inset-0 flex flex-col items-center justify-center">
        <div
          className={`font-display tabular-nums leading-none tracking-tight ${
            urgent ? "text-accent-hot" : "text-fg"
          }`}
          style={{ fontSize: "clamp(2.75rem, 12vw, 4.25rem)" }}
        >
          {formatClock(remaining)}
        </div>
        <p className="mt-2 text-xs font-medium uppercase tracking-[0.28em] text-muted">
          {remaining === 0 ? "čas vypršel" : "žádný skip"}
        </p>
      </div>
    </div>
  );
}
