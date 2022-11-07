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


//GESTIONE EVENTI

const buttonEl = document.querySelector("button");
buttonEl.addEventListener("click", () => window.open("https://it.louisvuitton.com/ita-it/novita/per-le-donne/ultimi-arrivi/_/N-t18gb9e5","_blank"));

const contactEl = document.querySelector(".contact");
contactEl.addEventListener("click", () => window.open("https://it.louisvuitton.com/ita-it/contattaci", "_blank"));

const helpEl = document.querySelector(".help");
helpEl.addEventListener("click", () => window.open("https://secure.louisvuitton.com/ita-it/mylv/prenotazione-appuntamenti?_gl=1*1wg2to5*_ga*MTE2NTA1Njk1OC4xNjY3Mzk2MDkx*_ga_S6ED35NYJQ*MTY2NzQ5MDc0OS4yLjAuMTY2NzQ5MDc1MC41OS4wLjA.", "_blank"));





