import styles from "./App.module.scss";
import { Link, Outlet } from "react-router-dom";
import { GrChatOption, GrChat, GrSearch, GrUser } from "react-icons/gr";

function App() {
  return (
    <>
      <div className={styles.App}>
        <header className={styles.header}>
          <img
            src="https://static.vecteezy.com/system/resources/previews/002/534/045/original/social-media-twitter-logo-blue-isolated-free-vector.jpg"
            alt="logo"
          />
          <h1>Welcome to Puddicino</h1>
        </header>
        <img
          className={styles.img_header}
          src="https://www.freewpheaders.com/wp-content/gallery/liquids/blue-green-sea-water-bg-header.jpg"
          alt="img"
        />
        <div className={styles.body}>
          <Link to="/users">
            <p>
              <GrUser className={styles.icon} />
              <h4>Go to users</h4>
            </p>
          </Link>
          <Link to="/users/1">
            <p>
              <GrSearch className={styles.icon} /> <h4>Search User</h4>
            </p>
          </Link>
          <Link to="/posts">
            <p>
              <GrChatOption className={styles.icon} />
              <h4>View Posts</h4>
            </p>
          </Link>
          <Link to="/posts/1">
            <p>
              <GrChat className={styles.icon} />
              <h4>Search Post</h4>
            </p>
          </Link>
        </div>
      </div>
      <Outlet />
    </>
  );
}

export default App;
