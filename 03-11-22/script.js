import {bags} from "./products.js";
import {bagstwo} from "./products.js";
import {bagsthree} from "./products.js";

const bodyEl = document.querySelector("body");
const naEl = document.querySelector(".new-arrivals");
const acquistaEl = document.querySelector(".acquista");
const bsEl = document.querySelector(".best-seller");
const mpEl = document.querySelector(".most-popular");

const createSection = (data, parent) => {
    const sectionEl = document.createElement("div");
    const sectionImgEl = document.createElement("img");
    const sectionTitleEl = document.createElement("h5");
    const sectionPriceEl = document.createElement("h5");

    sectionEl.className = "section";
    sectionImgEl.setAttribute("src", data.image);
    sectionImgEl.setAttribute("alt", data.category);
    sectionTitleEl.textContent = data.title;
    sectionPriceEl.textContent = data.price;

    sectionEl.append(sectionImgEl, sectionTitleEl, sectionPriceEl);
    parent.appendChild(sectionEl);
};

const createCard = (data, parent) => {
    const cardEl = document.createElement("div");
    const cardImgEl = document.createElement("img");
    const cardTitleEl = document.createElement("h4");
    const cardPriceEl = document.createElement("h5");
    const cardCodeEl = document.createElement("h5");
    const cardParEl = document.createElement("p");

    cardEl.className = "card";
    cardImgEl.setAttribute("src", data.image);
    cardImgEl.setAttribute("alt", data.category);
    cardTitleEl.textContent = data.title;
    cardCodeEl.textContent = data.code;
    cardPriceEl.textContent = data.price;
    cardParEl.textContent = data.description;

    cardEl.append(cardCodeEl, cardTitleEl, cardImgEl, cardPriceEl, cardParEl);
    parent.appendChild(cardEl);
};

bagsthree.map((bag) => createSection(bag, naEl));
bags.map((bag) => createCard(bag, bsEl));
bagstwo.map((bag) => createCard(bag, mpEl));

const cardEls = document.querySelector(".card");
cardEls.forEach((card) => {
    card.addEventListener("click", () => card.classList.toggle("special-card"));
});








