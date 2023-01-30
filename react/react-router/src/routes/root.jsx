import { useState, useEffect } from "react";

const Root = ({ data }) => {
  const [user, setUser] = useState({});

  useEffect(() => {
    fetch(`https://dummyjson.com/users`)
      .then((res) => res.json())
      .then((data) => setUser(data.users));
  }, []);

  return (
    <div className="users">
      <h3>Lista utenti</h3>
      <img src={user.image} alt={user.firstName} />
      <div className="textContent">
        <p>@{user.firstName}</p>
      </div>
    </div>
  );
};

export default Root;
