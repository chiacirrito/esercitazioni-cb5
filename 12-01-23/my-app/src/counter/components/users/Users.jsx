import { ENDPOINTS } from "../../constants/endpoints";
import { useFetch } from "../../hooks/use-fetch";

export function Users() {
  const { data, error, loading, refetch } = useFetch(ENDPOINTS.USERS);

  if (loading) {
    return `Caricamento in corso...`;
  }

  if (error) {
    return `Errore di caricamento`;
  }

  if (!data) return "";

  return (
    <section>
      <div className="users">
        <h4> Users </h4>
        <h3>{data.first_name}</h3>
        <h3>{data.last_name}</h3>
        <h3>{data.email}</h3>
        <hr />
        <button className="btn" onClick={refetch}>
          🔘
        </button>
      </div>
    </section>
  );
}
