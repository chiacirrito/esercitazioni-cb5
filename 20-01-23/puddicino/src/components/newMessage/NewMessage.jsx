import { useEffect } from "react";
import { useState } from "react";
import { POST } from "../../utils/http";
import "./index.css";

const NewMessage = ({ setModalEnabled }) => {
  const [messageText, setMessageText] = useState("");
  const [authorText, setAuthorText] = useState("");

  const [messagePost, setMessagePost] = useState({});

  const onHandleMessageText = (e) => setMessageText(e.target.value);
  const onHandleAuthorText = (e) => setAuthorText(e.target.value);

  const onSubmit = (e) => {
    e.preventDefault();
    setMessagePost({
      id: 1,
      uderIs: 9,
      firstName: authorText,
      body: messageText,
    });
    setModalEnabled(false);
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
          value={messageText}
          onChange={onHandleMessageText}
          type="text"
          placeholder="Message..."
          className="input_txt"
        />
        <input className="submit" type="submit" value="Send" />
      </form>
    </div>
  );
};

export default NewMessage;
