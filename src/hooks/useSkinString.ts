import { useState, useEffect } from "react";
import { Suit } from "types/Suit";
import { Texture } from "types/Texture";

export const useSkinString = () => {
  const [name, setName] = useState<string>("");

  const [texture, setTexture] = useState<Texture>();
  const [highContrastTexture, setHighContrastTexture] = useState<Texture>();

  const [suit, setSuit] = useState<Suit | "all">("all");

  const [skinString, setSkinString] = useState<string>();

  const generateSkinString = ({
    name,
    suit,
    texture,
    highContrastTexture,
  }: {
    name?: string;
    suit?: string;
    texture?: string;
    highContrastTexture?: string;
  }): string => {
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

    return skinString.join("\n");
  };

  useEffect(() => {
    setSkinString(
      generateSkinString({
        name,
        suit,
        texture: texture?.name,
        highContrastTexture: highContrastTexture?.name,
      }),
    );
  }, [name, suit, texture, highContrastTexture]);

  return {
    name,
    setName,
    suit,
    setSuit,
    texture,
    setTexture,
    highContrastTexture,
    setHighContrastTexture,

    skinString,
  };
};
