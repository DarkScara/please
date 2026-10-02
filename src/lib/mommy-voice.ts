import { createServerFn } from "@tanstack/react-start";
import { speak } from "@/lib/speech";

export const renderMommyVoice = createServerFn({ method: "POST" })
  .validator((input: { text: string }) => input)
  .handler(async ({ data }) => {
    const apiKey = process.env.XAI_API_KEY;
    if (!apiKey) return { ok: false as const };
    const text = data.text.replace(/\s+/g, " ").trim().slice(0, 700);
    if (!text) return { ok: false as const };
    const res = await fetch("https://api.x.ai/v1/tts", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${apiKey}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ text, voice_id: "eve" }),
    });
    if (!res.ok) return { ok: false as const };
    const buf = Buffer.from(await res.arrayBuffer());
    const ctype = res.headers.get("content-type") || "audio/mpeg";
    return { ok: true as const, audio: `data:${ctype};base64,${buf.toString("base64")}` };
  });

const heard = new Map<string, string>();

export async function playMommyVoice(text: string) {
  const key = text.replace(/\s+/g, " ").trim().slice(0, 700);
  if (!key) return;
  try {
    let url = heard.get(key);
    if (!url) {
      const res = await renderMommyVoice({ data: { text: key } });
      if (res.ok) {
        url = res.audio;
        if (heard.size > 6) heard.clear();
        heard.set(key, url);
      }
    }
    if (url) {
      const audio = new Audio(url);
      await audio.play();
      return;
    }
  } catch {
    /* browser voice */
  }
  speak(key);
}
