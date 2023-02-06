import styles from "./index.module.scss";
import initialState from "../../store/state";
import { titleReducer } from "../../store/reducers";
import { useReducer } from "react";

const Dashboard = () => {
  const [state, dispatch] = useReducer(titleReducer, initialState);

  return (
    <div className={styles.Dashboard}>
      <img src="https://picsum.photos/200/200" alt="img" />
      <h2>Name</h2>
      <h4>user@gmail.com</h4>
      <button onClick={() => dispatch({ type: "change_title" })}>
        Change Title
      </button>
    </div>
  );
};

export default Dashboard;
