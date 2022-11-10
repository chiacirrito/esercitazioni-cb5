const btnEl = document.getElementById("bottone");
const urlAdvice = "https://api.adviceslip.com/advice";
const cardEl = document.getElementById("section");
const h2El = document.createElement("h2");
const idEl = document.createElement("p");

/** COMMENTO FUNZIONE
 * Get data from the end point
 *
 * @param {string} data
 */

const createCard = (data) => {

    h2El.innerText = `"${data.slip.advice}"`;
    idEl.innerText = `advice # ${data.slip.id}`;
    const divider = document.getElementById("line");
    const button = document.getElementById("bottone");

    cardEl.append(idEl, h2El, divider, button);

};



/** COMMENTO FUNZIONE
 * Get data from the end point
 *
 * @param {string} url
 */

 const getAdvice = (url) => {
    cardEl.classList.add("active");
    fetch(url, { cache: "no-cache" })
      .then((res) => res.json())
      .then((res) => createCard(res))
      .catch((e) => console.log("Error:" + e))
      .finally(() => cardEl.classList.remove("active")); 
  };

  const onFirstLoad = (htmlEl) => {
    htmlEl.addEventListener("click", () => {
      getAdvice(urlAdvice);
    });
  
    getAdvice(urlAdvice);
  };
  
  window.onload = onFirstLoad(btnEl);
  

  
  
  