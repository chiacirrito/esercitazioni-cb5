let createCard = (title, code, price, img, description) => {
    let cardEl = document.createElement("div");
    cardEl.className = "card";

const bodyEl = document.querySelector("body");

//TITLE
let titleEl = document.createElement(h3);
titleEl.textContent = title;

//CODE
let codeEl = document.createElement(h4);
codeEl.textContent = code;

//PRICE
let priceEl = document.createElement(h4);
priceEl.textContent = price;

//IMG
let imgEl = document.createElement(img);
imgEl.setAttribute("src", imgUrl);
imgEl.setAttribute("alt", category);

//DESCRIPTION
let descriptionEl = document.createElement(p);
descriptionEl.textContent = description;

cardEl.append(titleEl, codeEl, priceEl, imgEl, descriptionEl);
bodyEl.appendChild(cardEl);

};

import products from "./products.js";

//HERO
const heroEl = document.querySelector("hero");
const hero = document.createElement("p");
hero.textContent = "Collezione Louis Vuitton";
heroEl.appendChild(hero);

//BESTSELLER E MOSTPOPULAR
const bestSellerEl = document.querySelector(".best-seller");
const bestSel = document.createElement("div");
bestSel.textContent = "Best Seller";
bestSel.append(products);
bestSellerEl.appendChild(bestSel);

const mostPopularEl = document.querySelector(".most-popular");
const mostPop = document.createElement("div");
mostPop.textContent = "Most Popular";
mostPop.append(products);
mostPopularEl.appendChild(mostPop);

products
.filter((product) => product.id <= 5)
  .map((product) => {
    createCard(
      product.title,
      product.img,
      product.code,
      product.price,
      product.description,
      product.category,
      bodyEl
    );
  });

  products
.filter((product) => product.id <= 5)
  .map((product) => {
    createCard(
      product.title,
      product.img,
      product.code,
      product.price,
      product.description,
      product.category,
    );
  });

