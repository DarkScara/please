export function speak(text: string) {
  if (typeof window === "undefined" || !window.speechSynthesis) return;
  const synth = window.speechSynthesis;
  synth.cancel();
  const utter = new SpeechSynthesisUtterance(text);
  utter.lang = "en-US";
  utter.rate = 0.88;
  utter.pitch = 0.98;
  const voices = synth.getVoices();
  const pick =
    voices.find((v) => /en(-|_)US/i.test(v.lang) && /female|woman|samantha|victoria|zira|google us/i.test(v.name)) ??
    voices.find((v) => v.lang.toLowerCase().startsWith("en") && /female|woman/i.test(v.name)) ??
    voices.find((v) => v.lang.toLowerCase().startsWith("en"));
  if (pick) utter.voice = pick;
  synth.speak(utter);
}

export function silence() {
  if (typeof window === "undefined" || !window.speechSynthesis) return;
  window.speechSynthesis.cancel();
}
