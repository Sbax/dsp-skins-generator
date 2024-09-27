import { ImagePicker } from "components/ImagePicker";
import { SuitPicker } from "components/SuitPicker";
import { useSkinString } from "hooks/useSkinString";
import { useMemo } from "react";
import { Texture } from "types/Texture";
import { generateDownload } from "utils/generateDownload";
import { sanitizeFilename } from "utils/sanitizeFilename";

function Home() {
  const {
    name,
    suit,
    skinString,
    texture,
    highContrastTexture,

    setName,
    setSuit,

    setTexture,
    setHighContrastTexture,
  } = useSkinString();

  const downloadEnabled = useMemo(() => {
    return skinString && name && texture;
  }, [skinString, name, texture]);

  const download = async () => {
    if (!downloadEnabled) return;

    const blob = await generateDownload({
      name,
      skin: skinString as string,
      texture: texture as Texture,
      highContrastTexture,
    });

    if (!blob) return;

    const url = window.URL.createObjectURL(new Blob([blob]));
    const link = document.createElement("a");
    link.href = url;

    const fileName = `${sanitizeFilename(name)}.zip`;
    link.setAttribute("download", fileName);

    document.body.appendChild(link);
    link.click();

    link.parentNode?.removeChild(link);
  };

  return (
    <main className="p-4">
      <h1 className="mb-4 font-bold text-3xl">
        <a className="link" href="https://github.com/Kekulism/DeckSkinsPlus">
          DeckSkinsPlus
        </a>{" "}
        Skins Generator
      </h1>

      <section className="gap-8 grid grid-cols-4">
        <section className="space-y-4">
          <section className="space-y-2">
            <h3 className="font-bold text-xl">Choose a suit</h3>
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

          <section className="space-y-2">
            <h3 className="font-bold text-xl">Texture</h3>
            <ImagePicker onImageLoad={setTexture} />
          </section>

          <section className="space-y-2">
            <div className="flex items-baseline space-x-2">
              <h3 className="font-bold text-xl">High contrast texture </h3>
              <span className="font-bold text-neutral-500 text-xs">
                (optional)
              </span>
            </div>
            <ImagePicker onImageLoad={setHighContrastTexture} />
          </section>
        </section>

        <section className="space-y-4">
          <button
            className={`w-full btn btn-accent ${downloadEnabled ? "" : "btn-disabled"}`}
            onClick={download}
          >
            Download .zip
          </button>

          <div className="bg-opacity-20 mockup-code text-neutral">
            {skinString?.split("\n").map((line, i) => (
              <code key={i}>
                <pre>{line}</pre>
              </code>
            ))}
          </div>
        </section>
      </section>
    </main>
  );
}

export default Home;
