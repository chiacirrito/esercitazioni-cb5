import { useEffect } from "react";
import { useState } from "react";
import { POST } from "../../utils/http";
import "./index.css";

const NewMessage = () => {
  const [messageText, setMessageText] = useState("");
  const [authorText, setAuthorText] = useState("");
  const [titleText, setTitleText] = useState("");
  const [urlText, setUrlText] = useState("");

  const [messagePost, setMessagePost] = useState({});

  const onHandleMessageText = (e) => setMessageText(e.target.value);
  const onHandleAuthorText = (e) => setAuthorText(e.target.value);
  const onHandleTitleText = (e) => setTitleText(e.target.value);
  const onHandleUrlText = (e) => setUrlText(e.target.value);

  const onSubmit = (e) => {
    e.preventDefault();
    setMessagePost({
      id: 1,
      uderIs: 9,
      image: urlText,
      firstName: authorText,
      title: titleText,
      body: messageText,
    });
  };

  useEffect(() => {
    if (messagePost.firstName && messagePost.title)
      POST("posts/add", messagePost).then(() => console.log("post avvenuta"));
  }, [messagePost]);

  return (
    <div className="NewMessage">
      {console.log(messageText)}
      <form onSubmit={onSubmit}>
        <input
          value={authorText}
          onChange={onHandleAuthorText}
          type="text"
          placeholder="@username"
        />{" "}
        <input
          value={urlText}
          onChange={onHandleUrlText}
          type="text"
          placeholder="url img"
        />
        <input
          value={titleText}
          onChange={onHandleTitleText}
          type="text"
          placeholder="Title..."
        />
        <input
          value={messageText}
          onChange={onHandleMessageText}
          type="text"
          placeholder="Message..."
        />
        <input className="submit" type="submit" value="Send" />
      </form>
    </div>
  );
};

export default NewMessage;
