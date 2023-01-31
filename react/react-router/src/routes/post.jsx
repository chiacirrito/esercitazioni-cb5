import { useParams, Outlet } from "react-router-dom";
import { useState, useEffect } from "react";
import styles from "./styles/post.module.scss";
import { GET } from "./http";
import PostCard from "../components/post/PostCard";
import { GrChatOption, GrHomeRounded, GrUser } from "react-icons/gr";
import { useNavigate } from "react-router-dom";

export default function Post() {
  const params = useParams();

  const [postData, setPostData] = useState({});
  const navigate = useNavigate();

  useEffect(() => {
    GET(`posts/${params.postId}`).then((data) => setPostData(data));
  }, []);

  return (
    <>
      <div className={styles.Post}>
        <div className={styles.button}>
          <button className={styles.btn} onClick={() => navigate("/")}>
            <GrHomeRounded />
          </button>
          <button className={styles.btn} onClick={() => navigate("/users")}>
            <GrUser />
          </button>
          <button className={styles.btn} onClick={() => navigate("/posts")}>
            <GrChatOption />
          </button>
        </div>
        <PostCard postData={postData} />
      </div>
      <Outlet />
    </>
  );
}
