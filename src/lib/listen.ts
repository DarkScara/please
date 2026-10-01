type Recog = {
  lang: string;
  continuous: boolean;
  interimResults: boolean;
  onresult: ((ev: { results: ArrayLike<ArrayLike<{ transcript: string }>> }) => void) | null;
  onerror: (() => void) | null;
  onend: (() => void) | null;
  start: () => void;
  stop: () => void;
};

function Ctor(): (new () => Recog) | null {
  if (typeof window === "undefined") return null;
  const w = window as unknown as {
    SpeechRecognition?: new () => Recog;
    webkitSpeechRecognition?: new () => Recog;
  };
  return w.SpeechRecognition ?? w.webkitSpeechRecognition ?? null;
}

export function canListen() {
  return Boolean(Ctor());
}

export function listenOnce(): Promise<string> {
  const Rec = Ctor();
  if (!Rec) return Promise.reject(new Error("no mic"));
  return new Promise((resolve, reject) => {
    const rec = new Rec();
    rec.lang = "en-US";
    rec.continuous = false;
    rec.interimResults = false;
    rec.onresult = (ev) => {
      const text = Array.from(ev.results)
        .map((r) => r[0]?.transcript ?? "")
        .join(" ")
        .trim();
      resolve(text);
    };
    rec.onerror = () => reject(new Error("mic"));
    rec.onend = () => {
      /* ignore */
    };
    try {
      rec.start();
    } catch (e) {
      reject(e);
    }
    window.setTimeout(() => {
      try {
        rec.stop();
      } catch {
        /* ignore */
      }
    }, 8000);
  });
}

export function mantraHeard(heard: string, target: string) {
  const h = heard.toLowerCase();
  const keys = target
    .toLowerCase()
    .replace(/\{name\}/g, "")
    .split(/[^a-z]+/)
    .filter((w) => w.length > 3)
    .slice(0, 4);
  if (!keys.length) return h.length > 4;
  const hits = keys.filter((w) => h.includes(w)).length;
  return hits >= Math.min(2, keys.length);
}
