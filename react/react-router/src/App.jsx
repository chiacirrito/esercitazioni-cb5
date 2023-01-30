import styles from "./App.module.scss";
import { Link } from "react-router-dom";

function App() {
  return (
    <div className={styles.App}>
      <header className={styles.header}>
        <h1>Welcome to Puddicino</h1>
        <img
          src="https://static.vecteezy.com/system/resources/previews/002/534/045/original/social-media-twitter-logo-blue-isolated-free-vector.jpg"
          alt="logo"
        />

        <Link to="/users">
          <p>Go to users</p>
        </Link>
        <Link to="/users/:quote">
          <p>Go to quotes</p>
        </Link>
      </header>
    </div>
  );
}

export default App;
