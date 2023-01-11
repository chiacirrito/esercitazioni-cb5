import "./App.css";
import "./counter/components/layout/container.css";
import { Text } from "./atoms/text/Text";
import { Header } from "./counter/components/layout/container.jsx";
import { Footer } from "./counter/components/layout/container.jsx";
import { BloodTypes } from "./counter/components/BloodTypes";
import "./counter/components/BloodTypes.css";
import { useEffect, useState } from "react";

const API_ENDPOINT = {
  BASE: `https://random-data-api.com/api/v2`,

  get BEERS() {
    return `${this.BASE}/beers`;
  },

  CREDIT_CARDS: `credit_cards`,
};

export default function App() {
  const url = API_ENDPOINT.BEERS;
  console.log({ url });

  const [randomBeer, setRandomBeer] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const fetchNewBeer = () => {
    setLoading(true);
    setError(null);

    fetch(API_ENDPOINT.BEERS)
      .then((r) => r.json())
      .then((beer) => {
        console.log({ beer });
        setLoading(false);
        setRandomBeer(beer);
      })
      .catch((err) => {
        console.error(err);
        setError(err);
      })
      .finally(() => {
        setLoading(false);
      });
  };

  useEffect(() => {
    console.log("Load");
    fetchNewBeer();

    return () => {
      console.log("unmount");
    };
  }, []);

  if (loading) {
    return `Caricamento in corso...`;
  }

  if (error || !randomBeer) {
    return `Errore di caricamento`;
  }

  const { id, brand, name, style, malt, alcohol } = randomBeer;

  return (
    <div className="App">
      {Header({ Header })}
      <section className="blood">{<BloodTypes />}</section>
      <section className="beers">
        <Text as="h1" variant="title">
          Estrazione casuale birra da provare!
        </Text>
        <div className="beer">
          <h4>Beer code: {id}</h4>
          <h3>
            {brand} - {name}
          </h3>
          <h3>
            {style} {malt}
          </h3>
          <h3>{alcohol}</h3>
          <button className="btn" onClick={() => fetchNewBeer()}>
            🔘
          </button>
        </div>
      </section>
      <section className="footer">{Footer({ Footer })}</section>
    </div>
  );
}
