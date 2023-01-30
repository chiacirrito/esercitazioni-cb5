import { useNavigate, useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import styles from "./styles/styles.module.scss";
import { GrCaretNext, GrCaretPrevious, GrHomeRounded } from "react-icons/gr";

export default function User() {
  let { user } = useParams();
  const navigate = useNavigate();

  const [userData, setUserData] = useState({});

  useEffect(() => {
    fetch(`https://dummyjson.com/users/${user}`)
      .then((res) => res.json())
      .then((data) => setUserData(data))
      .then(console.log);
  }, [user]);

  const onClickPrevBtn = () => navigate(`/users/${--user}`);
  const onClickNextBtn = () => navigate(`/users/${++user}`);

  return (
    <div className={styles.quote} id={userData.id}>
      <img
        className={styles.img_quote}
        src="https://i.pinimg.com/originals/46/9a/8b/469a8be89cecc312fd3d235e2675f82e.jpg"
        alt="img"
      />
      <div className={styles.content}>
        <h2>Look for someone among your friend</h2>

        <img
          src={userData.image}
          className={styles.btn}
          alt={userData.firstName}
        />
        <h3>
          {userData.firstName} {userData.lastName}
        </h3>
        <h4>Age: {userData.age}</h4>
      </div>
      <div className={styles.button}>
        <button className={styles.btn} onClick={onClickPrevBtn}>
          <GrCaretPrevious />
        </button>
        <button className={styles.btn} onClick={() => navigate("/")}>
          <GrHomeRounded />
        </button>
        <button className={styles.btn} onClick={onClickNextBtn}>
          <GrCaretNext />
        </button>
      </div>
    </div>
  );
}
