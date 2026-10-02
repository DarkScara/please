import { fill } from "@/data/program";
import { sleepBody, type HouseRule, type SleepPlan } from "@/data/house";

export function downloadTonight(opts: {
  name: string;
  day: number;
  overnight: string;
  plan: SleepPlan;
  rules: HouseRule[];
  assignment?: string | null;
}) {
  const overnight = fill(opts.overnight, opts.name, { day: opts.day });
  const body = fill(sleepBody(opts.plan), opts.name);
  const mantra = fill(opts.plan.mantra, opts.name);
  const rules = opts.rules.map((r, i) => `${i + 1}. ${r.text}`).join("\n");
  const html = `<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="utf-8"/>
<meta name="viewport" content="width=device-width, initial-scale=1"/>
<title>Tonight — ${opts.name}</title>
<style>
  body{margin:0;background:#0a0909;color:#ece6e1;font:16px/1.55 Georgia,serif;padding:28px 22px 80px}
  h1{font:600 42px/1 Georgia;margin:8px 0 4px;letter-spacing:-.02em}
  .k{font:12px/1.2 system-ui,sans-serif;letter-spacing:.28em;text-transform:uppercase;color:#9e3d42}
  p,li{color:#ece6e1} .m{color:#9a8f88}
  section{border:1px solid #2a2222;border-radius:14px;padding:16px 18px;margin-top:16px;background:#141111}
  .mantra{font-style:italic;font-size:22px;line-height:1.35}
</style>
</head>
<body>
<p class="k">Mommy · day ${opts.day}</p>
<h1>${opts.name}</h1>
<p class="m">Private. Offline. Not for posting. Emergency: untie, pins off, belt off the neck, nothing inside, water.</p>
<section><p class="k">overnight</p><p>${escapeHtml(overnight)}</p></section>
<section><p class="k">how you sleep</p><p>${escapeHtml(body)}</p></section>
<section><p class="k">mantra</p><p class="mantra">${escapeHtml(mantra)}</p></section>
${opts.assignment ? `<section><p class="k">24h job</p><p>${escapeHtml(fill(opts.assignment, opts.name))}</p></section>` : ""}
<section><p class="k">house rules</p><pre style="white-space:pre-wrap;font:15px/1.5 Georgia">${escapeHtml(rules)}</pre></section>
</body></html>`;
  const blob = new Blob([html], { type: "text/html" });
  const a = document.createElement("a");
  a.href = URL.createObjectURL(blob);
  a.download = `mommy-${opts.name.toLowerCase()}-day${opts.day}.html`;
  a.click();
  window.setTimeout(() => URL.revokeObjectURL(a.href), 4000);
}

function escapeHtml(s: string) {
  return s.replace(/[&<>"']/g, (c) => ({ "&": "&", "<": "<", ">": ">", '"': """, "'": "&#39;" })[c] ?? c);
}
