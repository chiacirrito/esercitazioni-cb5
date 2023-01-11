import { ENDPOINTS } from "../constants/endpoints.js";
import { useFetch } from "../hooks/use-fetch.js";

export function BloodTypes() {
  const { data, error, loading, refetch } = useFetch(ENDPOINTS.BLOOD_TYPES);

  if (loading) {
    return `Caricamento in corso...`;
  }

  if (error) {
    return `Errore di caricamento`;
  }

  return (
    <section>
      {JSON.stringify(data)}
      <button className="btn" onClick={refetch}>
        🔘
      </button>
    </section>
  );
}
