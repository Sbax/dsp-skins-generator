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
    <div className="flex flex-row justify-between mb-4 w-full">
      <section className="flex flex-row flex-1 justify-between">
        {suits.map((suit) => (
          <SuitButton
            key={suit}
            suit={suit}
            onClick={() => setSelected(suit)}
            initialState={!selected}
            active={selected === suit || selected === "all"}
          />
        ))}
      </section>

      <div className="divider divider-horizontal" />

      <button
        className="px-6 py-4 h-auto text-1xl btn"
        onClick={() => setSelected("all")}
      >
        All
      </button>
    </div>
  );
};
