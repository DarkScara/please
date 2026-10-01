import { createServerFn } from "@tanstack/react-start";

export const inspectProof = createServerFn({ method: "POST" })
  .validator((input: { image: string; want: string; name: string }) => input)
  .handler(async ({ data }) => {
    const apiKey = process.env.XAI_API_KEY;
    if (!apiKey) {
      return {
        ok: true as const,
        pass: true,
        line: "I can't see the file from here tonight. I'll take the picture as offered. Don't get used to easy credit.",
      };
    }
    const res = await fetch("https://api.x.ai/v1/chat/completions", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${apiKey}`,
      },
      body: JSON.stringify({
        model: "grok-4.5",
        max_tokens: 160,
        temperature: 0.4,
        messages: [
          {
            role: "system",
            content:
              'You are Mommy, grading one private proof photo for adult consensual sissy/house training. Never ask for a face. Never suggest posting. Be specific about what you see. Reply ONLY JSON: {"pass":boolean,"line":string} — line is 1-3 sentences in her voice, English, vulgar-tender, no markdown.',
          },
          {
            role: "user",
            content: [
              {
                type: "text",
                text: `Girl: ${data.name}. Assignment to verify: ${data.want}. Pass if the photo reasonably shows that in a private indoor setting. Fail empty walls, porn screenshots, public streets, or nothing related.`,
              },
              { type: "image_url", image_url: { url: data.image } },
            ],
          },
        ],
      }),
    });
    if (!res.ok) {
      return {
        ok: false as const,
        error: "Mommy couldn't look. Try a smaller picture.",
      };
    }
    const body = (await res.json()) as { choices?: { message?: { content?: string } }[] };
    const raw = body.choices?.[0]?.message?.content ?? "";
    const match = raw.match(/\{[\s\S]*\}/);
    try {
      const parsed = JSON.parse(match?.[0] ?? raw) as { pass?: boolean; line?: string };
      return {
        ok: true as const,
        pass: Boolean(parsed.pass),
        line: String(parsed.line || "I looked. Barely adequate.").slice(0, 400),
      };
    } catch {
      return { ok: true as const, pass: /pass["']?\s*:\s*true/i.test(raw), line: raw.slice(0, 280) };
    }
  });
