export type APICharacter = {
  id: number;
  name: string;
  status: "Alive" | "Dead" | "unknown";
  species: string;
  type: string;
  gender: "Female" | "Male" | "Genderless" | "unknown";
  origin: {
    name: string;
    url: string;
  };
  location: {
    name: string;
    url: string;
  };
  image: string;
  episode: string[];
  url: string;
  created: string;
};

export type APICharacters = {
  info: {
    count: number;
    pages: number;
    next: string;
    prev: string | null;
  };
  results: APICharacter[];
};
export type Character = {
  imgSrc: string;
  name: string;
  status: "Alive" | "Dead" | "unknown";
  gender: "Female" | "Male" | "Genderless" | "unknown";
  species: string;
  origin: {
    name: string;
  };
  // results: APICharacter[];
};

function convertToCharacter(apiCharacter: APICharacter): Character {
  return {
    imgSrc: apiCharacter.image,
    name: apiCharacter.name,
    status: apiCharacter.status,
    origin: { name: apiCharacter.origin.name },
    species: apiCharacter.species,
    gender: apiCharacter.gender,
  };
}

export async function getCharacter(id: number) {
  const response = await fetch(
    `https://rickandmortyapi.com/api/character/${id}`
  );
  if (!response.ok) {
    const result = await response.json();
    return {
      imgSrc: "",
      name: result.error,
      status: "Dead",
      species: "Human",
      origin: {
        name: "Internet",
      },
    } as Character;
  }
  const result = (await response.json()) as APICharacter;
  const character = convertToCharacter(result);
  return character;
}
export async function getCharacters() {
  const response = await fetch(`https://rickandmortyapi.com/api/character/`);
  const result = (await response.json()) as APICharacters;
  const characters = result.results.map((apiCharacter) =>
    convertToCharacter(apiCharacter)
  );
  return characters;
}
