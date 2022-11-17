import { qs, ce, GET } from "./utils.js";

const BASE_URL = "https://jsonplaceholder.typicode.com/photos";
const cardList = qs(".cardList");
const inputEl = qs(".search-input");
let inputValue = "";
let productsList = [];

const createCardEl = (data, parent) => {
  const { thumbnailUrl, title, url } = data;
  const cardEl = ce("div");
  const imgEl = ce("img");
  const titleEl = ce("h4");
  const urlEl = ce("span");

  cardEl.className = "card";
  imgEl.className = "card__img";
  imgEl.setAttribute("src", thumbnailUrl);
  imgEl.setAttribute("alt", title);
  titleEl.textContent = title;
  titleEl.className = "card__title";
  urlEl.className = "card__text";
  urlEl.textContent = url;

  cardEl.append(imgEl, titleEl, urlEl);
  parent.append(cardEl);
};

GET(BASE_URL).then((data) => {
    data.map((product) => createCardEl(product, cardList));
  productsList = data.filter((product) => product.id <= 10);
});

inputEl.addEventListener("keyup", (e) => {
    const searchString = e.target.value;
    const filteredProd = productsList.filter((prod) => {
      return prod.title.includes(searchString);
    });
    console.log(filteredProd);
  });


//MODALE

const $qs = (el) => document.querySelector(el);

const modalEl = $qs(".modal");
const closeModalBtnEl = $qs(".close-modal-btn");
const openModalBtnEl = $qs(".open-modal-btn");
const ballEl = $qs(".ball");

closeModalBtnEl.addEventListener("click", () => {
  modalEl.style = "opacity: 0;";
  openModalBtnEl.textContent = "Show modal";
  // openModalBtnEl.setAttribute("disabled", "true");
});

openModalBtnEl.addEventListener("click", () => {
  modalEl.style = "opacity: 1;";
  openModalBtnEl.textContent = "Hide modal";
  openModalBtnEl.setAttribute("disabled", "false");
});

// SET-TIMEOUT & SET-INTERVAL
const showModal = () => (modalEl.style = "opacity: 1;");

// // setTimeout(() => modalEl.style = "opacity: 1;", 2000);

const timeoutShowModal = setTimeout(showModal, 1000);

// const intervalCiaoRagazzi = setInterval(
//   () => console.log("ciao ragazzi"),
//   1000
// );
// // console.log(timeoutShowModal);
// blockModalBtnEl.addEventListener("click", () => {
//   clearTimeout(timeoutShowModal);
//   clearInterval(intervalCiaoRagazzi);
// });



// PROVA E ASICRONA

setTimeout(() => {
  console.log("1. Questo viene prima di tutto");
}, 5000);

// document.body.addEventListener("click", (e) => {
//   console.log(e.clientY);
//   ballEl.style.transform = "translateX(" + e.clientY + "px)";
// });