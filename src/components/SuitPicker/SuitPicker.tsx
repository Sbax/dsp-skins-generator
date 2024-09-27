import { SuitButton } from "components/SuitButton";
import { FC, useEffect, useState } from "react";
import { Suit, suits } from "types/Suit";

type SuitsOptions = Suit | "all";

export const SuitPicker: FC<{
  selectedSuit?: SuitsOptions;
  setSuit: (suit: SuitsOptions) => void;
}> = ({ selectedSuit, setSuit }) => {
  const [selected, setSelected] = useState<SuitsOptions | undefined>(
    selectedSuit,
  );

  useEffect(() => {
    if (selected) {
      setSuit(selected);
    }
  }, [selected]);

  return (
    <div className="flex flex-row space-x-4 mb-4">
      {suits.map((suit) => (
        <SuitButton
          key={suit}
          suit={suit}
          onClick={() => setSelected(suit)}
          initialState={!selected}
          active={selected === suit || selected === "all"}
        />
      ))}

      <div className="divider divider-horizontal" />

      <button
        className="py-4 h-auto text-1xl btn"
        onClick={() => setSelected("all")}
      >
        All
      </button>
    </div>
  );
};
