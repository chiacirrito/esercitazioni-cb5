import { useState, useContext } from "react";
import { ApplicationCtx } from "../../App";
import styles from "./index.module.scss";

const AddNote = () => {
  const { dispatch } = useContext(ApplicationCtx);

  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");

  const onHandleSubmit = (e) => {
    e.preventDefault();
    dispatch({
      type: "ADD_NEW_NOTE",
      payload: {
        id: Math.floor(Math.random() * 100),
        title,
        content,
      },
    });
    setTitle("");
    setContent("");
  };

  return (
    <div className={styles.AddNote}>
      <form onSubmit={onHandleSubmit}>
        <input
          type="text"
          id="title"
          name="Title"
          value={title}
          placeholder="Title"
          onChange={(e) => setTitle(() => e.target.value)}
        />
        <input
          type="text"
          id="text"
          name="Text"
          value={content}
          placeholder="Text"
          onChange={(e) => setContent(() => e.target.value)}
        />
        <input type="submit" value="Submit" />
      </form>
    </div>
  );
};

export default AddNote;
