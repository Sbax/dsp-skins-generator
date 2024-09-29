import { Card } from "components/Card";
import { SuitButton } from "components/SuitButton";
import { FC } from "react";
import { Suit, suits } from "types/Suit";

type SuitsOptions = Suit | "all";

export const SuitPicker: FC<{
  selected?: SuitsOptions;
  setSelected: (suit: SuitsOptions) => void;
}> = ({ selected, setSelected }) => {
  return (
    <div className="flex flex-row justify-between mb-4 w-full">
      <section className="space-x-4">
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

      <Card className="flex-1" onClick={() => setSelected("all")}>
        All suits
      </Card>
    </div>
  );
};
