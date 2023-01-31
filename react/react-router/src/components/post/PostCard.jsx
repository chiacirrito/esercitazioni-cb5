import { useNavigate } from "react-router-dom";
import styles from "./index.module.scss";

const PostCard = ({ postData }) => {
  const navigate = useNavigate();

  const { id, title, body } = postData;

  const onHandleClick = () => navigate(`/posts/${id}`);

  return (
    <div onMouseUp={onHandleClick} className={styles.Post}>
      {id ? (
        <>
          {" "}
          <h3>{title}</h3>
          <h4>{body}</h4>
        </>
      ) : (
        <p> Loading... </p>
      )}
    </div>
  );
};

export default PostCard;
