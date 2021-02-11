import { createElement } from "../../utils/createElement";
export function createCard({ imgSrc, name, gender, status, species, origin }) {
  return createElement("article", {
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
        className: "card__inner",
        childs: [
          createElement("div", {
            className: "card__front",
            childs: [
              createElement("img", {
                className: "card-image",
                src: imgSrc,
                alt: "",
              }),
              createElement("div", {
                className: "card__i",
                childs: [
                  createElement("h2", {
                    className: "card__name",
                    innerText: name,
                  }),
                  createElement("p", {
                    className: "card__status",
                    innerText: `${status === "Alive" ? "😃" : "⚱"} - ${status}`,
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
                    className: "card__origin",
                    innerText: origin.name,
                  }),
                ],
              }),
            ],
          }),
          createElement("div", {
            className: "card__back",
            childs: [
              createElement("h3", {
                className: "card_back--inner",
                innerText: "Location",
              }),
            ],
          }),
        ],
      }),
    ],
  });
}
