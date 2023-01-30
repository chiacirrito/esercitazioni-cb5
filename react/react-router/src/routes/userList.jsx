import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import User from "./user";
import styles from "./styles/styles.module.scss";
import { GET } from "./http";
import { GrHomeRounded, GrSearch } from "react-icons/gr";

const UserList = () => {
  const [userList, setUserList] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    GET("posts").then(({ posts }) => setUserList(posts));
  }, []);

  return (
    <div className={styles.container}>
      <img
        className={styles.img_list}
        src="https://i.pinimg.com/originals/2a/50/a5/2a50a528dfb834f8914fcbf9ec790deb.jpg"
        alt="img"
      />
      <div className={styles.main}>
        <h1>Friend's List</h1>
        <div className={styles.button}>
          <button className={styles.btn} onClick={() => navigate("/")}>
            <GrHomeRounded />
          </button>
          <button
            className={styles.btn}
            onClick={() => navigate("/users/:user")}
          >
            <GrSearch />
          </button>
        </div>
      </div>
      <div className={styles.list}>
        {userList.map((user) => (
          <User data={user} key={user.id} />
        ))}
      </div>
    </div>
  );
};

export default UserList;
