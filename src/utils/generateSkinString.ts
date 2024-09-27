export const generateSkinString = ({
  name,
  suit,
  texture,
  highContrastTexture,
}: {
  name?: string;
  suit?: string;
  texture?: string;
  highContrastTexture?: string;
}): string[] => {
  const props = [
    name ? `name = "${name}",` : "",
    `suit = "${suit === "all" ? "*" : suit}",`,
    texture ? `texture = "${texture}",` : "",
    highContrastTexture
      ? `highContrastTexture = "${highContrastTexture}",`
      : "",
  ].filter(Boolean);

  const skinString = [
    "local skin = {",
    ...props.map((prop) => `    ${prop}`),
    "}",
    "\n",
    "return skin",
  ].filter(Boolean);

  return skinString;
};
