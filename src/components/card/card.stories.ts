import "./card.css";
import { createCard } from "./card";
import { createElement } from "../../utils/createElement";
import { getCharacter, getCharacters } from "../../utils/api";

export default {
  title: "Components/Card",
  parameters: { layout: "centered" },
};
export const Multiple = () => {
  const characters = [
    {
      imgSrc: "https://rickandmortyapi.com/api/character/avatar/3.jpeg",
      name: "Summer Smith",
      status: "Alive",
      species: "Human",
      origin: { name: "Earth (Replacement Dimension)" },
      gender: "Female",
    },
    {
      imgSrc: "https://rickandmortyapi.com/api/character/avatar/4.jpeg",
      name: "Beth Smith",
      status: "Alive",
      species: "Human",
      origin: { name: "Earth (Replacement Dimension)" },
      gender: "Female",
    },
  ];
  const container = createElement("div", {
    className: "container",
    childs: characters.map((character) => createCard(character)),
  });

  return container;
};
export const Abadango_Cluster_Princess = () =>
  createCard({
    imgSrc: "https://rickandmortyapi.com/api/character/avatar/6.jpeg",
    name: "Abadango Cluster Princess",
    species: "Alien",
    gender: "Female",
    origin: { name: "Abadango" },
    status: "Alive",
  });

export const Abradolf_Lincler = () =>
  createCard({
    imgSrc: "https://rickandmortyapi.com/api/character/avatar/7.jpeg",
    name: "Abradolf Lincler",
    species: "Human",
    gender: "Male",
    origin: { name: "Earth (Replacement Dimension)" },
    status: "unkown",
  });
export const CharacterFromAPI = (args, { loaded: { character } }) => {
  return createCard(character);
};

CharacterFromAPI.loaders = [
  async () => ({
    character: await getCharacter(66),
  }),
];
export const CharactersFromAPI = (args, { loaded: { characters } }) => {
  const container = createElement("div", {
    className: "container",
    childs: characters.map((character) => createCard(character)),
  });
  return container;
};
CharactersFromAPI.loaders = [
  async () => ({
    characters: await getCharacters(),
  }),
];
