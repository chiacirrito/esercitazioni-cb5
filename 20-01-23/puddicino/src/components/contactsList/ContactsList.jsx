import { useState, useEffect } from "react";
import { GET } from "../../utils/http";
import Contact from "../contact";
import "./index.css";

const ContactsList = () => {
  const [contactsList, setContactsList] = useState([]);

  useEffect(() => {
    GET("users").then(({ users }) => setContactsList(users));
  }, []);
  return (
    <div className="ContactsList">
      {contactsList.map((contact) => (
        <Contact data={contact} key={contact.id} />
      ))}
    </div>
  );
};

export default ContactsList;
