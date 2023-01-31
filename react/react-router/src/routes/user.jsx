import { useState, useEffect } from "react";
import { GET } from "./http";
import styles from "./styles/users.module.scss";

const User = ({ data }) => {
  const [user, setUser] = useState({});

  useEffect(() => {
    GET(`users/${data.userId}`)
      .then((user) => setUser(user))
      .then(console.log);
  }, []);

  return (
    <div className={styles.user}>
      <img src={user.image} className={styles.img_user} alt={user.firstName} />
      <p>@{user.username}</p>
    </div>
  );
};

export default User;
