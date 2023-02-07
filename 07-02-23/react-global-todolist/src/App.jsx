import { useReducer } from "react";
import { ApplicationCtx, initialState } from "./store/state";
import mainReducer from "./store/reducer";
import Navbar from "./components/navbar/Navbar";
import Form from "./components/form/Form";
import TodoList from "./components/todoList";
import styles from "./App.module.scss";
import "./global.css";

function App() {
  const [state, dispatch] = useReducer(mainReducer, initialState);
  return (
    <ApplicationCtx.Provider value={{ state, dispatch }}>
      <div className={styles.App}>
        <Navbar />
        <Form />
        <TodoList />
      </div>
    </ApplicationCtx.Provider>
  );
}

export default App;
