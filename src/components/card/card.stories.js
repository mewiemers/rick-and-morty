import "./card.css";
import { createCard } from "../../components/card/card";

export default {
  title: "Components/Card",
  parameters: { layout: "centered" },
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
