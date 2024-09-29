export const numbers = [
  "A",
  "2",
  "3",
  "4",
  "5",
  "6",
  "7",
  "8",
  "9",
  "10",
] as const;
export const faces = ["J", "Q", "K"] as const;
export const cardValues = [...numbers, ...faces] as const;

export type CardValue = (typeof cardValues)[number];
