import { c, q, GET, POST, DELETE, uuidv4, PATCH } from './utils.js';
const url = "http://localhost:3000/pokemon";

const form = document.forms.pokemon;
const element = form.elements;
const containerCard = document.querySelector(".containerCard");

//Form Patch
const formPatch = document.forms.pokemonPatch;
const elementsFP = formPatch.elements;


const createCard = (url, id, data) => {

    const card = document.createElement("div");
	card.className = "pkm-card";
    card.classList.add(".pkm-card");
    
    const sectionIdEl = document.createElement("h4");
    sectionIdEl.className = "background";
    sectionIdEl.textContent = `${data.id}`;

    const sectionNameEl = document.createElement("h2");
    sectionNameEl.textContent = `${data.name}`;
        
    const sectionTypesEl = document.createElement("h5"); 
    sectionTypesEl.textContent = `${data.type}`;

//MODIFICHE CON BOTTONI

	const btn = document.createElement("button");
	btn.className = "btn-class";
	btn.textContent = "DELETE";

    const modifybtn = document.createElement("button");
    modifybtn.className = "btn-class-edit";
    modifybtn.textContent = "EDIT";

	btn.addEventListener("click", () => {
        DELETE(url, id)
            .then(() => location.reload())
    })

     modifybtn.addEventListener("click", () => {
       pokemonPatch.name.value = sectionNameEl.textContent
       pokemonPatch.type.value = sectionTypesEl.textContent
       pokemonPatch.pkmid.value = sectionIdEl.textContent
    })

//MODIFICHE AL CLICK DELLE CARD

	card.addEventListener('click', () => {
	   pokemonPatch.name.value = sectionNameEl.textContent
       pokemonPatch.type.value = sectionTypesEl.textContent
       pokemonPatch.pkmid.value = sectionIdEl.textContent
	})

    card.addEventListener('dblclick', () => {
        DELETE(url, id)
        .then(() => location.reload())
    })
    
    card.append(sectionIdEl, sectionNameEl, sectionTypesEl, btn, modifybtn);
    containerCard.append(card);
    }
   
    form.addEventListener("submit", (e) => {
	e.preventDefault();

	const data = {
		name: element.pkmName.value,
		type: element.pkmType.value
	}
 
	POST(url, data)
		.then(() => location.reload())
})



window.onload = GET(url).then(res => res.map(pkm => {
	try {
		createCard (url, pkm.id, pkm);
	} catch (error) {
		console.log(error);
	}
}))

