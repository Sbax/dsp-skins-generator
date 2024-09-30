import { CardsPicker } from "components/CardsPicker";
import { SkinNameForSuitPicker } from "components/SkinNameForSuitPicker";
import { SuitPicker } from "components/SuitPicker";
import { TexturePicker } from "components/TexturePicker";
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

    skinNameForSuit,
    setSkinNameForSuit,

    cards,
    setCards,
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
    <>
      <h1 className="mb-4 font-bold text-3xl">
        <a className="link" href="https://github.com/Kekulism/DeckSkinsPlus">
          DeckSkinsPlus
        </a>{" "}
        Skins Generator
      </h1>

      <section className="gap-8 grid grid-cols-1 md:grid-cols-2 max-w-screen-lg">
        <section className="space-y-4">
          <section className="space-y-2">
            <h3 className="font-bold text-xl">Choose a name for your skin</h3>

            <section className="flex-1 form-control w-full">
              <input
                type="text"
                placeholder="Enter name"
                className="input-bordered input"
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
            </section>
          </section>

          <section className="space-y-4">
            <section className="space-y-2">
              <h3 className="font-bold text-xl">Choose a suit</h3>
              <SuitPicker selected={suit} setSelected={setSuit} />
            </section>

            <SkinNameForSuitPicker
              enabled={suit === "all" && Boolean(name)}
              selected={skinNameForSuit}
              setSelected={setSkinNameForSuit}
            />
          </section>

          <section className="space-y-2">
            <h3 className="font-bold text-xl">Choose cards</h3>
            <CardsPicker selected={cards} setSelected={setCards} />
          </section>

          <section className="space-y-2">
            <h3 className="font-bold text-xl">Texture</h3>
            <TexturePicker onLoad={setTexture} />
          </section>

          <section className="space-y-2">
            <section className="flex items-baseline space-x-2">
              <h3 className="font-bold text-xl">High contrast texture </h3>
              <span className="font-bold text-neutral-500 text-xs">
                (optional)
              </span>
            </section>
            <TexturePicker onLoad={setHighContrastTexture} />
          </section>
        </section>

        <section className="space-y-4">
          <button
            className={`w-full btn btn-accent ${downloadEnabled ? "" : "btn-disabled"}`}
            onClick={download}
          >
            Download .zip
          </button>

          <section className="bg-opacity-20 mockup-code text-neutral">
            {skinString?.split("\n").map((line, i) => (
              <code key={i}>
                <pre>{line}</pre>
              </code>
            ))}
          </section>

          <section className="prose">
            <h1>What is this?</h1>
            <p>
              This is a skin generator for{" "}
              <a
                className="link"
                href="https://github.com/Kekulism/DeckSkinsPlus"
              >
                DeckSkinsPlus
              </a>
              , a mod for <a href="https://www.playbalatro.com/">Balatro</a>.
              Install{" "}
              <a
                className="link"
                href="https://github.com/ethangreen-dev/lovely-injector"
              >
                Lovely
              </a>{" "}
              and{" "}
              <a
                className="link"
                href="https://github.com/Steamopollys/Steamodded"
              >
                Steamodded
              </a>
              . Guide available{" "}
              <a href="https://discord.com/invite/5mH3dNhjx2">here</a>.
            </p>
            <h1>How does this work?</h1>
            <p>
              Pick a suit name, choose suits and cards to skin, add textures,
              then download and extract the generated <code>.zip</code> in your{" "}
              <code>DeckSkinsPlus</code> folder.
            </p>

            <section className="space-x-2">
              <span>Still confused?</span>
              <a className="btn btn-primary" href="/about">
                Read more
              </a>
            </section>
          </section>
        </section>
      </section>
    </>
  );
}

export default Home;
