const url = "http://localhost:3000/attori";
const urldel = "http://localhost:3000/attore";

const DELETE = async (url,id) => {
    const res = await fetch(url,{
        method: "DELETE",
        headers: {
            "Content-Type": "application/x-www-form-urlencoded"
        },
        body: new URLSearchParams({'id':id})
    });
    return await res.json();
};

function deleteActor(id) {
    const url = "http://localhost:3000/attore";
    return DELETE(url,id);
}

function createCard (actors){

    const container = document.querySelector(".attori");
    for (let actor of actors) {

    const cardEl = document.createElement("div");
    const imgEl = document.createElement("div");
    const nomeEl = document.createElement("h2");
    const cognomeEl = document.createElement("h2");
    const dataEl = document.createElement("h3");
    const btnDel = document.createElement("button");
    const idEl = actor.id;

    cardEl.className = "card"
    imgEl.className = "img"
    nomeEl.className = "name"
    cognomeEl.className = "cognome"
    dataEl.className = "data"
    btnDel.className = "cancella"

    nomeEl.textContent = "Nome: " + actor.nome;
    cognomeEl.textContent = "Cognome: " + actor.cognome;
    dataEl.textContent = actor.data_nascita;
    btnDel.textContent = "Cancella"

    cardEl.append(imgEl, nomeEl, cognomeEl, dataEl, btnDel)
    container.append(cardEl)

    btnDel.addEventListener("click", (e) => {
        e.preventDefault();
        deleteActor(idEl).then(() => location.reload());
    });
}
}


fetch (url)
    .then((res) => res.json())
    .then((item) => createCard(item))



