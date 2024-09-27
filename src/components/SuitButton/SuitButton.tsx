import { ButtonHTMLAttributes, FC } from "react";
import { Suit } from "types/Suit";

type SuitButtonProps = Omit<
  ButtonHTMLAttributes<HTMLButtonElement>,
  "className"
> & {
  suit: Suit;
  active?: boolean;
  initialState?: boolean;
};

export const SuitButton: FC<SuitButtonProps> = ({
  suit,
  active,
  initialState,
  ...props
}) => {
  return (
    <button
      {...props}
      className={[
        "transition-all h-auto rounded-lg bg-opacity-20 px-4 py-4 text-2xl shadow-md",
        `bg-${suit} text-${suit}`,
        "hover:bg-opacity-30 hover:shadow-inner",
        initialState || active ? "opacity-100" : "opacity-40 hover:opacity-100",
      ].join(" ")}
    >
      {suit === "hearts" && "♥"}
      {suit === "clubs" && "♣"}
      {suit === "diamonds" && "♦"}
      {suit === "spades" && "♠"}
    </button>
  );
};
