import { FC, useState } from "react";
import { Suit, SuitSymbols, suits } from "types/Suit";
import { SuitNames } from "types/SuitNames";

interface NamePickerProps {
  enabled: boolean;
  suitNames?: SuitNames;
  setSuitNames: (suitNames: SuitNames) => unknown;
}

export const NamePicker: FC<NamePickerProps> = ({
  enabled,
  suitNames,
  setSuitNames,
}) => {
  const [separateName, setSeparateName] = useState(Boolean(suitNames));

  const updateSuitNames = ({ suit, name }: { suit: Suit; name: string }) =>
    setSuitNames({ ...suitNames, [suit]: name });

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
                value={suitNames && suitNames[suit] ? suitNames[suit] : ""}
                onChange={(event) =>
                  updateSuitNames({ suit, name: event.target.value })
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
