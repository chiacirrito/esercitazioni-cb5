import { useState, useEffect } from "react";
import { GET } from "../../utils/http";
import "./index.css";

const FriendContent = ({ friendId }) => {
  const [friendData, setFriendData] = useState({});

  useEffect(() => {
    GET(`users/${friendId}`).then((friend) => setFriendData(friend));
  }, []);

  const { image, birthDate } = friendData;
  return (
    <div className="FriendContent">
      <img src={image} alt={birthDate} />
      <h3>{birthDate}</h3>
    </div>
  );
};

export default FriendContent;
