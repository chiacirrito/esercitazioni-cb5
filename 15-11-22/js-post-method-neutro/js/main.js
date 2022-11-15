import { c, q, GET, POST, uuidv4 } from './utils.js';
const url = "http://localhost:3000/pokemon";

const form = document.forms.pokemon;
const element = form.elements;
const containerCard = document.querySelector(".containerCard");


const createCard = (data) => {

    const card = document.createElement("div");
	card.className = "pkm-card";
    card.classList.add(".pkm-card");
    
    const sectionNameEl = document.createElement("h2");
    sectionNameEl.textContent = `${data.name}`;
        
    const sectionTypesEl = document.createElement("p"); 
    sectionTypesEl.textContent = `Tipo: ${data.type}`;

	card.append(sectionNameEl, sectionTypesEl);
    containerCard.append(card);

    
    }

form.addEventListener("submit", (e) => {
	e.preventDefault();
	const data = {
		name: element.pkmName.value,
		type: element.pkmType.value
	}

	POST(url, data)
		.then((response) => response.json())
		.then((res) => {
			console.log('Success:', res);
		})
		.catch((error) => {
			console.error('Error:', error);
		})
})



window.onload = GET(url).then(res => res.map(pkm => createCard (pkm)));


