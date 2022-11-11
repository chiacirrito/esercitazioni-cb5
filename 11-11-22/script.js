//DICHIARAZIONE VARIABILI
const bodyEl = document.querySelector("body");
const pokeEl = document.querySelector(".pokedex");
const sectionEl = document.querySelector(".card");
const id = document.createElement("h6");
const sectionNameEl = document.createElement("h2");
const sectionImgEl = document.createElement("img");
const sectionTypesEl = document.createElement("p"); 

//FUNZIONE COMPARE PRIMA CARD
let i = 1;
let result = `https://pokeapi.co/api/v2/pokemon/${i}`;
fetch(result)
.then((res) => res.json())
.then((res) => createSection(res));


//CREA SEZIONE

const createSection = (item) => {
 sectionEl.className = "section";
 sectionEl.classList.add(`bg-${item.types[0].type.name}`);
 id.textContent = `#${item.id}`;
 sectionNameEl.textContent = item.name;
 sectionImgEl.setAttribute("src", item.sprites.other.dream_world.front_default);
 sectionTypesEl.textContent = `Type: ${item.types[0].type.name}`;

sectionEl.append(sectionImgEl, id, sectionNameEl,  sectionTypesEl);
pokeEl.appendChild(sectionEl);
};

//BOTTONI

const buttonNext = document.querySelector(".next");
const buttonPrev = document.querySelector(".prev");

buttonNext.addEventListener("click", () => {
    i++
    let result = `https://pokeapi.co/api/v2/pokemon/${i}`;
    fetch(result)
    .then((res) => res.json())
    .then((res) => createSection(res));
    if (i >= 150) buttonNext.disabled = true;
    if (i === 1) buttonPrev.disabled = true;
    else buttonPrev.disabled = false;
})

buttonPrev.addEventListener("click", () => {
    if(i <= 2)
        buttonPrev.disabled = true;
        buttonNext.disabled = false;
    i--
    let result = `https://pokeapi.co/api/v2/pokemon/${i}`;
    fetch(result)
    .then((res) => res.json())
    .then((res) => createSection(res));
});

window.onLoad = buttonPrev.disabled = true;







