import type { Verdict } from "@/lib/progress";

export type Beat = {
  at: number;
  title: string;
  body: string;
  say?: string;
};

export type Phase = {
  id: string;
  chapter: string;
  title: string;
  duration: number;
  gear: string[];
  mantra?: string;
  beats: Beat[];
};

export type Mood = "curious" | "pleased" | "firm" | "tender" | "cold" | "owning";

export type DayProgram = {
  day: number;
  title: string;
  subtitle: string;
  mood: Mood;
  minutes: string;
  note: string;
  overnight: string;
  gear: string[];
  close: "deny" | "ruin" | "lottery";
  weights: { allowed: number; ruined: number; denied: number };
  intro: string;
  phases: Phase[];
};

export const NAMES = [
  "Candy",
  "Barbie",
  "Pinky",
  "Trixie",
  "Cupcake",
  "Lolly",
  "Bambi",
  "Cherry",
  "Precious",
  "Kitten",
  "Bunny",
  "Poppy",
  "Honey",
  "Princess",
  "Babydoll",
] as const;

export const EQUIPMENT = [
  "Crop top",
  "Dress",
  "Makeup brush in a thick silver case",
  "Blush",
  "Body pencil",
  "Spoon",
  "4 shoelaces",
  "2 clothespins",
  "Belt",
  "Shoes",
  "Pens",
  "Ruler",
  "Thick marker (if you have one)",
  "Clean socks",
  "Worn socks",
  "Bubble wand",
  "Mirror",
  "A locked door",
] as const;

export const HARD_LIMITS = [
  "No blood",
  "No bruises that last",
  "No vomiting",
  "No piss / shit / toilet play",
  "No public play. Proof photos stay in this house — never posted, never sent.",
];

export function fill(text: string, name: string, extra?: { day?: number; streak?: number }) {
  return text
    .replaceAll("{name}", name)
    .replaceAll("{NAME}", name.toUpperCase())
    .replaceAll("{day}", String(extra?.day ?? 1))
    .replaceAll("{streak}", String(extra?.streak ?? 0));
}

export function pickName() {
  return NAMES[Math.floor(Math.random() * NAMES.length)] ?? "Candy";
}

export const PUNISHMENTS: { id: string; title: string; duration: number; body: string; say: string }[] = [
  {
    id: "corner",
    title: "Corner",
    duration: 70,
    body: "Of course you couldn't, {name}. Nose in the corner. Clothespins on your nipples or the loose skin of your chest — bite, not tear. Hands behind your back. That little clitty does not touch the wall. Mommy isn't angry. Mommy is disappointed, which is worse, because it means she expected better of her girl.",
    say: "I'm a sloppy girl. Thank you for correcting me, Mommy.",
  },
  {
    id: "ruler",
    title: "Count for Mommy",
    duration: 80,
    body: "Ruler. Twenty on the seat of the dress. You count. You miss a number, you start over. Not a swing that leaves a week of marks — short, sharp, embarrassing. Then ten on the inner thighs. Kneel and thank her like you mean it. Pain is a language. Learn it.",
    say: "I counted. Thank you for teaching me, Mommy.",
  },
  {
    id: "hands",
    title: "Hands off",
    duration: 90,
    body: "Hands on your thighs. Watch it throb in the open air. Ninety seconds. No adjusting laces unless the color goes wrong. This is a sip of the denial Mommy can pour down you any night she likes. Breathe. Do not bargain.",
    say: "I don't get to finish. I wait. Thank you, Mommy.",
  },
  {
    id: "sock",
    title: "Quiet",
    duration: 60,
    body: "Worn sock between the teeth. On all fours. Ass up. Sixty seconds. Breathe through your nose. If it makes you gag, hold it at the lips — Mommy forbade vomiting. She wants a quiet daughter, not a mess.",
    say: "Mmm. Thank you for the sock, Mommy.",
  },
  {
    id: "finger",
    title: "Again",
    duration: 75,
    body: "Spit. One finger, shallow, slow. Other hand off your clitty. Seventy-five seconds of circles. Out, more spit, in. When you fail a task, Mommy does not give you less. She puts you back in the place you were being silly. Lick the finger after. Then we redo the thing you dropped.",
    say: "My hole is learning. Thank you for the correction, Mommy.",
  },
];

export function pickPunishment(strikes: number) {
  return PUNISHMENTS[strikes % PUNISHMENTS.length] ?? PUNISHMENTS[0]!;
}

const denyClose = (extra: string): Phase => ({
  id: "close-deny",
  chapter: "Lights out",
  title: "That's enough",
  duration: 90,
  gear: ["Mirror"],
  mantra: "Thank you for not letting me come, Mommy. I can wait.",
  beats: [
    {
      at: 0,
      title: "Hands on your thighs",
      body: extra,
    },
    {
      at: 50,
      title: "Look at her girl",
      body: "Mirror. Say goodnight to the person in the dress. No last sneak. If you steal it after Mommy leaves, she will know the way you know — in the morning, in your face. Untie anything that needs untying. Pins off. Belt off the neck. Slow.",
      say: "Thank you for not letting me come, Mommy. I can wait.",
    },
  ],
});

export const DAYS: DayProgram[] = [
  {
    day: 1,
    title: "Intake",
    subtitle: "Mommy wants a look at you",
    mood: "curious",
    minutes: "12 min",
    note: "Soft voice. She isn't cruel yet. She's deciding if you're worth keeping.",
    overnight: "No orgasm. Sleep on your back. Say your new name once before you turn the light off. Do not wash anything you wrote.",
    gear: ["Mirror", "Body pencil", "Dress", "Crop top", "Belt"],
    close: "deny",
    weights: { allowed: 0, ruined: 0, denied: 100 },
    intro: "Kneel. Not because you're a slave yet — because Mommy asked, and you're about to find out you like being asked like that. Today I learn your face. You learn to wait.",
    phases: [
      {
        id: "d1-kneel",
        chapter: "Day 1 · Look at me",
        title: "Come here",
        duration: 90,
        gear: ["Mirror"],
        mantra: "Yes, Mommy. I'm here.",
        beats: [
          {
            at: 0,
            title: "On your knees",
            body: "Kneel in front of the mirror. Hands on your thighs, palms up. I'm not going to bark. I'm going to talk to you like a woman talks to a child who has been lying about what they are. You came to me with a list of toys and a secret. Fine. Mommy collects secrets. Breathe through your nose. Don't touch yourself. We haven't earned that conversation.",
          },
          {
            at: 45,
            title: "The deal",
            body: "This is not a one-night script. I will see you tomorrow, and the day after that, and I will remember whether you listened. I do not do blood, lasting bruises, vomit, toilet games, or an audience. I do ownership. If you need to stop for safety, you stop, you untie, you tell me. That is not brat. That is not ruining my fun. That is how a girl stays mine. Repeat.",
            say: "Yes, Mommy. I'm here.",
          },
        ],
      },
      {
        id: "d1-name",
        chapter: "Day 1 · Name",
        title: "You don't get to keep yours",
        duration: 100,
        gear: ["Body pencil", "Mirror", "Thick marker if you have one"],
        mantra: "My name is {name}. I'm Mommy's girl.",
        beats: [
          {
            at: 0,
            title: "Write it",
            body: "Your name is {name}. Not a joke. A collar made of letters. Body pencil — marker if it's thicker — on your chest: {NAME}. On your belly: GIRL. Don't make it pretty. Make it readable. Mommy should be able to see it from the door.",
          },
          {
            at: 55,
            title: "Say it to the glass",
            body: "Look at that face. Still trying to be a man in the lighting. Cute. Three times, slow: the mantra. If you laugh, start over. If you whisper, start over. I want to hear that you understand the trade: you give me the old name, I give you a daily one.",
            say: "My name is {name}. I'm Mommy's girl.",
          },
        ],
      },
      {
        id: "d1-dress",
        chapter: "Day 1 · Pretty",
        title: "Put something on for me",
        duration: 180,
        gear: ["Crop top", "Dress", "Shoes", "Belt", "Mirror"],
        mantra: "I get dressed when Mommy says. I look like her girl.",
        beats: [
          {
            at: 0,
            title: "Crop top",
            body: "Crop top on. I want it too small, too honest. If your chest shows, good. You're not hiding a body from a lover. You're presenting a body to the woman who is going to train it. Adjust it in the mirror like a nervous girl in a changing room. That feeling? Keep it.",
          },
          {
            at: 70,
            title: "Dress, shoes, belt",
            body: "Dress over it. Shoes. Belt around your waist for today — not the neck yet. I don't collar strays on the first night. I dress them and see if they stand differently. Walk three steps toward the glass, three back. Hands at your sides. Don't grab between your legs. If it's getting hard, that's information. Not a reward.",
          },
          {
            at: 130,
            title: "Inspection",
            body: "Turn. Look at the back of the dress. Say, without smiling, that this is what you look like when someone else chooses. Mommy is not impressed yet. She's interested. Interest is how I start. Impressed is how I keep you.",
            say: "I get dressed when Mommy says. I look like her girl.",
          },
        ],
      },
      denyClose(
        "You may hold yourself through the dress for ten slow seconds. Then hands off. That's the whole show, {name}. I don't let new girls come. It makes them think the first night was the point. The point is tomorrow. Leave it aching. Thank me.",
      ),
    ],
  },
  {
    day: 2,
    title: "Pretty on purpose",
    subtitle: "Makeup is not a costume. It's a mark.",
    mood: "pleased",
    minutes: "14 min",
    note: "She's warmer. That's how she gets the blush on you before you notice it's ownership.",
    overnight: "Crop top to bed if you can. No touching. Leave GIRL on your belly.",
    gear: ["Crop top", "Dress", "Shoes", "Blush", "Makeup brush", "Body pencil", "Mirror"],
    close: "deny",
    weights: { allowed: 0, ruined: 0, denied: 100 },
    intro: "You came back. That's the first test most boys fail. Sit down, {name}. Mommy brought a brush.",
    phases: [
      {
        id: "d2-check",
        chapter: "Day 2 · Morning",
        title: "Tell Mommy the truth",
        duration: 80,
        gear: ["Mirror"],
        mantra: "I didn't come. I waited for you, Mommy.",
        beats: [
          {
            at: 0,
            title: "Did you listen",
            body: "Kneel in whatever you slept in. If you came last night, you will say so in a minute — lying to Mommy is a hobby for people I don't keep. If you didn't, good girl. Not because you're strong. Because I asked, and for one night you were too afraid of disappointing me. That's a start.",
          },
          {
            at: 40,
            title: "Still written",
            body: "Show me the letters. If you washed them, write them back now, bigger. {NAME}. GIRL. I like a daughter who doesn't scrub evidence. Mantra.",
            say: "I didn't come. I waited for you, Mommy.",
          },
        ],
      },
      {
        id: "d2-face",
        chapter: "Day 2 · Face",
        title: "Blush",
        duration: 200,
        gear: ["Blush", "Makeup brush", "Mirror", "Crop top", "Dress", "Shoes"],
        mantra: "I wear what Mommy paints. I look cheap on purpose.",
        beats: [
          {
            at: 0,
            title: "Get dressed first",
            body: "Crop top. Dress. Shoes. Then the silver case. That's not a tool, {name}, it's a ritual object. Tap blush on the brush. Cheeks — too much. I want doll, not 'natural.' A little on the nose. Then, if you can stand it, a smear on each nipple through or under the top. Then one insult of color on the head of that clitty. Feminization isn't a tutorial. It's livestock marking with prettier dust.",
          },
          {
            at: 90,
            title: "More writing",
            body: "Inner thigh: MOMMY'S. Other thigh: WAIT. Forearm: BIMBO if it fits, or BABY. Look in the mirror and try to find the boy. He's still there in the jaw. We'll sand that down. Not tonight. Tonight I just want you ashamed of how well the pink takes.",
          },
          {
            at: 150,
            title: "A turn",
            body: "Three steps in, three out. Hands off. If you're hard, say so out loud like you're telling the doctor. Mommy already knows. She wants to hear you admit the dress did it, not some porn in your head.",
            say: "I wear what Mommy paints. I look cheap on purpose.",
          },
        ],
      },
      {
        id: "d2-edge",
        chapter: "Day 2 · Almost",
        title: "You may touch. You may not finish.",
        duration: 160,
        gear: ["Mirror", "Dress"],
        mantra: "This is Mommy's. I don't get to spend it.",
        beats: [
          {
            at: 0,
            title: "Slow",
            body: "Kneel. Dress up. Two fingers, spit or whatever is already leaking. Slow strokes — seconds, not frantic boy-pulls. Watch your painted face while you do it. That's the point. I want you to pair the blush with the ache so tomorrow your body remembers which one I care about.",
          },
          {
            at: 70,
            title: "Edge",
            body: "Faster on the head. Twenty. Stop. Hands on thighs. Breathe. Twenty. Stop. When you get close, you get off it. If you go over today I will be very quiet with you tomorrow, and you won't like quiet Mommy. Quiet Mommy means you stole from her.",
          },
          {
            at: 120,
            title: "Off",
            body: "Hands off for the rest. Look at it pulse. That's hunger. I feed my girls on a schedule you don't set. Mantra. Then we close.",
            say: "This is Mommy's. I don't get to spend it.",
          },
        ],
      },
      denyClose(
        "Day two and you're already leaking on my dress. Good. You still don't come. Mommy is teaching your body that pretty and orgasm are not the same door. Close your legs. Thank me like a daughter who got tucked in.",
      ),
    ],
  },
  {
    day: 3,
    title: "Tied the way a mother ties a ribbon",
    subtitle: "Laces. Not because you're dangerous. Because you're mine.",
    mood: "firm",
    minutes: "16 min",
    note: "The sweetness thins. She expects you to present yourself already dressed.",
    overnight: "Don't wash the writing. No orgasm. If you can, sleep with one lace loosely around your wrist like a reminder.",
    gear: ["4 shoelaces", "Belt", "Pens", "Dress", "Shoes", "Mirror"],
    close: "deny",
    weights: { allowed: 0, ruined: 0, denied: 100 },
    intro: "You're dressed when I arrive now. That's not enthusiasm. That's training starting to take. Kneel, {name}. Wrists.",
    phases: [
      {
        id: "d3-present",
        chapter: "Day 3 · Present",
        title: "I shouldn't have to ask",
        duration: 80,
        gear: ["Dress", "Crop top", "Shoes", "Mirror"],
        mantra: "I'm already pretty for you, Mommy.",
        beats: [
          {
            at: 0,
            title: "Show me",
            body: "If you're not in the crop top and dress, put them on now and know that I noticed the delay. Shoes. Mirror. Palms up. Day three is when Mommy stops explaining why. You know why. You like the voice. You like that someone is worse than your own hands.",
            say: "I'm already pretty for you, Mommy.",
          },
        ],
      },
      {
        id: "d3-laces",
        chapter: "Day 3 · Ribbon",
        title: "Four laces",
        duration: 180,
        gear: ["4 shoelaces", "Belt", "Pens", "Shoes"],
        mantra: "I'm tied because Mommy likes me still.",
        beats: [
          {
            at: 0,
            title: "Balls, then base",
            body: "First lace under the balls, up, knot on top — snug so they sit close, not white, not blue. Pink and tight. If they fade, you loosen immediately. I will not have you ruin my toy to prove you're hardcore. Second lace at the base of that clitty, a few wraps. It should stand because you tied it, not because you earned it.",
          },
          {
            at: 70,
            title: "Pens",
            body: "Slide a pen or two under the ball-lace, across, like a little gate. They'll knock when you move. That's the point. I like noisy girls. Third lace: wrists in front, loose enough to still obey. Fourth: to the belt. Belt goes on the waist today, leash in your palm. Neck collar tomorrow if you're good. Or if you're not. I haven't decided.",
          },
          {
            at: 130,
            title: "Walk",
            body: "Three steps. Hear the pens. Look in the mirror at a girl who tied herself because a woman on a screen used the word Mommy correctly. Don't flinch from that. It's the most honest thing you've done all week.",
            say: "I'm tied because Mommy likes me still.",
          },
        ],
      },
      {
        id: "d3-edge",
        chapter: "Day 3 · Held",
        title: "Stroke around the lace",
        duration: 160,
        gear: ["Mirror", "Laces"],
        mantra: "Tied girls don't come. Tied girls wait.",
        beats: [
          {
            at: 0,
            title: "Around, not through",
            body: "Fingers on the head only. The lace stays. Slow. I want you frustrated by your own knot. Edge twice. Off. If the color on the balls goes wrong, you fix it before you chase a feeling. Mommy's first rule of bondage is still: I keep what I take.",
          },
          {
            at: 90,
            title: "Stay in it",
            body: "Hold the leash. Other hand still. Let it throb against the pens. This is what day three is for — not a new trick, a longer sit in the one I already taught. You don't get variety for being hungry. You get repetition until it's a habit.",
            say: "Tied girls don't come. Tied girls wait.",
          },
        ],
      },
      denyClose(
        "Leave the laces on for one more minute after I finish talking, then take them off slowly. Blood back. Pins if any, off. You don't come. Day three girls who come think they're in a game. You're in a house. Houses have bedtimes.",
      ),
    ],
  },
  {
    day: 4,
    title: "Because I love you",
    subtitle: "A little pain, on purpose, with rules.",
    mood: "tender",
    minutes: "18 min",
    note: "She sounds almost sorry. She isn't. She just wants you to thank her for it.",
    overnight: "No orgasm. If your chest is tender, that's a reminder, not an injury. Don't chase more pain on your own.",
    gear: ["2 clothespins", "Ruler", "Spoon", "Belt", "Dress", "Laces", "Mirror"],
    close: "deny",
    weights: { allowed: 0, ruined: 5, denied: 95 },
    intro: "I don't enjoy hurting you for the sake of it, {name}. I enjoy that you go still when I do. There's a difference. Kneel. We'll be careful, and you'll still cry a little.",
    phases: [
      {
        id: "d4-pins",
        chapter: "Day 4 · Bite",
        title: "Clothespins",
        duration: 120,
        gear: ["2 clothespins", "Crop top"],
        mantra: "It hurts because Mommy is here.",
        beats: [
          {
            at: 0,
            title: "On",
            body: "Dressed. One pin on the left nipple — through the crop top if it bites, on skin if it doesn't. Right pin. It should sting, not tear. If it's unbearable in the first seconds, move to looser chest skin. No blood. No marks you'll be explaining on Monday. Count to ten out loud for me.",
          },
          {
            at: 60,
            title: "Sit in it",
            body: "Breathe. The first pain is theatre. The next minute is honesty. You're a girl with clips on her chest because Mommy wanted a prettier shape. If you whimper, I like that. If you reach to take them off without being told, we start the count again.",
            say: "It hurts because Mommy is here.",
          },
        ],
      },
      {
        id: "d4-ruler",
        chapter: "Day 4 · Ruler",
        title: "Count like a schoolgirl",
        duration: 160,
        gear: ["Ruler", "Spoon", "Dress"],
        mantra: "Thank you for the sting, Mommy.",
        beats: [
          {
            at: 0,
            title: "Ten on the clitty",
            body: "Ruler. Ten on the shaft — wrist, not an axe. Count: one Mommy, two Mommy. Miss, start over. After ten, press the ruler against the head for three seconds. Dull. Then eight on the inner thighs, dress up, alternating. If the skin wants to bruise for a week, you stop and take the rest on the seat of the dress. I want you squirmy. I do not want you damaged. You're expensive to replace.",
          },
          {
            at: 90,
            title: "Spoon",
            body: "Spoon under the balls. Five gentle taps. Gentle. This is a reminder they hang on my mood. Then ten on the ass through the dress with the belt end or the ruler. Count. Pins still on if you can stand them. Kneel, forehead down, ass up, thank me.",
            say: "Thank you for the sting, Mommy.",
          },
        ],
      },
      {
        id: "d4-edge",
        chapter: "Day 4 · After",
        title: "Now that it hurts, touch",
        duration: 140,
        gear: ["Mirror"],
        mantra: "Pain and pretty both belong to Mommy.",
        beats: [
          {
            at: 0,
            title: "Mixed",
            body: "Pins on. Stroke slowly. The body will try to call this a trade: I took pain, so I get to come. That is a boy's math. Mommy's math is: you took pain because I wanted to see you take it. Edge once. Off. The ache in your chest and the ache in your clitty are siblings. Neither one is a voucher.",
            say: "Pain and pretty both belong to Mommy.",
          },
        ],
      },
      denyClose(
        "Pins off now. Rub only if you must. You don't come. If you got close enough to scare yourself, good — tell me with your face, not your hand. Day four is the day you learn Mommy's love has teeth and still tucks you in.",
      ),
    ],
  },
  {
    day: 5,
    title: "Socks",
    subtitle: "You will smell like a life, not a scene.",
    mood: "pleased",
    minutes: "15 min",
    note: "Intimate in a way porn isn't. She wants you smaller.",
    overnight: "Worn socks by the bed. No orgasm. Tomorrow you will put them in your mouth when I say, without making a face.",
    gear: ["Worn socks", "Clean socks", "Shoes", "Mirror", "Dress"],
    close: "deny",
    weights: { allowed: 0, ruined: 8, denied: 92 },
    intro: "Shoes off. Don't act like this is below you. Nothing about you is above a sock, {name}. Mommy is not disgusted. Mommy is specific.",
    phases: [
      {
        id: "d5-smell",
        chapter: "Day 5 · Nose",
        title: "Inhale",
        duration: 150,
        gear: ["Worn socks", "Clean socks", "Shoes"],
        mantra: "I take what Mommy puts in my face.",
        beats: [
          {
            at: 0,
            title: "Worn",
            body: "Worn sock to your nose. Three deep breaths. Don't pretend it's less than it is. Second worn sock in the mouth as a gag — not deep, I forbade vomiting. Clean sock wrapped around the tied or naked clitty. You look exactly right: plugged, wrapped, ridiculous. Stay.",
          },
          {
            at: 80,
            title: "Shoes",
            body: "Gag out, in the palm. Tongue on the inside of each shoe — toe, insole, collar. Five licks each. Then sock back to the nose while you stroke over the clean sock. Slow. Eyes down like a pet. If spit gathers, it goes on the head. Nothing wasted except your pride, and I already took that.",
            say: "I take what Mommy puts in my face.",
          },
        ],
      },
      {
        id: "d5-feet",
        chapter: "Day 5 · Mouth",
        title: "Your own feet",
        duration: 140,
        gear: ["Mirror", "Shoes"],
        mantra: "My mouth is lower than Mommy's shoes.",
        beats: [
          {
            at: 0,
            title: "Lick",
            body: "Lift a foot. Lick the instep. The big toe. The arch. A sissy in a dress licking her own feet because Mommy said the word please without saying please. Put the shoes back on. Keep the socks near. We aren't done with them this week.",
            say: "My mouth is lower than Mommy's shoes.",
          },
        ],
      },
      {
        id: "d5-edge",
        chapter: "Day 5 · Through cloth",
        title: "Sock on, hand slow",
        duration: 120,
        gear: ["Clean socks", "Mirror"],
        mantra: "Even this belongs to her.",
        beats: [
          {
            at: 0,
            title: "Edge",
            body: "Stroke through the clean sock. It should feel stupid and too much. Edge. Off. If you ruin yourself by accident today, you will lick whatever comes off the sock and you will not call it a reward. I prefer you don't. I prefer you wait.",
            say: "Even this belongs to her.",
          },
        ],
      },
      denyClose(
        "Socks down. Shoes on. You don't come. Day five isn't about shock. It's about making the ugly parts of devotion ordinary. Tomorrow I put a finger where you're shy. You'll remember the socks and realize I was being kind.",
      ),
    ],
  },
  {
    day: 6,
    title: "Where girls get used",
    subtitle: "Spit, a finger, and a voice that doesn't rush you.",
    mood: "firm",
    minutes: "18 min",
    note: "Instructional. Almost clinical. Then filthy. That's how a mommy teaches a hole.",
    overnight: "No orgasm. Don't put anything in yourself after we stop. If you feel open, that's an echo. Sleep with it.",
    gear: ["Spit", "Fingers", "Spoon", "Dress", "Mirror"],
    close: "ruin",
    weights: { allowed: 0, ruined: 55, denied: 45 },
    intro: "On all fours. I'm not going to wreck you, {name}. I'm going to show you the other place a girl says yes. Slow. Spit. You will not perform porn for me. You will listen.",
    phases: [
      {
        id: "d6-prep",
        chapter: "Day 6 · Rim of the idea",
        title: "Around, not in",
        duration: 150,
        gear: ["Spit", "Fingers", "Mirror"],
        mantra: "My hole is for Mommy. I open when she says.",
        beats: [
          {
            at: 0,
            title: "Ass up",
            body: "Dress on the hips. Face toward the mirror if you can — I want you to see the shape. Two fingers, a lot of spit. Circles around the hole. Not in until it's slick. If it stings sharp, out, more spit. I don't want blood. I want you to accept that sissies open even when they're embarrassed.",
          },
          {
            at: 80,
            title: "One finger",
            body: "One finger, first knuckle, no deeper than you can without pain. Circle. Out. Spit. Again. Other hand does not stroke. Other hand holds a lace, or presses the clitty to your belly so it leaks into the dress. Say: I'm a hole. Every time it goes in. If nothing goes in, stay on the circles. You will not injure yourself to impress a woman who already has you.",
            say: "My hole is for Mommy. I open when she says.",
          },
        ],
      },
      {
        id: "d6-two",
        chapter: "Day 6 · Two if it lets you",
        title: "Don't force it",
        duration: 120,
        gear: ["Spit", "Fingers"],
        mantra: "Slow is how Mommy loves me.",
        beats: [
          {
            at: 0,
            title: "Maybe two",
            body: "If one was easy, two — still shallow, still spit. If it wasn't easy, you stay on one and you don't apologize. I am not scoring depth. I am scoring obedience. Breathe out when you go in. That's a girl trick. Learn it.",
            say: "Slow is how Mommy loves me.",
          },
        ],
      },
      {
        id: "d6-edge",
        chapter: "Day 6 · Mean little mercy",
        title: "I might let it spill",
        duration: 150,
        gear: ["Spoon", "Mirror"],
        mantra: "If I spill, I don't get to enjoy it.",
        beats: [
          {
            at: 0,
            title: "Finger still, hand on the clitty",
            body: "If a finger is in, it stays still. Other hand strokes toward the edge. Today I may ruin you. That means: you take it to the point of no return and you pull off so it leaks without the wave. Spoon underneath. If I deny instead, you will not argue. Both are Mommy. Neither is you.",
          },
          {
            at: 80,
            title: "Listen",
            body: "Faster. When it lifts, you decide nothing. You wait for the last seconds of this timer and then you do what the closing says. If you go over with a full stroke, that's stealing. Licking it after does not make stealing cute.",
            say: "If I spill, I don't get to enjoy it.",
          },
        ],
      },
    ],
  },
  {
    day: 7,
    title: "One week",
    subtitle: "She is proud. That is a trap.",
    mood: "pleased",
    minutes: "20 min + pink fog",
    note: "Anniversary voice. Pets, praise, and the first real lottery — she still usually says no.",
    overnight: "You are one week old as {name}. No secret orgasm in the afterglow. If you got to come, that was the gift. If you didn't, that was the gift.",
    gear: ["Belt", "Lace leash", "Spoon", "Worn sock", "Dress", "Shoes", "Mirror"],
    close: "lottery",
    weights: { allowed: 14, ruined: 36, denied: 50 },
    intro: "Seven days, {name}. I don't throw parties for livestock, but I do mark a calendar. Today you crawl, and then I roll a private dice you don't get to see.",
    phases: [
      {
        id: "d7-review",
        chapter: "Day 7 · Review",
        title: "What I made",
        duration: 100,
        gear: ["Mirror", "Dress"],
        mantra: "One week as {name}. I'm still Mommy's.",
        beats: [
          {
            at: 0,
            title: "Look",
            body: "Dressed. Writing. If the letters faded, put them back. I want a week of evidence. Tell the mirror what you are, without the old name. If you use the old name even in your head, start the sentence again. I didn't keep you this long to hear a boy narrate.",
            say: "One week as {name}. I'm still Mommy's.",
          },
        ],
      },
      {
        id: "d7-pet",
        chapter: "Day 7 · Pet",
        title: "Collar",
        duration: 180,
        gear: ["Belt", "Lace", "Worn sock", "Spoon", "Shoes"],
        mantra: "Woof. I'm Mommy's dog. I don't need words.",
        beats: [
          {
            at: 0,
            title: "On all fours",
            body: "Belt at the neck — two fingers under it, always. Lace as a leash. Worn sock in the teeth, not the throat. Five laps of the room on your knees. Every corner: stop, ass up, three seconds. No talking. Pet sounds. If you're embarrassed, you're in the correct country.",
          },
          {
            at: 90,
            title: "Bowl",
            body: "Sock out. Spoon on the floor. Lick it off the ground, hands staying down. Seven licks. Forehead to floor, ass highest, thirty seconds. You are furniture that drools. You are a dog waiting on a verdict about an orgasm you don't own.",
            say: "Woof. I'm Mommy's dog. I don't need words.",
          },
        ],
      },
      {
        id: "d7-edge",
        chapter: "Day 7 · Ask",
        title: "Beg like you mean the week",
        duration: 150,
        gear: ["Mirror", "Spoon"],
        mantra: "Please, Mommy. I know you can say no.",
        beats: [
          {
            at: 0,
            title: "Last edge of the week",
            body: "Spoon in the left hand. Right hand to the edge and hold. I already have the roll. You don't. Maybe you come. Maybe I wreck it. Maybe you get nothing and kiss me for it. Don't write a happy ending in your head. Edge. Hold. Off if you have to. Stay pretty.",
          },
          {
            at: 80,
            title: "Please",
            body: "Out loud, ugly, like a bimbo: please. Say you're {name}. Say you'll eat it if I tell you. Say you'll take denial if I tell you. Say a ruined orgasm is mercy. Lie if you have to. I like it when you lie and still obey.",
            say: "Please, Mommy. I know you can say no.",
          },
        ],
      },
    ],
  },
  {
    day: 8,
    title: "I don't ask anymore",
    subtitle: "The sweetness was bait. It worked.",
    mood: "cold",
    minutes: "16 min",
    note: "Fewer compliments. She talks like this is just a Tuesday in her house.",
    overnight: "No orgasm unless I allowed one, and I probably didn't. Keep the writing. You're not new.",
    gear: ["Dress", "Makeup brush", "Spoon", "Ruler", "Mirror", "Laces"],
    close: "deny",
    weights: { allowed: 6, ruined: 24, denied: 70 },
    intro: "Don't look at me like you want a speech, {name}. You know the kneel. You know the dress. Mommy's not your girlfriend. I'm the woman who already won.",
    phases: [
      {
        id: "d8-habit",
        chapter: "Day 8 · Habit",
        title: "Be ready when I walk in",
        duration: 90,
        gear: ["Dress", "Crop top", "Shoes", "Writing"],
        mantra: "I don't need a pep talk. I'm hers.",
        beats: [
          {
            at: 0,
            title: "Standard",
            body: "Dressed, written, kneeling, palms up. If I have to wait on clothes, that's a strike you give yourself. Day eight is the day praise gets expensive. You get 'good girl' when I feel like hearing myself say it, not when you perform hunger.",
            say: "I don't need a pep talk. I'm hers.",
          },
        ],
      },
      {
        id: "d8-cei",
        chapter: "Day 8 · Mouth",
        title: "Taste what you are",
        duration: 140,
        gear: ["Spoon", "Ruler", "Fingers", "Makeup brush"],
        mantra: "My mouth is a bin for what I leak.",
        beats: [
          {
            at: 0,
            title: "Precum",
            body: "Stroke just enough to wet the head. Scrape it onto the spoon. Eat it. Eyes in the mirror so you see the bimbo face swallow her own embarrassment. Lick the ruler that has slapped you. Kiss the silver brush like it's my hand. This is CEI practice. If I ever give you more, you'll already know where it goes.",
            say: "My mouth is a bin for what I leak.",
          },
        ],
      },
      {
        id: "d8-edge",
        chapter: "Day 8 · Cold edge",
        title: "I can do this bored",
        duration: 160,
        gear: ["Mirror", "Laces"],
        mantra: "Mommy doesn't owe me a finish.",
        beats: [
          {
            at: 0,
            title: "Work",
            body: "Forty slow. Stop. Twenty. Stop. I am not narrating your beauty today. You are a task I do because I like a house where something kneels. Edge and get off it. If you whine, I like that more than if you act stoic. Stoic is a boy trying to look brave. Whining is a daughter.",
            say: "Mommy doesn't owe me a finish.",
          },
        ],
      },
      denyClose(
        "Hands off. Day eight endings are plain. You don't come. Untie. Wash the spoon. Don't wash the letters. I will see you tomorrow and I will not be excited. That's how you know it's real.",
      ),
    ],
  },
  {
    day: 9,
    title: "Deeper manners",
    subtitle: "The brush, the wand, and a mother who holds the other end.",
    mood: "firm",
    minutes: "18 min",
    note: "She's careful and filthy at once. You will not let go of anything you put inside.",
    overnight: "Nothing left inside. No orgasm. If you feel used, good. That's the point of a Tuesday.",
    gear: ["Makeup brush in silver case", "Bubble wand", "Spit", "Fingers", "Spoon", "Dress"],
    close: "ruin",
    weights: { allowed: 5, ruined: 50, denied: 45 },
    intro: "On your face. Ass up. Today I use things that were never meant for you, {name}, and you will treat them like they were. You hold the end. Always. I am not fishing you out of a hospital.",
    phases: [
      {
        id: "d9-brush",
        chapter: "Day 9 · Silver",
        title: "The case",
        duration: 160,
        gear: ["Makeup brush", "Spit"],
        mantra: "I hold it. I don't lose it. It's Mommy's.",
        beats: [
          {
            at: 0,
            title: "Spit, then the cover",
            body: "Fingers first if you need a reminder from day six. Then the thick silver case. Coat it. You never let go. Tip only, a few centimeters, slow circles. This is the sissy cock sticking out of you while the one between your legs stays a tied joke. Twenty slow movements. Out. Still holding. You will not leave it in. I'm not your emergency contact for stupidity.",
            say: "I hold it. I don't lose it. It's Mommy's.",
          },
        ],
      },
      {
        id: "d9-wand",
        chapter: "Day 9 · Plastic",
        title: "Bubble wand",
        duration: 140,
        gear: ["Bubble wand", "Spit", "Spoon"],
        mantra: "Shallow. Slow. Hers.",
        beats: [
          {
            at: 0,
            title: "The stick, not the bottle",
            body: "Smooth plastic wand — not the whole bottle, not a sharp wire loop. Spit. Hold the far end the entire time. Shallow. Ten slow pushes. You may rub the clitty with the other hand only to the edge, not over. Out. Lay the wand on the spoon like a tray. Your hole will pulse. You will thank me. Pins on if they still behave.",
            say: "Shallow. Slow. Hers.",
          },
        ],
      },
      {
        id: "d9-edge",
        chapter: "Day 9 · Ruin weather",
        title: "I like you leaking without the fun",
        duration: 140,
        gear: ["Spoon", "Mirror"],
        mantra: "Take the leak. Don't take the pleasure.",
        beats: [
          {
            at: 0,
            title: "Toward the drop",
            body: "Stroke. Today is ruin-leaning. When the first clench starts, hand OFF. Let it dribble into the spoon. No riding the wave. If I deny instead, same pose, nothing comes, you still thank me. If you finish it with a fist, you're a thief and you still lick the spoon.",
            say: "Take the leak. Don't take the pleasure.",
          },
        ],
      },
    ],
  },
  {
    day: 10,
    title: "Pet, properly",
    subtitle: "You don't need a personality today.",
    mood: "owning",
    minutes: "17 min",
    note: "Affectionate the way someone is affectionate with a coat they love.",
    overnight: "Belt off the neck when we finish. No orgasm. Practice saying woof once in the dark, then go to sleep. Don't make it a joke.",
    gear: ["Belt", "Lace leash", "Worn sock", "Spoon", "Shoes", "Dress"],
    close: "deny",
    weights: { allowed: 8, ruined: 22, denied: 70 },
    intro: "Down. I don't want the girl who talks. I want the one with a spine that knows the floor, {name}. Mommy will pat. Mommy will also ignore you. Both are love.",
    phases: [
      {
        id: "d10-laps",
        chapter: "Day 10 · Floor",
        title: "Laps",
        duration: 160,
        gear: ["Belt", "Lace", "Worn sock", "Shoes"],
        mantra: "Woof. I'm Mommy's. I don't need words.",
        beats: [
          {
            at: 0,
            title: "Collar and sock",
            body: "Belt, two fingers. Leash. Sock in the teeth. Laps. Corners. Ass up. If your knees hurt, that's free. I don't owe you a rug. Pets don't get interior design. They get a voice and a floor.",
          },
          {
            at: 90,
            title: "Three woofs",
            body: "Sock out. Three woofs. Three whines. One 'please, Mommy' and then woof again because words were on loan. Spin in a circle. Look at the mirror from this height — red face, letters, dress, collar. This is not a scene for guests. This is how you live when I'm in the room.",
            say: "Woof. I'm Mommy's. I don't need words.",
          },
        ],
      },
      {
        id: "d10-still",
        chapter: "Day 10 · Still",
        title: "Furniture",
        duration: 140,
        gear: ["Spoon"],
        mantra: "I can be quiet in her house.",
        beats: [
          {
            at: 0,
            title: "Hold",
            body: "Spoon on the floor. Lick. Then forehead down, ass up, two minutes of almost nothing. I am not entertaining you. If your clitty drips, it drips. You do not hunt it. Pets who hump furniture get a newspaper. You get my silence.",
            say: "I can be quiet in her house.",
          },
        ],
      },
      denyClose(
        "Up on your knees when I say, not before. Collar off. You don't come. Day ten is the day I stop needing you to understand. Understanding is extra. Obedience is the pet.",
      ),
    ],
  },
  {
    day: 11,
    title: "The boy is a story",
    subtitle: "Longer edge. Meaner mouth. She sounds almost sad for him.",
    mood: "cold",
    minutes: "20 min",
    note: "Psychological. She isn't yelling. She's rewriting.",
    overnight: "No orgasm. If you cry, you don't hide it. If you don't cry, don't fake it. Mommy hates acting.",
    gear: ["Mirror", "Laces", "Clothespins", "Spoon", "Dress"],
    close: "lottery",
    weights: { allowed: 10, ruined: 40, denied: 50 },
    intro: "Look at me, {name}. That face in the glass used to have a future that didn't include me. I'm not sorry. I'm thorough.",
    phases: [
      {
        id: "d11-talk",
        chapter: "Day 11 · Talk",
        title: "Listen while you ache",
        duration: 180,
        gear: ["Mirror", "Clothespins"],
        mantra: "I'm not a man. I'm {name}. I belong to Mommy.",
        beats: [
          {
            at: 0,
            title: "Pins and a lecture",
            body: "Pins on. Kneel. You may hold, not stroke, for the first minute. Your value is how ugly you look while you obey. Your balls are decoration. Your mouth is a rag. Your hole is a joke I happen to like. And you thank me, because without me you're just a person in a bathroom. With me you're at least a toy.",
          },
          {
            at: 80,
            title: "The boy",
            body: "The boy is a story you tell to keep from saying Mommy in public. He doesn't pay rent here. Edge. Hold. Off. Look at the writing. If you need to cry, cry. If you need to go blank, go blank. I will not soothe you. I will also not mock the tears. Tears are just water leaving a girl.",
            say: "I'm not a man. I'm {name}. I belong to Mommy.",
          },
        ],
      },
      {
        id: "d11-edge",
        chapter: "Day 11 · Work",
        title: "Again, and again",
        duration: 200,
        gear: ["Spoon", "Laces", "Mirror"],
        mantra: "Please is not a lever. It's furniture.",
        beats: [
          {
            at: 0,
            title: "Pattern",
            body: "Ten seconds fast, stop. Twenty slow, stop. Say please. Then: I don't deserve it. Then: thank you for keeping it. Alternate until please and thank you feel like one word. Because with me they are. Drop a bead on the spoon if it leaks. Don't eat it yet.",
          },
          {
            at: 110,
            title: "Hold the last minute",
            body: "Almost no movement. Wrap. Feel how ten strokes would end you. You don't get them unless the lottery says so, and even then I might make it ugly. Stay in the dress. Stay in the name. Don't invent a boy to come back to when this file closes.",
            say: "Please is not a lever. It's furniture.",
          },
        ],
      },
    ],
  },
  {
    day: 12,
    title: "Protocol",
    subtitle: "Dressed, tied, clipped, opened, edged. She yawns.",
    mood: "owning",
    minutes: "22 min",
    note: "Stacked. Routine. The scariest version of love is boredom.",
    overnight: "You know the rules. Don't make me write them like you're new.",
    gear: ["Full kit: dress, laces, pins, belt, spoon, brush or wand, mirror"],
    close: "lottery",
    weights: { allowed: 12, ruined: 38, denied: 50 },
    intro: "We don't need a theme, {name}. We need a standard. Put it all on. Mommy will walk the house while you hold still in it.",
    phases: [
      {
        id: "d12-stack",
        chapter: "Day 12 · Stack",
        title: "Everything that fits",
        duration: 180,
        gear: ["Dress", "Laces", "Pins", "Belt", "Pens"],
        mantra: "This is just my body now.",
        beats: [
          {
            at: 0,
            title: "Build",
            body: "Crop top, dress, shoes, letters, laces, pens, pins, belt at the neck with two fingers. Mirror. If something doesn't fit today, skip it without drama and tell me. I prefer a complete picture. I will accept a careful one. I will not accept a lazy one.",
          },
          {
            at: 90,
            title: "Hold the picture",
            body: "No stroking yet. Just stand or kneel in the full kit. This is what I would show a friend, if I allowed friends to see my things. I don't. You're private. Private is not the same as cherished in a soft way. Private is: mine, in a drawer, taken out when I want a noise.",
            say: "This is just my body now.",
          },
        ],
      },
      {
        id: "d12-use",
        chapter: "Day 12 · Use",
        title: "Finger or brush, then the edge",
        duration: 200,
        gear: ["Spit", "Brush or fingers", "Spoon"],
        mantra: "Used, pretty, waiting.",
        beats: [
          {
            at: 0,
            title: "Open",
            body: "Shallow finger or silver case. Hold the object. Other hand edges. I am stacking on purpose. A girl who can only do one sensation is a tourist. You live here. If you have to drop a piece for safety, drop it. If you drop it because you're greedy, that's a couldn't.",
          },
          {
            at: 110,
            title: "Spoon ready",
            body: "Spoon under. Lottery later. For now you stay at the line. If you fall over it, ruin it — pull off, let it fail, lick what's there. Don't turn a mistake into a stolen orgasm and then look at me like a wife.",
            say: "Used, pretty, waiting.",
          },
        ],
      },
    ],
  },
  {
    day: 13,
    title: "Almost",
    subtitle: "She talks about tomorrow like a threat and a lullaby.",
    mood: "tender",
    minutes: "16 min",
    note: "Soft voice, hard ending. This is how mothers ruin you without raising a hand.",
    overnight: "No orgasm. Think about day fourteen without touching. If you break tonight, tomorrow is colder.",
    gear: ["Mirror", "Spoon", "Dress", "Laces"],
    close: "deny",
    weights: { allowed: 4, ruined: 16, denied: 80 },
    intro: "Tomorrow I keep you, {name}. Tonight I starve you on purpose so the keeping has a taste. Come here. I won't shout.",
    phases: [
      {
        id: "d13-soft",
        chapter: "Day 13 · Soft",
        title: "Good girl, mean night",
        duration: 160,
        gear: ["Mirror", "Dress"],
        mantra: "I can be good without being fed.",
        beats: [
          {
            at: 0,
            title: "Praise that doesn't pay",
            body: "You look like mine. That's not nothing. I know the week cost you. I know you thought about cheating. If you didn't, I'm almost proud. Pride is not a key to your clitty. Stroke slowly while I say nice things, and notice that the nice things do not include 'come.'",
          },
          {
            at: 80,
            title: "Off",
            body: "Hands off. I want you shaking and still calling me Mommy. That's the shape I like before a claiming day. If you cry because you're close, I will not give it to you to make the crying stop. I will wait it out like a fever.",
            say: "I can be good without being fed.",
          },
        ],
      },
      {
        id: "d13-edge",
        chapter: "Day 13 · Line",
        title: "Stay on the line",
        duration: 160,
        gear: ["Spoon", "Laces"],
        mantra: "Tomorrow is hers. Tonight is empty.",
        beats: [
          {
            at: 0,
            title: "Three approaches",
            body: "To the edge. Off. To the edge. Off. To the edge. Off. No fourth. Spoon empty on purpose. You're allowed to hate me a little. Hate is intimate. Bring it tomorrow. I'll put it next to the dress.",
            say: "Tomorrow is hers. Tonight is empty.",
          },
        ],
      },
      denyClose(
        "Denied, and not as a surprise. I told you. Drink water. Untie. Sleep in the crop top. If you steal an orgasm tonight, you will tell me in the morning and I will still love you and I will also make day fourteen ugly. Both can be true.",
      ),
    ],
  },
  {
    day: 14,
    title: "Kept",
    subtitle: "You're not visiting Mommy. You live here.",
    mood: "owning",
    minutes: "22 min + hour fog",
    note: "Full voice. Owner. The lottery is real, and so is the rest of your life after it.",
    overnight: "Whatever I decided, that's the law. No second try in the shower. You may take the letters off tomorrow if you must. I'd rather you didn't.",
    gear: ["Full kit"],
    close: "lottery",
    weights: { allowed: 18, ruined: 40, denied: 42 },
    intro: "Fourteen days, {name}. That's not a streak. That's a move-in. Kneel in the whole kit. I already rolled. You'll hear it at the end, like a mother telling you whether there's dessert.",
    phases: [
      {
        id: "d14-house",
        chapter: "Day 14 · House",
        title: "This is the house",
        duration: 140,
        gear: ["Full kit", "Mirror"],
        mantra: "I live with Mommy. My name is {name}.",
        beats: [
          {
            at: 0,
            title: "Put it on like work clothes",
            body: "You know the order. Dress. Letters. Laces. Pins. Belt. Shoes. Spoon. You should not need me to sequence it. If you do, you're still a guest. Guests don't get fourteen. Do it. Then look at the glass until you can say the mantra without performing.",
            say: "I live with Mommy. My name is {name}.",
          },
        ],
      },
      {
        id: "d14-use",
        chapter: "Day 14 · Use",
        title: "Open and ask",
        duration: 180,
        gear: ["Brush or fingers", "Spoon"],
        mantra: "Please, Mommy. Your house, your rules.",
        beats: [
          {
            at: 0,
            title: "Hole and hand",
            body: "Shallow open. Edge. I want you used and asking, not used and assuming. Fourteen days does not entitle you to cum. It entitles you to a decision. Hold the edge. Drop precum on the spoon if it comes. Don't eat yet.",
          },
          {
            at: 100,
            title: "Ask correctly",
            body: "Please, without the boy speech. No 'I did everything.' You did what you were told, which is the minimum. Ask like a daughter who knows dessert is optional. Then hands off until the verdict.",
            say: "Please, Mommy. Your house, your rules.",
          },
        ],
      },
    ],
  },
];

export const MAINTENANCE: Omit<DayProgram, "day">[] = [
  {
    title: "Still here",
    subtitle: "Maintenance. She doesn't reinvent you. She uses you.",
    mood: "owning",
    minutes: "18 min",
    note: "Past the program. This is just life in her house.",
    overnight: "Same law as always. No secret extras.",
    gear: ["Full kit"],
    close: "lottery",
    weights: { allowed: 12, ruined: 38, denied: 50 },
    intro: "You're not new, {name}. Don't act new. Put the house on. Mommy's not entertaining a milestone. She's taking what's already hers.",
    phases: [
      {
        id: "m-stack",
        chapter: "Kept · Standard",
        title: "The usual",
        duration: 160,
        gear: ["Full kit"],
        mantra: "I'm still {name}. I'm still hers.",
        beats: [
          {
            at: 0,
            title: "Dress the house",
            body: "Full kit without a tour guide. If you forgot a piece, that's not cute, it's rust. Pins, laces, belt, letters. Kneel. I should be able to walk in and recognize my furniture.",
            say: "I'm still {name}. I'm still hers.",
          },
        ],
      },
      {
        id: "m-use",
        chapter: "Kept · Use",
        title: "Open, edge, wait",
        duration: 180,
        gear: ["Brush or fingers", "Spoon"],
        mantra: "Used on a weekday. That's the point.",
        beats: [
          {
            at: 0,
            title: "Work",
            body: "Shallow open. Edge twice. Spoon ready. You know the lottery exists. You also know most days I like you hungry. Don't perform surprise. Perform manners.",
            say: "Used on a weekday. That's the point.",
          },
        ],
      },
    ],
  },
  {
    title: "Quiet house",
    subtitle: "Pet day. Less talking.",
    mood: "cold",
    minutes: "16 min",
    note: "She wants noise from your throat, not your personality.",
    overnight: "No orgasm. Collar off after. Sleep.",
    gear: ["Belt", "Lace", "Worn sock", "Spoon", "Dress"],
    close: "deny",
    weights: { allowed: 6, ruined: 24, denied: 70 },
    intro: "Down. I had a long day that wasn't about you. That doesn't mean you get a night off. It means you get to be easy.",
    phases: [
      {
        id: "m-pet",
        chapter: "Kept · Floor",
        title: "Easy pet",
        duration: 200,
        gear: ["Belt", "Lace", "Worn sock", "Spoon"],
        mantra: "Woof. Easy. Hers.",
        beats: [
          {
            at: 0,
            title: "Laps and lick",
            body: "Collar, leash, sock, laps, spoon on the floor. Then still, ass up, a full minute of nothing. If you edge, you do it on the floor like a dog rubbing a carpet, and you stop when I say. I probably say stop.",
            say: "Woof. Easy. Hers.",
          },
        ],
      },
      denyClose("Off the floor. Collar off. Denied, because I didn't have dessert either. Don't make this about fairness. Make it about being easy to keep."),
    ],
  },
  {
    title: "Mean little mercy",
    subtitle: "Ruin weather in a house you already live in.",
    mood: "tender",
    minutes: "17 min",
    note: "She might let it spill. She probably won't let it feel like much.",
    overnight: "If it spilled, you don't chase a second. If it didn't, you don't steal one.",
    gear: ["Dress", "Laces", "Spoon", "Pins", "Mirror"],
    close: "ruin",
    weights: { allowed: 8, ruined: 54, denied: 38 },
    intro: "Come here, {name}. I might be kind in a way you hate. That's still kind.",
    phases: [
      {
        id: "m-edge",
        chapter: "Kept · Line",
        title: "Take it to the drop",
        duration: 200,
        gear: ["Spoon", "Laces", "Pins"],
        mantra: "Leak if she wants. Pleasure if she wants. Not my vote.",
        beats: [
          {
            at: 0,
            title: "Work the line",
            body: "Pins. Laces. Stroke to the clench and be ready to pull off. Spoon under. I like ruined girls on ordinary nights. It keeps the house from turning into a spa. If I deny instead, you hold the empty spoon like an idiot and you thank me.",
            say: "Leak if she wants. Pleasure if she wants. Not my vote.",
          },
        ],
      },
    ],
  },
];

export function getDay(n: number): DayProgram {
  if (n <= 14) return DAYS[n - 1] ?? DAYS[0]!;
  const base = MAINTENANCE[(n - 15) % MAINTENANCE.length]!;
  return {
    ...base,
    day: n,
    subtitle: `Day ${n} · ${base.subtitle}`,
  };
}

export type VerdictScript = {
  stamp: string;
  title: string;
  duration: number;
  beats: Beat[];
  closing: string;
  line: string;
};

export function verdictScript(v: Verdict, day: number): VerdictScript {
  if (v === "allowed") {
    return {
      stamp: "DESSERT",
      title: "You may. Ugly, and looking at me.",
      duration: 150,
      line: "Allowed — she let the girl have it, on a spoon, with thanks.",
      beats: [
        {
          at: 0,
          title: "The roll landed on mercy",
          body: "Surprise, {name}. You may come. Not because you earned a manhood. Because Mommy likes watching a dressed girl fall apart when she's given permission she begged for. Spoon under. Mirror. Laces stay unless they block you — loosen if they do. Pins stay.",
        },
        {
          at: 40,
          title: "Now",
          body: "Stroke. Fast. Eyes open. Out loud: thank you, Mommy, I may. Come in the spoon, not the dress, not the floor, if you can catch it. Don't bury it in a pillow. I want the face.",
        },
        {
          at: 90,
          title: "Eat",
          body: "Spoon up. Eat what's there. Lick fingers. Slow, no vomiting — small swallows, breathe. Even a drop counts. Then kneel, forehead down. Laces off. Pins off. Belt off. A toy gets put away after it's used, not before.",
        },
      ],
      closing:
        "You were allowed. Don't get used to the taste of that word. Tomorrow I can roll something meaner. Wash the spoon. Stay in the dress one extra minute and look. You're {name}. Mommy's done with you. For tonight.",
    };
  }
  if (v === "ruined") {
    return {
      stamp: "RUINED",
      title: "Spill it. Don't keep it.",
      duration: 150,
      line: "Ruined — she let it leak and took the pleasure back.",
      beats: [
        {
          at: 0,
          title: "The roll landed on cruelty",
          body: "You will come and you will not get it. Ruined, {name}. Spoon under. Stroke to the point of no return — and on the first clench, HAND OFF. No riding. No finishing. It should fall out of you, not reward you. If you fist it through anyway, you're a thief and you still lick.",
        },
        {
          at: 45,
          title: "Wreck it",
          body: "Faster. When it trips, off, pulses into air and spoon and nothing. Look. That's all you are today — a few twitches without the sweetness. Blush. Dress. Ugly face that wanted dessert. Don't touch it back, even when the emptiness hurts.",
        },
        {
          at: 95,
          title: "Clean",
          body: "Spoon. Fingers. Eat what leaked. CEI isn't a bonus. It's wiping my kitchen. Then laces, pins, collar off. Stay in the dress. Say: I ruined it because Mommy wanted it ruined. Thank her.",
        },
      ],
      closing:
        "That was as little as I wanted. {name} will not remember a high. She will remember a hand leaving. Wash. Letters stay if they can. I'm going. You're still mine.",
    };
  }
  return {
    stamp: "NOTHING",
    title: "No.",
    duration: 150,
    line: day >= 14 ? "Denied — kept hungry in a house she already lives in." : "Denied — Mommy closed her legs for her.",
    beats: [
      {
        at: 0,
        title: "The roll landed on zero",
        body: "No. No orgasm. No ruin. Nothing, {name}. Hands on your thighs. Let it stand, leak, pulse — without you. Spoon in front of you, empty, as a joke. Pins stay to the end of the count if they can. Laces stay if they're pink, not white.",
      },
      {
        at: 55,
        title: "No hand",
        body: "If you touch, you betray even this ending, and I still won't let you finish — you'll just be a cheater on top of hungry. Look in the glass. Dressed, tied, empty spoon. That's the house. My mood is law. Your clitty is decor that does not serve you tonight.",
      },
      {
        at: 105,
        title: "Put away hungry",
        body: "Last half minute. Then laces off, pins off, belt off. Don't 'just wipe' the clitty until it's soft on its own. Paper after. If precum is on the spoon, eat that. You don't get seed. Thank me for zero. Forehead on the floor.",
      },
    ],
    closing:
      "You got nothing. That's a gift too — memory. {name} will go to bed charged, painted, with someone else's word on her thigh. Stay in the dress five more minutes. Then tidy. Then quiet. No touching after me. If you break that, you weren't denied. You were a thief of your own punishment.",
  };
}

export const MOOD_LABEL: Record<Mood, string> = {
  curious: "Curious",
  pleased: "Pleased",
  firm: "Firm",
  tender: "Tender-cruel",
  cold: "Cold",
  owning: "Home",
};
