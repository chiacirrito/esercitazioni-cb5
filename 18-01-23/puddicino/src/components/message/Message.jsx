import { useState, useEffect } from "react";
import { GET } from "../../utils/http";
import "./index.css";

const Message = ({ data }) => {
  const [user, setUser] = useState({});

  useEffect(() => {
    GET(`users/${data.userId}`).then((user) => setUser(user));
  }, []);

  return (
    <div className="Message">
      <img src={user.image} alt={user.firstName} />
      <div className="Message__textContent">
        <p>@{user.firstName}</p>
        <h5>{data.title}</h5>
        <h5>Reactions : {data.reactions}</h5>
        <p>{data.body}</p>
      </div>
    </div>
  );
};

export default Message;
