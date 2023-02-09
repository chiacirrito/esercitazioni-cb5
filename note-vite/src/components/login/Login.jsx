import { useContext, useState } from "react";
import { ApplicationCtx } from "../../App";
import styles from "./index.module.scss";

const Login = () => {
  const { dispatch } = useContext(ApplicationCtx);
  const [username, setUsername] = useState("");

  const onHandleSubmit = (e) => {
    e.preventDefault();
    dispatch({ type: "SET_USERNAME", payload: username });
  };

  return (
    <div className={styles.Login}>
      <form onSubmit={onHandleSubmit}>
        <input
          value={username}
          onChange={(e) => setUsername(() => e.target.value)}
          type="text"
          id="username"
          name="username"
          placeholder="Username"
        />
        <input type="submit" value="Login" />
      </form>
    </div>
  );
};

export default Login;
