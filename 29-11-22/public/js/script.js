const url = "http://localhost:3000/attori"

function createCard (actors){

    const container = document.querySelector(".attori");
    for (let actor of actors) {

    const cardEl = document.createElement("div");
    const imgEl = document.createElement("div");
    const nomeEl = document.createElement("h2");
    const cognomeEl = document.createElement("h2");
    const dataEl = document.createElement("h3");

    cardEl.className = "card"
    imgEl.className = "img"
    nomeEl.className = "name"
    cognomeEl.className = "cognome"
    dataEl.className = "data"

    nomeEl.textContent = actor.nome;
    cognomeEl.textContent = actor.cognome;
    dataEl.textContent = actor.data_nascita;

    cardEl.append(imgEl, nomeEl, cognomeEl, dataEl)
    container.append(cardEl)
}
}

fetch (url)
    .then((res) => res.json())
    .then((item) => createCard(item))

