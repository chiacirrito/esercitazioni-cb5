import styles from "./App.module.scss";
import { useReducer } from "react";
import { Context } from "./store/context";
import initialState from "./store/state";
import Dashboard from "./components/dashboard";
import FancyTitle from "./components/fancyTitle/FancyTitle";
import { titleReducer } from "./store/reducers";

function App() {
  const [state, dispatch] = useReducer(titleReducer, initialState);

  return (
    <Context.Provider value={state}>
      <div className={styles.App}>
        <FancyTitle />
        <Dashboard />
      </div>
    </Context.Provider>
  );
}

export default App;
