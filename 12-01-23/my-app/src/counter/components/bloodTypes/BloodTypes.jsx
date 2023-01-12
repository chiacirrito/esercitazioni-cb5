import { ENDPOINTS } from "../../constants/endpoints";
import { useFetch } from "../../hooks/use-fetch";

export function BloodTypes() {
  const { data, error, loading, refetch } = useFetch(ENDPOINTS.BLOOD_TYPES);

  if (loading) {
    return `Caricamento in corso...`;
  }

  if (error) {
    return `Errore di caricamento`;
  }

  if (!data) return "";

  return (
    <section>
      <div className="blood">
        <h4> Blood Type </h4>
        <h3>{data.type}</h3>
        <h3>{data.group}</h3>
        <hr />
        <button className="btn" onClick={refetch}>
          🔘
        </button>
      </div>
    </section>
  );
}
