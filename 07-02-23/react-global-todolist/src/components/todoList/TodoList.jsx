import { useContext } from "react";
import { ApplicationCtx } from "../../store/state";
import TodoItem from "../todoItem/TodoItem";
import styles from "./index.module.scss";

const TodoList = () => {
  const context = useContext(ApplicationCtx);
  console.log(context);

  return (
    <div className={styles.todolist}>
      {context.state.todoList.map((todo) => (
        <TodoItem data={todo} key={todo.id} />
      ))}
    </div>
  );
};

export default TodoList;
