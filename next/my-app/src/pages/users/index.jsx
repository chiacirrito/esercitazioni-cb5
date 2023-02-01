/* LATO CLIENT */
import styles from "../../styles/Pages.module.scss";

const Users = ({ users }) => {
  console.log(users);
  return (
    <div className={styles.Pages}>
      <h3>Email List</h3>
      <div className={styles.users}>
        {users && users.map((user) => <h4 key={user.id}>{user.email}</h4>)}
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
