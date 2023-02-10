/* LATO CLIENT */
import styles from "../../styles/Pages.module.scss";
import Hero from "@/components/hero";
import Form from "@/components/form";
import { TbMail, TbPhone } from "react-icons/tb";

const Users = ({ users }) => {
  console.log(users);
  return (
    <div className={styles.Pages}>
      <div className={styles.Hero}>
        <Hero />
        <Form />
      </div>
      <h2>Manufacturer contacts</h2>
      <div className={styles.users}>
        {users &&
          users.map((user) => (
            <h4 key={user.id}>
              <div className={styles.container}>
                <div className={styles.contact}>
                  <TbPhone />
                  <TbMail />
                </div>
                <div className={styles.data}>
                  {user.phone}
                  {user.email}
                </div>
              </div>
            </h4>
          ))}
      </div>
    </div>
  );
};

export default Users;

/* LATO SERVER */
export async function getStaticProps() {
  const res = await fetch("https://dummyjson.com/users?limit=16");
  const data = await res.json();

  return {
    props: {
      users: data.users,
    },
  };
}
