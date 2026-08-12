export const FRAME_COUNT = 169;

export const framePath = (n: number) =>
  `/frames/frame_${String(n).padStart(4, "0")}.jpg`;

export type Dialogue = {
  id: string;
  show: number;
  hide: number;
  quote: string;
  speaker: string;
  film: string;
};

export const DIALOGUES: Dialogue[] = [
  {
    id: "d1",
    show: 0.1,
    hide: 0.3,
    quote: "Building reverse-learning platform 'Mirai' where users build first and learn afterward.",
    speaker: "Amogh M G",
    film: "PROJECT MIRAI — LLM AGENTS",
  },
  {
    id: "d2",
    show: 0.35,
    hide: 0.55,
    quote: "Engineered a Small Language Model from scratch—custom tokenizer & PyTorch pipeline.",
    speaker: "Amogh M G",
    film: "SLM TOOLKIT — DEEP LEARNING",
  },
  {
    id: "d3",
    show: 0.6,
    hide: 0.8,
    quote: "Appointed to IEEE Executive Committee as 1st-year student—led 100+ student workshops.",
    speaker: "Amogh M G",
    film: "IEEE STUDENT COUNCIL — BANGALORE",
  },
];

export const HERO_TEXT_FADE_END = 0.08;
