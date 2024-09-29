import { useEffect, useState } from "react";
import { CardValue } from "types/CardValue";
import { SkinNameForSuit } from "types/SkinNameForSuit";
import { Suit, suits } from "types/Suit";
import { Texture } from "types/Texture";

export const useSkinString = () => {
  const [name, setName] = useState<string>("");

  const [texture, setTexture] = useState<Texture>();
  const [highContrastTexture, setHighContrastTexture] = useState<Texture>();

  const [suit, setSuit] = useState<Suit | "all">("all");

  const [skinString, setSkinString] = useState<string>();

  const [skinNameForSuit, setSkinNameForSuit] = useState<SkinNameForSuit>();

  const [cards, setCards] = useState<CardValue[] | null | undefined>();

  const getName = ({
    name,
    skinNameForSuit,
  }: {
    name?: string;
    skinNameForSuit?: SkinNameForSuit;
  }) => {
    if (!name) return [];
    if (!skinNameForSuit) return [name ? `name = "${name}",` : ""];

    const skinNameForSuitStrings = suits
      .map((suit) => {
        const suitName = skinNameForSuit[suit];
        if (!suitName) return;

        return `${suit} = '${suitName}',`;
      })
      .filter(Boolean);

    return [
      "name = {",
      ...skinNameForSuitStrings.map((string) => `    ${string}`),
      "},",
    ];
  };

  const generateSkinString = ({
    name,
    suit,
    texture,
    highContrastTexture,
    cards,
    skinNameForSuit,
  }: {
    name?: string;
    suit?: string;
    texture?: string;
    highContrastTexture?: string;
    cards: CardValue[] | null | undefined;
    skinNameForSuit?: SkinNameForSuit;
  }): string => {
    const props = [
      ...getName({ name, skinNameForSuit }),
      `suit = "${suit === "all" ? "*" : suit}",`,
      texture ? `texture = "${texture}",` : "",
      cards ? `cards = {${cards.map((card) => `"${card}"`).join(", ")}},` : "",
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
        cards,
        skinNameForSuit,
      }),
    );
  }, [name, suit, texture, highContrastTexture, cards, skinNameForSuit]);

  return {
    name,
    setName,
    suit,
    setSuit,
    texture,
    setTexture,
    highContrastTexture,
    setHighContrastTexture,
    skinNameForSuit,
    setSkinNameForSuit,
    cards,
    setCards,

    skinString,
  };
};
