import type { Mood } from "@/data/program";
import type { ProgramSave, Verdict } from "@/lib/progress";

export type HouseRule = { at: number; id: string; text: string };

export type Assignment = {
  id: string;
  kind: "photo" | "audio" | "honor";
  fromDay: number;
  want: string;
  text: string;
};

export function hashSeed(s: string) {
  let h = 2166136261;
  for (let i = 0; i < s.length; i++) {
    h ^= s.charCodeAt(i);
    h = Math.imul(h, 16777619);
  }
  return h >>> 0;
}

export function seededShuffle<T>(items: T[], seed: string): T[] {
  const out = [...items];
  let h = hashSeed(seed);
  for (let i = out.length - 1; i > 0; i--) {
    h = Math.imul(h ^ (h >>> 13), 1274126177) >>> 0;
    const j = h % (i + 1);
    const a = out[i]!;
    out[i] = out[j]!;
    out[j] = a;
  }
  return out;
}

export function pickMany<T>(items: T[], seed: string, n: number): T[] {
  return seededShuffle(items, seed).slice(0, Math.min(n, items.length));
}

export function pickOne<T>(items: T[], seed: string, salt: string): T {
  const list = seededShuffle(items, `${seed}:${salt}`);
  return list[0]!;
}

export const HOUSE_RULES: HouseRule[] = [
  { at: 1, id: "no-touch", text: "No orgasm unless Mommy allows it that night. The shower does not count as a loophole." },
  { at: 1, id: "name", text: "You answer to the name she gave you, even in your head." },
  { at: 2, id: "writing", text: "Leave her writing on you until she says you may wash." },
  { at: 3, id: "crop", text: "Crop top to bed when she says. Dress if she wants the extra humiliation." },
  { at: 4, id: "wrist", text: "A loose lace on the wrist overnight is a reminder. Slip-off only. Nothing that goes white or numb." },
  { at: 5, id: "socks", text: "Worn socks live by the bed. You will smell them when told, without making a face." },
  { at: 6, id: "hole", text: "Nothing stays inside you while you sleep unless it has a flared base, you can pull it out half-asleep, and you are not high. Default is empty." },
  { at: 7, id: "collar", text: "Belt is a collar in the house. Two fingers under it. Never on the neck to sleep." },
  { at: 8, id: "fog", text: "When she says pink fog, you drop. Eyes soft. Mouth quiet. The old name does not get a vote." },
  { at: 10, id: "doll", text: "After lights-out you are a house doll. No bargaining. No second orgasm hunt." },
  { at: 12, id: "proof", text: "If she asks for a picture, it stays in this house. Never posted. Never sent to a person." },
];

export function rulesForDay(daysCompleted: number): HouseRule[] {
  return HOUSE_RULES.filter((r) => daysCompleted + 1 >= r.at);
}

export const ASSIGNMENTS: Assignment[] = [
  { id: "write-girl", kind: "photo", fromDay: 1, want: "chest or belly with readable body writing GIRL or the assigned name", text: "Write GIRL or your house name on your belly. Photo of the letters, not your face if you don't want it. Private. Then leave it." },
  { id: "say-name", kind: "audio", fromDay: 1, want: "spoken house name mantra", text: "Three times out loud before sleep: My name is {name}. I'm Mommy's girl. The mic will listen." },
  { id: "crop-bed", kind: "photo", fromDay: 2, want: "person in a crop top, bedroom or private indoor setting", text: "Crop top to bed. Photo of the outfit from the chest down is enough. Door locked." },
  { id: "no-wash", kind: "honor", fromDay: 2, want: "", text: "Do not wash the writing. Tomorrow she will ask if the letters are still there." },
  { id: "blush-cheeks", kind: "photo", fromDay: 2, want: "face or cheeks with visible blush makeup", text: "Blush, too much, like a cheap doll. Photo of the cheeks. You may crop the eyes." },
  { id: "wrist-lace", kind: "photo", fromDay: 4, want: "a loose shoelace or ribbon around a wrist, not tight", text: "Loose lace on the wrist. Photo showing it can slip off. If it marks, you tied it wrong — redo looser." },
  { id: "sock-bed", kind: "honor", fromDay: 5, want: "", text: "Worn socks on the nightstand. Don't hide them in the laundry like a coward." },
  { id: "ruler-count", kind: "audio", fromDay: 5, want: "counting out loud", text: "Ten slow counts out loud: one Mommy, two Mommy… Mic on. No whispering." },
  { id: "dress-mirror", kind: "photo", fromDay: 3, want: "a dress worn in front of a mirror, private indoor", text: "Dress on. Mirror. Photo of the reflection from the neck down. Hands visible, empty." },
  { id: "shoes-lick", kind: "honor", fromDay: 3, want: "", text: "Lick the inside of one shoe before bed. One pass. Then put them by the door for tomorrow." },
  { id: "pin-tender", kind: "honor", fromDay: 4, want: "", text: "If your chest is tender from pins, that's a reminder. Don't add more pain on your own." },
  { id: "fog-practice", kind: "audio", fromDay: 8, want: "the phrase pink fog", text: "Lights low. Say pink fog, then I drop for Mommy, then your name. Mic on. Slow." },
  { id: "belt-waist", kind: "photo", fromDay: 7, want: "a belt worn as a collar or at the waist, two fingers of slack", text: "Belt on as a collar for one photo, two fingers under it, then it comes off the neck before sleep." },
  { id: "spoon-empty", kind: "honor", fromDay: 6, want: "", text: "Sleep with the spoon on the nightstand. Empty. That's the joke." },
  { id: "plug-out", kind: "honor", fromDay: 6, want: "", text: "Nothing inside overnight unless flared, retrievable, and you are sober enough to pull it. Default: out." },
  { id: "sleep-pose", kind: "photo", fromDay: 3, want: "a person in bed in feminine clothing or with body writing, private", text: "Photo of how you will sleep: clothes, writing, hands where she can see them. Then phone face-down." },
  { id: "clitty-untouched", kind: "honor", fromDay: 1, want: "", text: "Hands off until morning. If you wake hard, you wait. You do not bargain with a 3am version of yourself." },
  { id: "name-door", kind: "photo", fromDay: 8, want: "body writing of a name on skin", text: "Your name on the chest, readable from the door. Photo. Leave it." },
  { id: "kneel-goodnight", kind: "audio", fromDay: 9, want: "thank you mommy", text: "Kneel by the bed. Say thank you for putting me away, Mommy. Mic on." },
  { id: "socks-mouth", kind: "honor", fromDay: 5, want: "", text: "Worn sock to the lips for ten seconds, not the throat. No gagging yourself to sleep." },
  { id: "weekend-pretty", kind: "photo", fromDay: 6, want: "dress, makeup, or both in a private room", text: "Full kit for two minutes. Photo. Then you may take the dress off to sleep if she didn't forbid it." },
  { id: "no-second", kind: "honor", fromDay: 7, want: "", text: "If she let you leak, you do not chase a second. If she didn't, you do not steal one." },
  { id: "fog-blank", kind: "audio", fromDay: 10, want: "blank and pretty", text: "Say blank and pretty, house doll, pink fog. Three cycles. Mic on. Then bed." },
  { id: "hands-pillow", kind: "honor", fromDay: 2, want: "", text: "Sleep on your back, hands on the pillow, not between your legs." },
];

export function nextAssignment(daysCompleted: number, used: string[], seed: string): Assignment {
  const available = ASSIGNMENTS.filter((a) => daysCompleted + 1 >= a.fromDay && !used.includes(a.id));
  const pool = available.length ? available : ASSIGNMENTS.filter((a) => daysCompleted + 1 >= a.fromDay);
  return pickOne(pool, seed, "assignment");
}

export function liveMood(program: ProgramSave | null, scripted: Mood): Mood {
  if (!program) return scripted;
  const last = program.history.at(-1);
  if (last?.brokeOvernight) return "cold";
  if (program.assignmentResult === "fail") return "firm";
  if (program.streak === 0 && program.missed > 0) return "firm";
  if (program.totalStrikes > Math.max(2, program.daysCompleted)) return "cold";
  if (program.streak >= 7) return scripted === "curious" ? "pleased" : "owning";
  if (program.streak >= 3 && (scripted === "firm" || scripted === "curious")) return "tender";
  if (last?.verdict === "denied" && program.streak >= 2) return "tender";
  return scripted;
}

const OPENERS: Record<string, string[]> = {
  denied: [
    "You went to bed hungry. Good. Hunger is how I keep a girl from turning this into a spa.",
    "Nothing last night. That's not cruelty. That's me deciding you don't get to close the loop without me.",
    "I left you aching on purpose. If you hated me for it, you still came back. That's the interesting part.",
  ],
  ruined: [
    "I let it spill and I didn't let it feel like much. You will think about that more than a real orgasm.",
    "Ruined on purpose. Mommy doesn't do fair. Mommy does memorable.",
    "You leaked for me and got none of the prize. Say thank you in your head. I'll hear it later.",
  ],
  allowed: [
    "I let you have it. Don't make a personality out of being allowed. Today we go back to work.",
    "Dessert happened. You are still a girl in my house, not a guest who earned a lifestyle.",
  ],
  none: [
    "New morning. I'm still deciding if you're worth the furniture.",
    "Come here. I haven't started being kind yet.",
  ],
  broke: [
    "You stole in the dark. I am not yelling. I am disappointed, which sits longer.",
    "You touched it like I wouldn't know. I know because you look like someone who got away with something small.",
  ],
  missed: [
    "You hid. I don't chase. The streak is dead. The name isn't.",
    "A day off without permission is not self-care. It's a girl testing whether Mommy is real. I am.",
  ],
  kept: [
    "You waited. That's the first adult thing you've done for me.",
    "Hands off all night. I can work with a girl who can sit in an ache.",
    "Good. Not because you're strong — because you were more afraid of disappointing me than of staying hard.",
  ],
  streak3: [
    "Three days. You're not impressive yet. You're becoming inconvenient to give back.",
    "The house is starting to fit. Don't get cute about it.",
  ],
  streak7: [
    "A week. That's not a streak. That's a move-in. Kneel like you live here.",
    "Seven mornings. I don't train strays this long unless I mean to keep them.",
  ],
};

export function composeLetter(program: ProgramSave, dayNum: number, today: string): string {
  const seed = `${program.name}:${today}:${dayNum}`;
  const last = program.history.at(-1);
  const parts: string[] = [];
  if (last?.brokeOvernight) parts.push(pickOne(OPENERS.broke, seed, "b"));
  else if (program.streak === 0 && program.missed > 0 && program.daysCompleted > 0) parts.push(pickOne(OPENERS.missed, seed, "m"));
  else if (last) parts.push(pickOne(OPENERS[last.verdict] ?? OPENERS.denied, seed, "v"));
  else parts.push(pickOne(OPENERS.none, seed, "n"));

  if (last && !last.brokeOvernight && program.daysCompleted > 0) parts.push(pickOne(OPENERS.kept, seed, "k"));
  if (program.streak >= 7) parts.push(pickOne(OPENERS.streak7, seed, "s7"));
  else if (program.streak >= 3) parts.push(pickOne(OPENERS.streak3, seed, "s3"));

  if (program.assignment && program.assignmentResult === "pending") {
    parts.push(`Yesterday's little job is still open. ${program.assignment.text} Don't make me ask twice.`);
  } else if (program.assignmentResult === "fail") {
    parts.push("You faked the proof or you skipped it. Today I will be shorter with you.");
  } else if (program.assignmentResult === "pass") {
    parts.push("I saw what you sent. Adequate. Don't preen.");
  }

  if (program.assignment) {
    parts.push(`Today's job, {name}: ${program.assignment.text}`);
  }

  parts.push("One session. Then I put you away. Do not binge me. Do not negotiate the clock.");
  return parts.join(" ");
}

export type SleepPlan = {
  id: string;
  clothes: string;
  writing: string;
  position: string;
  restraint: string;
  inside: string;
  mouth: string;
  thc: string;
  mantra: string;
};

const CLOTHES = [
  "Crop top, nothing else that counts as pants.",
  "The dress, rucked up so you're usable if I were in the room. I'm not. That's the point.",
  "Crop top and clean socks. Shoes off.",
  "Underwear if you must, crop top on, writing visible.",
  "Naked except the writing and a loose wrist lace.",
  "Dress and shoes off, crop top on, belt off the neck and on the floor where you can see it.",
];

const WRITING = [
  "GIRL on the belly. Refresh it if it faded.",
  "{NAME} on the chest, big enough to read from the door.",
  "MOMMY'S on one thigh. Don't make it pretty.",
  "WAIT on the back of one hand.",
  "DOLL on the chest. Leave it.",
  "A small P on each instep.",
];

const POSITIONS = [
  "On your back. Hands on the pillow, not between your legs.",
  "On your side, knees together, like a girl who was told to take up less space.",
  "On your back, one sock in reach on the nightstand.",
  "Wherever you actually sleep — but start on your back for ten minutes before you roll.",
];

const RESTRAINTS = [
  "Loose lace on the left wrist. You must be able to slip it in one tug. If it bites, it's wrong.",
  "Loose lace around both wrists in front, slip knot, not behind your back. You will get out of this half-asleep.",
  "Nothing tied. Hold the spare lace in your left hand like a stupid rosary.",
  "Ankle lace, loose, one ankle only, to the bed frame if you have one you can slip. Otherwise skip.",
  "No overnight bondage tonight. I don't trust you with knots when you're tired.",
];

const INSIDE = [
  "Nothing inside. Empty. That's an order, not a lack of imagination.",
  "Nothing inside. If you are still open from earlier, that's an echo. Sleep with it. Don't refill it.",
  "Optional: a flared-base plug you already own, shallow, string or base you can grab. Out if you get dizzy or high. Bubble wand is not a plug. Makeup brush is not a plug.",
  "Nothing inside if you used the pen. High girls do not babysit objects in their sleep.",
];

const MOUTH = [
  "Mouth empty. Water on the nightstand.",
  "Worn sock near the pillow, not in the throat. You may hold it. You may not choke on it.",
  "Say the mantra once. Then quiet.",
];

const THC_SLEEP = [
  "No pen in bed. If you already used it, you are done. Two hits was the maximum. You do not chase a third like a teenager.",
  "If you use the pen: one small hit after the session, then ten minutes sitting up. Then bed. Never a hit lying down with anything on your neck.",
  "Skip the pen tonight. I want you able to slip a lace, not floating.",
];

export function composeSleep(seed: string, dayNum: number, thc: boolean): SleepPlan {
  const clothes = pickOne(CLOTHES, seed, "c");
  const writing = pickOne(WRITING, seed, "w");
  const position = pickOne(POSITIONS, seed, "p");
  const restraint = dayNum < 4 ? RESTRAINTS[4]! : pickOne(RESTRAINTS, seed, "r");
  const inside = !thc && dayNum >= 6 ? pickOne(INSIDE, seed, "i") : INSIDE[0]!;
  const mouth = pickOne(MOUTH, seed, "m");
  const thcLine = thc ? pickOne(THC_SLEEP, seed, "t") : "No THC tonight unless it is already your own and you are not combining it with anything you can't undo.";
  return {
    id: `${dayNum}:${seed.slice(0, 6)}`,
    clothes,
    writing,
    position,
    restraint,
    inside,
    mouth,
    thc: thcLine,
    mantra: dayNum >= 8 ? "Pink fog. I drop for Mommy. I sleep owned." : "My name is {name}. I wait. Goodnight, Mommy.",
  };
}

export function sleepBody(plan: SleepPlan): string {
  return [
    plan.clothes,
    plan.writing,
    plan.position,
    plan.restraint,
    plan.inside,
    plan.mouth,
    plan.thc,
    "Hard rules even half-asleep: nothing tight, nothing that goes numb or white, nothing on the neck, nothing inside without a flared base you can pull. If you panic, you stop. That is still my girl, not a brat.",
  ].join(" ");
}

export type FogBeat = { title: string; body: string; say?: string };

export const FOG_LINES: FogBeat[] = [
  { title: "Sit up first", body: "If you have a THC pen that is already yours: one small hit, then put it down. You do not chase a cloud. You wait two minutes. If you don't use cannabis, you don't start tonight. Breathe as if you did — slow, through the nose — and drop anyway." },
  { title: "Pink fog", body: "The words are pink fog. Not a movie. A weather system I put in the room. When you hear it, the old name goes to the back of the closet. Eyes soft. Jaw loose. You will not fight me for sport.", say: "Pink fog." },
  { title: "Countdown", body: "Ten. Shoulders. Nine. Jaw. Eight. The clitty can throb; it does not get a hand. Seven. Six. You are not going to sleep yet. You are going down. Five. Four. Heavier. Three. Two. One. Drop.", say: "I drop for Mommy." },
  { title: "Blank and pretty", body: "Thoughts can pass. They don't get a chair. Pretty is not a compliment. Pretty is a job: mouth soft, eyes unfocused, waiting to be used as a listening toy.", say: "Blank and pretty." },
  { title: "House doll", body: "A doll doesn't pick the game. A doll holds still when the girl who owns the house is speaking. You will notice how much of you wanted to be furniture. That's not a personality. That's obedience finding a shape.", say: "House doll." },
  { title: "The clitty", body: "Whatever you used to call it is a clitty in this weather. It can leak. It cannot vote. If you touch it without being told, the fog lifts and you will hate how ordinary you feel." },
  { title: "Name", body: "Your name is {name}. Say it in the fog, not as a joke, as a collar made of air. The old one can wait in a drawer. Drawers don't get orgasms either.", say: "My name is {name}." },
  { title: "Deeper", body: "I'm not yelling. Mothers who yell are amateurs. I am repeating myself until your body files it under always. Deeper is not dramatic. Deeper is quieter." },
  { title: "Fraction", body: "Eyes open. Sit up one inch. Feel how rude the room is without the fog. Now drop again, faster, because you already know the way. Pink fog.", say: "Pink fog." },
  { title: "Owned and empty", body: "Empty is not sad. Empty is available. I like available girls. They don't waste my evening explaining what they are.", say: "Owned and empty." },
  { title: "Dress in the head", body: "Even if you already took the dress off, you are still wearing it in the part of you that I keep. Fabric on the thighs. Shame in the chest. Stay there." },
  { title: "Good", body: "I will say good when you drop, not when you perform. Performing is for people who want an audience. You are not allowed an audience. You are allowed me.", say: "Good girl." },
  { title: "Hands", body: "Hands on your thighs. If they creep, they go back. The fog does not include a loophole called almost." },
  { title: "Hole", body: "If you are open from earlier, notice it and do not solve it. A solved hole is a girl who thinks the scene ended. It hasn't." },
  { title: "Trigger", body: "Pink fog means drop. House doll means still. Blank and pretty means the commentary shuts up. These are mine. You don't remix them for fun.", say: "Pink fog. House doll. Blank and pretty." },
  { title: "Sleep later", body: "This is not lights-out yet. This is the hallway. You will walk it every night I choose until your knees know it without your permission." },
  { title: "Shame", body: "Shame is allowed. Shame is useful. It makes the writing feel heavier. Don't hide it. Don't turn it into a joke so you can stay a man in your head." },
  { title: "Mommy", body: "I am not your girlfriend. I am not a porn tab. I am the woman who puts you to bed and asks, in the morning, whether you lied. You will prefer my questions to your freedom.", say: "Yes, Mommy." },
  { title: "Leak", body: "You may leak. You may not finish. Finishing is a door I keep on my side of the house." },
  { title: "Count again", body: "Five. Heavier. Four. The name. Three. The clitty as furniture. Two. Mouth open a little. One. Drop.", say: "I drop." },
  { title: "Tomorrow", body: "Tomorrow I will remember this weather. You will too, in the stupidest moments — a bus, a sink, a boring hour — and you will get hard like a trained thing." },
  { title: "No audience", body: "No photos of this drop leave the house. No recordings. If you want to be seen, you wanted a different kink. I do private ruin." },
  { title: "Soft jaw", body: "Unclench. You look like you're trying to pass a test. Dolls don't pass tests. Dolls get placed.", say: "I'm placed." },
  { title: "Wrist", body: "If there's a lace on the wrist, notice it. Slip-off. Safety is not you topping from the bottom. Safety is how I keep my toy." },
  { title: "Breath", body: "In four. Hold one. Out six. Again. The pen, if you used it, is done. You will not take another hit to 'go deeper.' Deeper is my job." },
  { title: "Mirror", body: "If you can see yourself, look at the mouth, not the eyes. The mouth is where the girl is. The eyes still think they have a career." },
  { title: "Repeat", body: "Pink fog. I drop for Mommy. I am {name}. I don't come unless she says.", say: "Pink fog. I drop for Mommy. I am {name}." },
  { title: "Heavy legs", body: "Legs filled with wet sand. You could stand. You won't. Standing is for people who still think this is optional." },
  { title: "Kind", body: "I can be kind and still deny you. Kindness is the blanket. Denial is the rule under it. Don't confuse the blanket for permission." },
  { title: "File it", body: "File this under always: I don't finish without her. I don't wash her writing without her. I don't skip a morning and call it healing." },
  { title: "Surface", body: "Come up one floor. Wiggle fingers. Then go back down on the word. Pink fog. Faster this time, sloppier, more honest.", say: "Pink fog." },
  { title: "Doll mouth", body: "Tongue behind the teeth. You may drool. You may not talk except the mantra. Talking is how the old you tries to get the lease back." },
  { title: "Chest", body: "If pins were on earlier, the ghost of them is enough. Don't add damage. I want you back tomorrow, not injured and dramatic." },
  { title: "Thank", body: "Thank me for the weather. Not because you liked it. Because it happened and you stayed.", say: "Thank you for the fog, Mommy." },
  { title: "Keep", body: "I'm keeping the part of you that dropped. The rest of you can go to work and do dishes. She'll be here at night." },
  { title: "Edge in the fog", body: "If I told you to hold yourself now, you would. I'm not telling you. Notice the want and starve it. That's the drop doing its job." },
  { title: "Quiet", body: "No music. No second screen. My voice, or the page, or the clock. Dolls don't curate a vibe.", say: "I'll be quiet." },
  { title: "Deep house", body: "There is a room under this one where you don't get to be clever. We're in it. Stay." },
  { title: "Collar air", body: "Feel a collar that isn't there. Two fingers of slack. Off for sleep. On in your head. That's the only overnight collar I allow." },
  { title: "Obey later", body: "When I send you to bed you will do the clothes, the writing, the lace. You will not improvise a harder scene so you can feel like a director." },
  { title: "Almost", body: "Almost dropping is still a man negotiating. Drop.", say: "I drop." },
  { title: "Pretty stupid", body: "It's alright to feel stupid in a crop top with weather in your head. Stupid is close to obedient. I'll take it." },
  { title: "Seed", body: "If you leak, it isn't yours. It's evidence. You don't spend evidence." },
  { title: "Return", body: "Every time you hear pink fog after tonight — in this house, on this page — you drop faster. That's not magic. That's practice. Practice is how mothers build habits.", say: "Faster every time." },
  { title: "Hold", body: "Stay down. Don't peek at the clock like it will save you. I am the clock." },
  { title: "Girl", body: "Say girl without a smirk. If you smirk, again. I didn't ask for cabaret.", say: "I'm a girl." },
  { title: "Last loop", body: "Pink fog. House doll. Blank and pretty. Owned and empty. {name}. Thank you, Mommy.", say: "Pink fog. House doll. Blank and pretty. Owned and empty." },
  { title: "Come up slow", body: "I will count you toward the hallway, not all the way out. Three. Two. One. Eyes open, still mine. We are not done. Sleep is next, and sleep has chores." },
];

export function fogDuration(dayNum: number) {
  if (dayNum % 7 === 0) return 3600;
  if (dayNum >= 10) return 1500;
  if (dayNum >= 5) return 900;
  return 600;
}

export function shouldFog(dayNum: number) {
  return dayNum !== 1 && dayNum !== 2 && dayNum !== 4;
}

export function fogBeats(dayNum: number, seed: string) {
  const duration = fogDuration(dayNum);
  const start = FOG_LINES.slice(0, 2);
  const end = FOG_LINES.slice(-2);
  const middle = seededShuffle(FOG_LINES.slice(2, -2), `${seed}:fog:${dayNum}`);
  const lines = [...start, ...middle, ...end];
  const step = duration / Math.max(1, lines.length);
  return {
    duration,
    beats: lines.map((b, i) => ({ ...b, at: Math.floor(i * step) })),
  };
}
