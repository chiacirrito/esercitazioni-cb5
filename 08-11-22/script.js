const bodyEl = document.querySelector("body");
const pokeEl = document.querySelector(".pokedex");

const createSection = (item) => {
    const sectionEl = document.createElement("div");
    sectionEl.className = "section";

    const sectionIdEl = document.createElement("h6");
    sectionIdEl.textContent = `#${item.id}`;

    const sectionNameEl = document.createElement("h6");
    sectionNameEl.textContent = item.name;

    const sectionImgEl = document.createElement("img");
    sectionImgEl.setAttribute("src", item.sprites.other.dream_world.front_default);
    
    const sectionTypesEl = document.createElement("h6"); 
    sectionTypesEl.textContent = `Type: ${item.types[0].type.name}`;

    sectionEl.append(sectionImgEl,sectionIdEl, sectionNameEl,  sectionTypesEl);
    pokeEl.appendChild(sectionEl);


        switch (sectionTypesEl.textContent) {
          case item.types[0].type.name === "grass":
            return sectionEl.classList.add(".grass");
          case item.types[0].type.name === "fire":
            return sectionEl.classList.add(".fire");
          case item.types[0].type.name === "water":
            return sectionEl.classList.add(".water");
          case item.types[0].type.name === "normal":
            return sectionEl.classList.add(".normal");
          case item.types[0].type.name === "bug":
            return sectionEl.classList.add(".bug");
          case item.types[0].type.name === "poison":
            return sectionEl.classList.add(".poison");
          case item.types[0].type.name === "electric":
            return sectionEl.classList.add(".electic");
          case item.types[0].type.name === "ground":
            return sectionEl.classList.add(".ground");
          case item.types[0].type.name === "rock":
            return sectionEl.classList.add(".rock");
          case item.types[0].type.name === "fairy":
            return sectionEl.classList.add(".fairy");
          case item.types[0].type.name === "psychic":
            return sectionEl.classList.add(".psychic");
          case item.types[0].type.name ==="flying":
            return sectionEl.classList.add(".flying");
          case item.types[0].type.name ==="fighting":
            return sectionEl.classList.add(".fighting");
          case item.types[0].type.name === "ghost":
            return sectionEl.classList.add(".ghost");
          case item.types[0].type.name === "ice":
            return nsectionEl.classList.add(".ice");
          case item.types[0].type.name === "dragon":
            return sectionEl.classList.add(".dragon");
        }
      };

fetch("https://pokeapi.co/api/v2/pokemon/?limit=150")
.then((res) => res.json())
.then((poke) => {
    poke.results.map((item) => fetch(item.url)
    .then((res) => res.json()
    .then((pokemon) => createSection(pokemon))))})
.catch((e) => console.log("Hai sbagliato!"));


