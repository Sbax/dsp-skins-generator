import { useState, useEffect } from "react";
import { Suit } from "types/Suit";
import { Texture } from "types/Texture";

export const useSkinString = () => {
  const [name, setName] = useState<string>();
  const [texture, setTexture] = useState<string>();
  const [highContrastTexture, setHighContrastTexture] = useState<string>();
  const [suit, setSuit] = useState<Suit | "all">("all");
  const [skinString, setSkinString] = useState<string[]>([]);

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

  const onTexture = (image: Texture) => {
    setTexture(image.name);
  };

  const onHighContrastTexture = (image: Texture) => {
    setHighContrastTexture(image.name);
  };

  useEffect(() => {
    setSkinString(
      generateSkinString({ name, suit, texture, highContrastTexture }),
    );
  }, [name, suit, texture, highContrastTexture]);

  return {
    name,
    suit,
    texture,
    highContrastTexture,
    skinString,

    setName,
    setSuit,

    onTexture,
    onHighContrastTexture,
  };
};
