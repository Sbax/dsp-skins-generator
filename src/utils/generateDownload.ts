import JSZip from "jszip";
import { Texture } from "types/Texture";
import { sanitizeFilename } from "utils/sanitizeFilename";

export const generateDownload = async ({
  name,
  skin,
  texture,
  highContrastTexture,
}: {
  name: string;
  skin: string;
  texture: Texture;
  highContrastTexture?: Texture;
}) => {
  const sanitizedName = sanitizeFilename(name);

  const zip = new JSZip();
  const skins = zip.folder("skins");
  const assets = zip.folder("assets");

  if (!skins || !assets) {
    console.error("Couldn't create zip");
    return;
  }

  const base = assets.folder("2x");
  const scaled = assets.folder("1x");

  if (!base || !scaled) {
    console.error("Couldn't create zip");
    return;
  }

  skins.file(`${sanitizedName}.lua`, skin);

  base.file(texture.name, await texture.original.arrayBuffer(), {
    binary: true,
  });

  scaled.file(texture.name, await texture.scaled.arrayBuffer(), {
    binary: true,
  });

  if (highContrastTexture) {
    base.file(
      highContrastTexture.name,
      await highContrastTexture.original.arrayBuffer(),
      {
        binary: true,
      },
    );

    scaled.file(
      highContrastTexture.name,
      await highContrastTexture.scaled.arrayBuffer(),
      {
        binary: true,
      },
    );
  }

  return zip.generateAsync({ type: "blob" });
};
