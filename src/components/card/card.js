import { createElement } from "../../utils/createElement";

export function createCard({ imgSrc, name, species, gender, status, origin }) {
  return createElement("div", {
    className: "card",
    children: [
      createElement("img", {
        className: "card__portrait",
        src: imgSrc,
      }),
      createElement("div", {
        className: "card-i",
        children: [
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
  });
}
