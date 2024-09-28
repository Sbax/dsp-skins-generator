import { useState, useEffect } from "react";
import { Suit, suits } from "types/Suit";
import { SuitNames } from "types/SuitNames";
import { Texture } from "types/Texture";

export const useSkinString = () => {
  const [name, setName] = useState<string>("");

  const [texture, setTexture] = useState<Texture>();
  const [highContrastTexture, setHighContrastTexture] = useState<Texture>();

  const [suit, setSuit] = useState<Suit | "all">("all");

  const [skinString, setSkinString] = useState<string>();

  const [suitNames, setSuitNames] = useState<SuitNames>();

  const getName = ({
    name,
    suitNames,
  }: {
    name?: string;
    suitNames?: SuitNames;
  }) => {
    if (!name) return [];
    if (!suitNames) return [name ? `name = "${name}",` : ""];

    const suitNamesStrings = suits
      .map((suit) => {
        const suitName = suitNames[suit];
        if (!suitName) return;

        return `${suit} = '${suitName}',`;
      })
      .filter(Boolean);

    return [
      "name = {",
      ...suitNamesStrings.map((string) => `    ${string}`),
      "},",
    ];
  };

  const generateSkinString = ({
    name,
    suit,
    texture,
    highContrastTexture,
    suitNames,
  }: {
    name?: string;
    suit?: string;
    texture?: string;
    highContrastTexture?: string;
    suitNames?: SuitNames;
  }): string => {
    const props = [
      ...getName({ name, suitNames }),
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
        suitNames,
      }),
    );
  }, [name, suit, texture, highContrastTexture, suitNames]);

  return {
    name,
    setName,
    suit,
    setSuit,
    texture,
    setTexture,
    highContrastTexture,
    setHighContrastTexture,
    suitNames,
    setSuitNames,

    skinString,
  };
};
