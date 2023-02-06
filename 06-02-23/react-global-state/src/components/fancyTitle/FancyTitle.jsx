import styles from "./index.module.scss";
import { Context } from "../../store/context";
import { titleReducer } from "../../store/reducers";
import { useContext, useReducer } from "react";

const FancyTitle = () => {
  const value = useContext(Context);
  console.log(value);

  return <h1 className={styles.title}>{value.fancyTitle.title}</h1>;
};

export default FancyTitle;
