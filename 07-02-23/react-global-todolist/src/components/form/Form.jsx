import { useState } from "react";
import styles from "./index.module.scss";
const Form = () => {
  const [input, setInput] = useState("");

  const onFormSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <div className={styles.form}>
      <form onSubmit={onFormSubmit}>
        <input
          type="text"
          placeholder="Cosa devi fare?"
          value={input}
          onInput={(e) => setInput(() => e.target.value)}
        />
      </form>
    </div>
  );
};

export default Form;
