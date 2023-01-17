import { useState, useEffect } from "react";
import { GET } from "../../utils/http";
import Friend from "../friend";
import "./index.css";

const FriendList = () => {
  const [friendsList, setFriendsList] = useState([]);

  useEffect(() => {
    GET("users").then(({ users }) => setFriendsList(users));
  }, []);
  return (
    <div className="FriendList">
      {friendsList.map((friend) => (
        <Friend data={friend} key={friend.id} />
      ))}
    </div>
  );
};

export default FriendList;
