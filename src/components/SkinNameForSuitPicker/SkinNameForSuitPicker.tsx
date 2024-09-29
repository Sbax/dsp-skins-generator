import { FC, useState } from "react";
import { Suit, SuitSymbols, suits } from "types/Suit";
import { SkinNameForSuit } from "types/SkinNameForSuit";

interface SkinNameForSuitPickerProps {
  enabled: boolean;
  selected?: SkinNameForSuit;
  setSelected: (skinNameForSuit: SkinNameForSuit) => unknown;
}

export const SkinNameForSuitPicker: FC<SkinNameForSuitPickerProps> = ({
  enabled,
  selected,
  setSelected,
}) => {
  const [separateName, setSeparateName] = useState(Boolean(selected));

  const updateSelected = ({ suit, name }: { suit: Suit; name: string }) =>
    setSelected({ ...selected, [suit]: name });

  return (
    <section className="flex flex-col space-y-4 w-full">
      <label
        htmlFor="split-name"
        className="flex space-x-2 h-full cursor-pointer"
      >
        <input
          id="split-name"
          type="checkbox"
          className="checkbox"
          disabled={!enabled}
          checked={separateName}
          onChange={(event) => setSeparateName(event.target.checked)}
        />
        <span className={!enabled ? "text-neutral-400" : ""}>
          Use a separate name for each suit
        </span>
      </label>

      {separateName && (
        <section className="space-y-4">
          {suits.map((suit) => (
            <label
              className={[
                "flex items-center gap-2 input-bordered input",
                `border-${suit}`,
              ].join(" ")}
              key={suit}
            >
              <span className={`text-${suit}`}>{SuitSymbols[suit]}</span>
              <input
                key={suit}
                type="text"
                className="grow"
                placeholder={`Name for ${suit} suit`}
                value={selected && selected[suit] ? selected[suit] : ""}
                onChange={(event) =>
                  updateSelected({ suit, name: event.target.value })
                }
                disabled={!enabled}
              />
            </label>
          ))}
        </section>
      )}
    </section>
  );
};
