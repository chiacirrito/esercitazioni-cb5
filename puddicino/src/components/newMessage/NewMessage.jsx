import { useState } from "react";
import { POST } from "../../utils/http";
import "./index.css";

const NewMessage = () => {
  const [messageText, setMessageText] = useState("");
  const [posts, setPosts] = useState([]);
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");

  const handleSubmit = (e) => {
    fetch("https://dummyjson.com/posts/add", {
      method: "POST",
      body: JSON.stringify({
        title: title,
        body: body,
        userId: Math.random().toString(36).slice(2),
      }),
      headers: {
        "Content-Type": "application/json; charset=UTF-8",
      },
    })
      .then((res) => res.json())
      .then((post) => {
        setPosts((posts) => [post, ...posts]);
        setTitle("");
        setBody("");
      })

      .catch((err) => {
        console.log(error);
      });
  };

  const onHandleInput = (e) => setMessageText(e.target.value);

  const onSubmit = (e) => {
    e.preventDefault();
    console.log(messageText);
  };

  return (
    <div className="NewMessage">
      {console.log(messageText)}
      <form onSubmit={onSubmit}>
        <input
          value={messageText}
          onChange={onHandleInput}
          type="text"
          placeholder="@Username"
        />
        <input
          value={messageText}
          onChange={onHandleInput}
          type="text"
          placeholder="Title"
        />
        <input
          value={messageText}
          onChange={onHandleInput}
          type="text"
          placeholder="Text"
        />

        <input type="submit" value="Send" />
      </form>
    </div>
  );
};

export default NewMessage;
