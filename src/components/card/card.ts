import { createElement } from "../../utils/createElement";

export function createCard({ imgSrc, name, species, gender, status, origin }) {
  return createElement("div", {
    className: "card",
    childs:[
    createElement("div", {
      className: "card__inner",
    }),
    createElement("div", {
      className: "card__front",
      childs: [
    }),
      createElement("img", {
        className: "card__portrait",
        src: imgSrc,
        alt: "",
      }),
      createElement("div", {
        className: "card-i",
        childs: [
          createElement("h2", {
            className: "card__name",
            innerText: name,
          }),
          createElement("p", {
            className: "card__species",
            innerText: species,
          }),
          createElement("p", {
            className: "card__gender",
            innerText: gender,
          }),
          createElement("p", {
            className: "card_origin",
            innerText: origin.name,
          }),
          createElement("p", {
            innerText: `${status === "Alive" ? "🤗" : "⚱"} - ${status}`,
            className: "card__status",
          }),
        ],
      }),
    ],
    
  })
  createElement("p")
  ]
}
