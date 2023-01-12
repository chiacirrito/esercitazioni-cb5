import { ENDPOINTS } from "../../constants/endpoints";
import { useFetch } from "../../hooks/use-fetch";

export function Beers() {
  const { data, error, loading, refetch } = useFetch(ENDPOINTS.BEERS);
  if (loading) {
    return `Caricamento in corso...`;
  }

  if (error) {
    return `Errore di caricamento`;
  }

  if (!data) return "";

  return (
    <section>
      <div className="beer">
        <h4>Beer code: {data.id}</h4>
        <h3>
          {data.brand} - {data.name}
        </h3>
        <h3>
          {data.style} {data.malt}
        </h3>
        <h3>{data.alcohol}</h3>
        <hr />
        <button className="btn" onClick={refetch}>
          🔘
        </button>
      </div>
    </section>
  );
}
