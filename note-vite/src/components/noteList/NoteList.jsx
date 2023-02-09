import { useContext } from "react";
import { ApplicationCtx } from "../../App";
import NoteItem from "../noteItem/NoteItem";
import styles from "./index.module.scss";

const NoteList = () => {
  const { state } = useContext(ApplicationCtx);

  return (
    <div className={styles.List}>
      {state.noteList.map((note) => (
        <NoteItem data={note} key={note.id} />
      ))}
    </div>
  );
};

export default NoteList;
