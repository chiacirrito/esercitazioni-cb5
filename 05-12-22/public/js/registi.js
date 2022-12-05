const url = "http://localhost:3000/registi";
const urlRegista = "http://localhost:3000/regista";
const createregisti = document.forms.newregisti.elements;
const submit = createregisti.submitregisti;

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
  let reg = {
    nome: createregisti[1].value,
    cognome: createregisti[2].value,
  };
  console.log(reg);
  POST(urlRegista, reg);
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

function create(registi) {
  const container = document.querySelector(".registi");
  for (let reg of registi) {
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

    idEl.textContent = reg.id;
    nomeEl.textContent = "Nome: " + reg.nome;
    cognomeEl.textContent = "Cognome: " + reg.cognome;
    btnDel.textContent = "Cancella";

    cardEl.append(idEl, imgEl, nomeEl, cognomeEl, btnDel);
    container.append(cardEl);

    btnDel.addEventListener("click", () => {
      DELETE(urlRegista, reg.id);
      location.reload();
    });
  }
}

fetch(url)
  .then((res) => res.json())
  .then((item) => create(item));
