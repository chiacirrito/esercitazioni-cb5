const createCard = (title, imgUrl, price, description, category, parent) => {
    const cardEl = document.createElement("div");
  
    cardEl.className = "card";
   
    // title
    const titleEl = document.createElement("h3");
    titleEl.textContent = title;
  
    // img
    const imgEl = document.createElement("img");
    imgEl.setAttribute("src", imgUrl);
    imgEl.setAttribute("alt", category);
  
    // price
    const priceEl = document.createElement("p");
    priceEl.textContent = price;

    // paragraph
    const parEl = document.createElement("p");
    parEl.textContent = description;
  
    cardEl.append(titleEl, imgEl, priceEl, parEl);
    parent.appendChild(cardEl);
  };

  import products from "./products.js";

const heroEl = document.querySelector("hero");
const hero = document.createElement("p");
heroEl.appendChild(heroEl);


products
.filter((product) => product.id <= 5)
  .map((product) => {
    createCard(
      product.title,
      product.img,
      product.price,
      product.description,
      product.category,
      heroEl
    );
  });

  products
.filter((product) => product.id > 5)
  .map((product) => {
    createCard(
      product.title,
      product.img,
      product.price,
      product.description,
      product.category,
      heroEl
    );
  });