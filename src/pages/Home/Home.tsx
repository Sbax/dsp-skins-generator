import { ImagePicker } from "components/ImagePicker";
import { SuitPicker } from "components/SuitPicker";
import { useSkinString } from "hooks/useSkinString";

function Home() {
  const {
    name,
    suit,
    skinString,

    setName,
    setSuit,

    onTexture,
    onHighContrastTexture,
  } = useSkinString();

  return (
    <section className="gap-4 grid grid-cols-2 p-4">
      <section className="space-y-4">
        <section className="space-y-2">
          <h3 className="font-bold text-xl">
            Choose to which suits it applies
          </h3>
          <SuitPicker selectedSuit={suit} setSuit={setSuit} />
        </section>

        <section className="space-y-2">
          <h3 className="font-bold text-xl">Choose a name for your skin</h3>
          <div className="form-control">
            <input
              type="text"
              placeholder="Enter name"
              className="input-bordered input"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </div>
        </section>

        <section className="gap-2 grid grid-cols-2">
          <section className="space-y-2">
            <h3 className="font-bold text-xl">Texture</h3>
            <ImagePicker onImageLoad={onTexture} />
          </section>

          <section className="space-y-2">
            <div className="flex items-baseline space-x-2">
              <h3 className="font-bold text-xl">High contrast texture </h3>
              <span className="font-bold text-neutral-500 text-xs">
                (optional)
              </span>
            </div>
            <ImagePicker onImageLoad={onHighContrastTexture} />
          </section>
        </section>
      </section>

      <section>
        <div className="mockup-code">
          {skinString.map((line, i) => (
            <code key={i}>
              <pre>{line}</pre>
            </code>
          ))}
        </div>
      </section>
    </section>
  );
}

export default Home;
