import "./card.css";
import { createCard } from "./card";
import { createElement } from "../../utils/createElement";
import { Character, getCharacter, getCharacters } from "../../utils/api";

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

export const RandomCharacter = () => {
  const randomButton = createElement("button", {
    innerText: "Load random character",
    onclick: async () => {
      function getRandomNumber(min, max) {
        min = Math.ceil(min);
        max = Math.floor(max);
        return Math.floor(Math.random() * (max - min) + min);
      }
      const randId = getRandomNumber(1, 670);
      console.log(randId);

      const randChar = await getCharacter(randId);
      console.log(randChar);
      const randCard = createCard(randChar);
      console.log(randCard);
      if (container.childNodes.length > 1) {
        container.removeChild(container.lastChild);
      }
      container.append(randCard);
    },
  });
  const container = createElement("div", {
    //     className: "container",
    childs: [randomButton],
  });
  return container;
};

// Verify each step (alert, console.log)
// 1) generate random character id
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/random#getting_a_random_number_between_two_values
// 2) getCharacter from API
// 3) create card
// 4) append card
// 5) make sure to only display one character
// 6) feel awesome 🐱‍👤

//

// const randommin = 1;
// const randommax = 671;

// console.log(~~(Math.random()* randommax) + randommin);
