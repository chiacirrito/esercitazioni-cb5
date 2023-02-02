/* LATO CLIENT */
import styles from "../../styles/Pages.module.scss";
import Hero from "@/components/hero";

const Users = ({ users }) => {
  console.log(users);
  return (
    <div className={styles.Pages}>
      <div className={styles.Hero}>
        <Hero />
      </div>
      <h2>Manufacturer contacts</h2>
      <div className={styles.users}>
        {users &&
          users.map((user) => (
            <h4 key={user.id}>
              {user.phone}
              {user.email}
            </h4>
          ))}
      </div>
    </div>
  );
};

export default Users;

/* LATO SERVER */
export async function getStaticProps() {
  const res = await fetch("https://dummyjson.com/users");
  const data = await res.json();

  return {
    props: {
      users: data.users,
    },
  };
}
