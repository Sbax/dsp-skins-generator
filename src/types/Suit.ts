export const suits = ["hearts", "clubs", "diamonds", "spades"] as const;

export type Suit = (typeof suits)[number];
