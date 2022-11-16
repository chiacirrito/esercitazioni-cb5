import { c, q, GET, POST, DELETE, uuidv4 } from './utils.js';
const url = "http://localhost:3000/pokemon";

const form = document.forms.pokemon;
const element = form.elements;
const containerCard = document.querySelector(".containerCard");


const createCard = (url, id, data) => {

    const card = document.createElement("div");
	card.className = "pkm-card";
    card.classList.add(".pkm-card");

	const background = document.createElement("div");
	background.className = "background";
	background.textContent = "";
    
    const sectionNameEl = document.createElement("h2");
    sectionNameEl.textContent = `${data.name}`;
        
    const sectionTypesEl = document.createElement("h5"); 
    sectionTypesEl.textContent = `${data.type}`;

	const btn = document.createElement("button");
	btn.className = "btn-class";
	btn.textContent = "DELETE";

	card.append(background, sectionNameEl, sectionTypesEl, btn);
    containerCard.append(card);

	btn.addEventListener("click", () => {
        DELETE(url, id)
            .then(() => location.reload())
    })
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



window.onload = GET(url).then(res => res.map(pkm => {
	try {
		createCard (url, pkm.id, pkm);
	} catch (error) {
		console.log(error);
	}
}))


