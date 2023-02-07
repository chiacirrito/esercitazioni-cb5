import { useContext } from "react";
import { ApplicationCtx } from "../../store/state";
import styles from "./index.module.scss";

const TodoItem = ({ data }) => {
  const { state, dispatch } = useContext(ApplicationCtx);

  const onHandleClick = (e) => {
    dispatch({
      type: "REMOVE_TODO_FROM_LIST",
      payload: data.id,
    });
  };

  return (
    <div
      className={`${styles.todo} ${data.status && styles.statusDone}`}
      onClick={onHandleClick}
    >
      <p>{data.content}</p>
    </div>
  );
};

export default TodoItem;
