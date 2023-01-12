import { ENDPOINTS } from "../../constants/endpoints";
import { useFetch } from "../../hooks/use-fetch";

export function Banks() {
  const { data, error, loading, refetch } = useFetch(ENDPOINTS.BANKS);
  if (loading) {
    return `Caricamento in corso...`;
  }

  if (error) {
    return `Errore di caricamento`;
  }

  if (!data) return "";

  return (
    <section>
      <div className="banks">
        <h4>{data.bank_name}</h4>
        <h3>{data.iban}</h3>
        <h3>{data.account_number}</h3>
        <hr />
        <button className="btn" onClick={refetch}>
          🔘
        </button>
      </div>
    </section>
  );
}
