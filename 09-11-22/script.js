//DICHIARAZIONE VARIABILI
const bodyEl = document.querySelector("body");
const loadingEl = document.querySelector (".loading");



//CICLO FOR PER STAMPARE 150 CARD DI POKEMON IN ORDINE
const urlArray = [];
for (let index = 1; index < 151; index++) {
    urlArray.push(`https://pokeapi.co/api/v2/pokemon/${index}`)
}
    let request = urlArray.map((url) => {
       return fetch(url).then((res) => res.json())
    });

    Promise.all(request).then((res) => res.map((item) => createSection (item)));

//CREA SEZIONE
    
    const pokeEl = document.querySelector(".pokedex");

    const createSection = (item) => {
     const sectionEl = document.createElement("div");
     sectionEl.className = "section";
     sectionEl.classList.add(`bg-${item.types[0].type.name}`);

     const sectionIdEl = document.createElement("h6");
     sectionIdEl.textContent = `#${item.id}`;

     const sectionNameEl = document.createElement("h2");
     sectionNameEl.textContent = item.name;

     const sectionImgEl = document.createElement("img");
     sectionImgEl.setAttribute("src", item.sprites.other.dream_world.front_default);
    
     const sectionTypesEl = document.createElement("p"); 
     sectionTypesEl.textContent = `Type: ${item.types[0].type.name}`;

    sectionEl.append(sectionImgEl,sectionIdEl, sectionNameEl,  sectionTypesEl);
    pokeEl.appendChild(sectionEl);

 //ID DINAMICO
    const getId = (n) => {
        if (!n) return null;
    
        let id = n;
        if (id < 10) {
            id = '00' + id
        } else if (id < 100) {
            id = '0' + id
        }
        return id;
    }
}

/*ID DINAMICO FUORI FUNZIONE
function createId(id) {
    if (!id) return null;
    if (id <10) {
        return `00${id}`;
    }
    else if (id <100) {
        return `0${id}`;
    }
    return id;
} */


//FUNZIONE LOADING
let res = urlArray.map((url) => {
    loadingEl.classList.add("active");
    return fetch(url).then((res) => res.json());
  })

  Promise.all(request)
  .then((res) =>
    res.map((r) => createSection(r)))
    .finally(() => loadingEl.classList.remove("active")); 
      