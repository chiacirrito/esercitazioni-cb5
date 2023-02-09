import { GrSearch } from "react-icons/gr";
import NoteList from "../noteList/NoteList";
import styles from "./index.module.scss";

const NoteContent = () => {
  return (
    <div className={styles.Content}>
      <h2>LIST OF NOTES </h2>
      <div className={styles.search}>
        <GrSearch />
        <input type="text" id="search" name="search" placeholder="Search..." />
      </div>
      <NoteList />
    </div>
  );
};

export default NoteContent;
