//DICHIARAZIONE VARIABILI
const body = document.querySelector("body");
const lds_ellipsisEl = document.querySelector(".lds_ellipsis");
const postEl = document.querySelector(".post");
const id = document.createElement("h4");
const titleEl = document.createElement("h2");
const bodyEl = document.createElement("p"); 

//FUNZIONE PER FAR COMPARIRE LA PRIMA CARD

let i = 1;
let result = `https://jsonplaceholder.typicode.com/posts/${i}`;
fetch(result)
.then((res) => res.json())
.then((res) => createSection(res));

//CREA SEZIONE

const createSection = (item) => {
    postEl.className = "post";
    id.textContent = `#${item.id}`;
    titleEl.textContent = `#${item.title}`;
    bodyEl.textContent = `#${item.body}`;
   
   postEl.append(id, titleEl,  bodyEl);
   postsEl.appendChild(postEl);
   };
   
//BOTTONI

const buttonNext = document.querySelector(".next");
const buttonPrev = document.querySelector(".prev");

buttonNext.addEventListener("click", () => {
    i++
    let result = `https://jsonplaceholder.typicode.com/posts/${i}`;
    fetch(result)
    .then((res) => res.json())
    .then((res) => createSection(res));
    if (i >= 10) buttonNext.disabled = true;
    if (i === 1) buttonPrev.disabled = true;
    else buttonPrev.disabled = false;
})

buttonPrev.addEventListener("click", () => {
    if(i <= 2)
        buttonPrev.disabled = true;
        buttonNext.disabled = false;
    i--
    let result = `https://jsonplaceholder.typicode.com/posts/${i}`;
    fetch(result)
    .then((res) => res.json())
    .then((res) => createSection(res));
});

window.onLoad = buttonPrev.disabled = true;

//FUNZIONE LOADING
let res = urlArray.map((url) => {
    lds_ellipsisEl.classList.add("active");
    return fetch(url).then((res) => res.json());
  })

  Promise.all(request)
  .then((res) =>
    res.map((r) => createSection(r)))
    .finally(() => lds_ellipsisEl.classList.remove("active")); 
