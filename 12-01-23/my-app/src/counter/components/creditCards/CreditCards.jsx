import { ENDPOINTS } from "../../constants/endpoints";
import { useFetch } from "../../hooks/use-fetch";

export function CreditCards() {
  const { data, error, loading, refetch } = useFetch(ENDPOINTS.CREDIT_CARDS);

  if (loading) {
    return `Caricamento in corso...`;
  }

  if (error) {
    return `Errore di caricamento`;
  }

  if (!data) return "";

  return (
    <section>
      <div className="card">
        <h4> Credit Card </h4>
        <h3>{data.credit_card_type}</h3>
        <h3>{data.credit_card_number}</h3>
        <h3>{data.credit_card_expiry_date}</h3>
        <hr />
        <button className="btn" onClick={refetch}>
          🔘
        </button>
      </div>
    </section>
  );
}
