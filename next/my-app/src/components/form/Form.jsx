import { useState } from "react";
import { TbPencil } from "react-icons/tb";
import { CgClose } from "react-icons/cg";
import styles from "./index.module.scss";

function openForm() {
  document.getElementById("form").style.display = "block";
}
function closeForm() {
  document.getElementById("form").style.display = "none";
}

const Form = () => {
  const [message, setMessage] = useState("");

  return (
    <div className={styles.form}>
      <form
        action="mailto:chiaracirrito@yahoo.com"
        method="post"
        id="form"
        className={styles.Form}
      >
        <input
          className={styles.one}
          type="text"
          name="text"
          id="text"
          value={message}
          placeholder="Message"
          onChange={(e) => setMessage(e.target.value)}
        />
        <input className={styles.three} type="submit" value="Submit" />
      </form>
      <div className={styles.btn}>
        <TbPencil className={styles.OpenBtn} onClick={openForm} />
        <CgClose
          type="button"
          className={styles.CloseBtn}
          onClick={closeForm}
        />
      </div>
    </div>
  );
};

export default Form;
