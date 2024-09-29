import { Card } from "components/Card/Card";
import { FC, useState } from "react";
import { CardValue, cardValues, faces, numbers } from "types/CardValue";

interface CardsPickerProps {
  selected: CardValue[] | undefined | null;
  setSelected: (selected: CardValue[] | undefined | null) => unknown;
}

export const CardsPicker: FC<CardsPickerProps> = ({
  selected,
  setSelected,
}) => {
  const [refine, setRefine] = useState<boolean>(false);

  const isSelected = (item: CardValue) => selected?.includes(item);

  const handleClick = (item: CardValue) => {
    if (isSelected(item)) {
      const filtered = (selected || []).filter(
        (selection) => selection !== item,
      );

      if (filtered?.length === 0) {
        setSelected(null);
        return;
      }

      setSelected(filtered);
      return;
    }

    setSelected([...(selected || []), item]);
  };

  return (
    <section
      className={[
        "collapse rounded-none space-y-2",
        refine && "collapse-open",
      ].join(" ")}
    >
      <section className="flex items-center p-0 collapse-title">
        <div className="space-x-4">
          <button className="btn btn-primary" onClick={() => setSelected(null)}>
            All cards
          </button>

          <button
            className="btn btn-secondary"
            onClick={() => setSelected([...faces])}
          >
            Faces
          </button>
          <button
            className="btn btn-secondary"
            onClick={() => setSelected([...numbers])}
          >
            Numbers
          </button>
        </div>

        <div className="divider divider-horizontal" />

        <button className="flex-1 btn" onClick={() => setRefine(!refine)}>
          Refine Selection
        </button>
      </section>

      <section className="gap-2 grid grid-cols-10 p-0 collapse-content">
        {cardValues.map((cardValue) => (
          <Card
            key={`card-${cardValue}`}
            className={[
              isSelected(cardValue) || !selected ? "opacity-100" : "opacity-50",
            ].join(" ")}
            onClick={() => handleClick(cardValue)}
          >
            {cardValue}
          </Card>
        ))}
      </section>
    </section>
  );
};
