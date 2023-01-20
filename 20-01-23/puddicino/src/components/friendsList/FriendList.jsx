import { useState, useEffect } from "react";
import { GET } from "../../utils/http";
import Friend from "../friend";
import "./index.css";

const FriendList = ({ setModalContent, setModalEnabled }) => {
  const [friendsList, setFriendsList] = useState([]);

  useEffect(() => {
    GET("users").then(({ users }) => setFriendsList(users));
  }, []);
  return (
    <div className="FriendList">
      {friendsList.map((friend) => (
        <Friend
          data={friend}
          setModalContent={setModalContent}
          setModalEnabled={setModalEnabled}
          key={friend.id}
        />
      ))}
    </div>
  );
};

export default FriendList;
