import { GET } from "./http";
import { useEffect, useState } from "react";
import styles from "./styles/posts.module.scss";
import PostCard from "../components/post/PostCard";
import { GrChat, GrHomeRounded, GrUser } from "react-icons/gr";
import { useNavigate } from "react-router-dom";

export default function Posts() {
  const [postList, setPostList] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    GET("posts?limit=10").then(({ posts }) => setPostList(posts));
  }, []);

  return (
    <>
      <div className={styles.button}>
        <button className={styles.btn} onClick={() => navigate("/")}>
          <GrHomeRounded />
        </button>
        <button className={styles.btn} onClick={() => navigate("/users")}>
          <GrUser />
        </button>
        <button className={styles.btn} onClick={() => navigate("/posts/1")}>
          <GrChat />
        </button>
      </div>
      <div className={styles.Posts}>
        {postList.map((post) => (
          <PostCard postData={post} key={post.id} />
        ))}
      </div>
    </>
  );
}
