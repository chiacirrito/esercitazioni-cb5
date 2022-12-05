const url = "http://localhost:3000/attori";
const urldel = "http://localhost:3000/attore";
const createForm = document.forms.new.elements;
const submit = createForm.submit;

const POST = async (url, body) => {
  const res = await fetch(url, {
    method: "POST",
    headers: {
      "Content-Type": "application/x-www-form-urlencoded",
    },
    body: new URLSearchParams(body),
  });
  return res.json;
};

//FORM SUBMIT
submit.addEventListener("click", () => {
  let att = {
    nome: createForm[1].value,
    cognome: createForm[2].value,
  };
  console.log(att);
  POST(urldel, att);
});

//DELETE
const DELETE = async (url, id) => {
  const res = await fetch(url, {
    method: "DELETE",
    headers: {
      "Content-Type": "application/x-www-form-urlencoded",
    },
    body: new URLSearchParams({ id: id }),
  });
  return res.json();
};

function createCard(actors) {
  const container = document.querySelector(".attori");
  for (let actor of actors) {
    const cardEl = document.createElement("div");
    const idEl = document.createElement("h3");
    const imgEl = document.createElement("div");
    const nomeEl = document.createElement("h2");
    const cognomeEl = document.createElement("h2");
    const btnDel = document.createElement("button");

    cardEl.className = "card";
    idEl.className = "id";
    imgEl.className = "img";
    nomeEl.className = "name";
    cognomeEl.className = "cognome";
    btnDel.className = "cancella";

    idEl.textContent = actor.id;
    nomeEl.textContent = "Nome: " + actor.nome;
    cognomeEl.textContent = "Cognome: " + actor.cognome;
    btnDel.textContent = "Cancella";

    cardEl.append(idEl, imgEl, nomeEl, cognomeEl, btnDel);
    container.append(cardEl);

    btnDel.addEventListener("click", () => {
      DELETE(urldel, actor.id);
      location.reload();
    });
  }
}

fetch(url)
  .then((res) => res.json())
  .then((item) => createCard(item));
