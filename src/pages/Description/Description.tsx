function Description() {
  return (
    <section className="space-y-4 max-w-screen-sm prose">
      <a className="btn" href="/">
        <svg
          className="w-6 md:w-8 h-6 md:h-8 fill-current"
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
        >
          <path d="M15.41,16.58L10.83,12L15.41,7.41L14,6L8,12L14,18L15.41,16.58Z"></path>
        </svg>
        <div className="flex flex-col items-start">
          <span className="md:block hidden font-normal text-base-content/50 text-xs">
            Back
          </span>
          <span>Skin Generator</span>
        </div>
      </a>

      <h1>What is this?</h1>
      <p>
        This is a skin generator for{" "}
        <a className="link" href="https://github.com/Kekulism/DeckSkinsPlus">
          DeckSkinsPlus
        </a>
        , a mod for <a href="https://www.playbalatro.com/">Balatro</a>.
      </p>

      <p>
        To use DeckSkinsPlus, install{" "}
        <a
          href="https://github.com/ethangreen-dev/lovely-injector"
          className="link"
        >
          Lovely
        </a>{" "}
        and{" "}
        <a href="https://github.com/Steamopollys/Steamodded" className="link">
          Steamodded
        </a>
        . You can find a guide on how to do so{" "}
        <a
          className="link"
          href="https://discord.com/channels/1116389027176787968/1217867725532041369/1217867725532041369"
        >
          here
        </a>{" "}
        after joining the{" "}
        <a className="link" href="https://discord.com/invite/5mH3dNhjx2">
          Balatro official Discord
        </a>
        .
      </p>

      <h1>How does this work?</h1>
      <p>
        <strong>Pick a name for your suit</strong>, this is required as it will
        be used for the <code>.zip</code> name, <code>.lua</code> name, and skin
        name.
        <br /> The name should be unique.
      </p>

      <p>
        <strong>Choose a suit</strong> to apply the skin to, or select "all
        suits," which is the default option.
      </p>

      <p>
        <strong>Use a separate name for each suit</strong> if you selected all
        suits. You can specify a different name for each suit by checking the
        box.
        <br /> Skipping names for any suit will prevent the skin from loading
        for that particular suit.
      </p>

      <p>
        <strong>Choose cards</strong> to apply the skin to. The default is{" "}
        <strong>All cards</strong>, but you can also pick <strong>Faces</strong>{" "}
        only or <strong>Numbers</strong> only.
        <br /> Clicking <strong>Refine Selection</strong> will let you select
        exactly which values you want to customize.
      </p>

      <p>
        <strong>Texture</strong> refers to the texture for your skin. This app
        will scale it down to generate the 1x version, so provide the 2x version
        here.
        <br /> <strong>High Contrast Texture</strong> is optional but works the
        same way.
      </p>

      <p>
        Once you're done, use the <strong>Download .zip</strong> button to get
        your skin. Unpack your zip into the <code>Mods/DeckSkinsPlus</code>
        directory, and it should appear in the game.
      </p>

      <p>
        If you run into issues, check out either{" "}
        <a href="https://github.com/Sbax/dsp-skins-generator" className="link">
          this generator GitHub
        </a>{" "}
        or the{" "}
        <a href="https://github.com/Kekulism/DeckSkinsPlus" className="link">
          DeckSkinsPlus
        </a>{" "}
        repository.
      </p>

      <p>
        Visit the{" "}
        <a
          href="https://discord.com/channels/1116389027176787968/1209506514763522108"
          className="link"
        >
          Modding
        </a>{" "}
        Discord channel on Balatro's official server to find more skins to pick
        from.
      </p>
    </section>
  );
}

export default Description;
