import { c, q, GET, POST, DELETE, PATCH } from './utils.js';
const url = "http://localhost:3000/pokemon";

//CREAZIONE CARD

const containerCard = q(".containerCard");

const createCard = (data) => {

    const {id, name, type} = data;

    const card = c("div");
	card.className = "pkm-card";
    card.classList.add(".pkm-card");
    card.classList.add(`bg-${data.type}`);
    
    const sectionIdEl = c("h4");
    sectionIdEl.className = "background";
    sectionIdEl.textContent = `${data.id}`;

    const sectionNameEl = c("h2");
    sectionNameEl.textContent = `${data.name}`;
        
    const sectionTypesEl = c("h5"); 
    sectionTypesEl.textContent = `${data.type}`;

//MODIFICHE CON BOTTONI

	const btn = c("button");
	btn.className = "btn-class";
	btn.textContent = "DELETE";

    const modifybtn = c("button");
    modifybtn.className = "btn-class-edit";
    modifybtn.textContent = "EDIT";

	btn.addEventListener("click", () => {
        DELETE(url, id)
            .then(() => location.reload())
    })

     modifybtn.addEventListener("click", () => {
       elementsFP.name.value = sectionNameEl.textContent
       elementsFP.type.value = sectionTypesEl.textContent
       elementsFP.pkmid.value = sectionIdEl.textContent
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
   
//FORM SUBMIT

    const form = document.forms.pokemon;
    const element = form.elements;

    form.addEventListener("submit", (e) => {
	e.preventDefault();

	const data = {
        id: element.idPkm.value,
		name: element.pkmName.value,
		type: element.pkmType.value
	};

    POST(url, data)
    .then((response) => response.json())
    .then((res) => {
      console.log("Success:", res);
    })
    .catch((error) => {
      console.error("Error:", error);
    }); 
});

//FORM EDIT
    const formPatch = document.forms.pokemonPatch;
    const elementsFP = formPatch.elements;

    formPatch.addEventListener("submit", (e) => {
	e.preventDefault();

    const id = elementsFP.pkmid.value;

	const data = {
		name: elementsFP.name.value,
		type: elementsFP.type.value
	};

    PATCH(url, id, data)
    .then(() => location.reload())
    .catch((e) => console.log(e));
});


//CONTAINER CARD
window.onload = GET(url).then(res => res.map(data => {
	try {
		createCard (data);
	} catch (error) {
		console.log(error);
	}
}))

//SEARCH BAR

const inputEl = q(".search-input");
let productsList = [];


GET(url).then((data) => {
    data.map((product) => createCard(product, containerCard));
    productsList = data.filter((product) => product.id <= 30);
});

inputEl.addEventListener("input", (e) => {
    const searchString = e.target.value;

    containerCard.replaceChildren();

    productsList
    .filter(product => product?.name.toLowerCase().includes(searchString))
    .map(product => createCard (product, containerCard))
});






