import NewMessage from "./components/newMessage/index";
import MessagesList from "./components/messagesList/index";
import FriendList from "./components/friendsList/FriendList";
import ContactsList from "./components/contactsList";
import Button from "./components/button";
import Modal from "./components/modal/Modal";
import { useState } from "react";
import "./App.css";

function App() {
  const [isModalEnabled, setModalEnabled] = useState(false);

  const onHandleModal = () => setModalEnabled((prev) => !prev);

  return (
    <div className="App">
      <div className="friends">
        <FriendList />
      </div>
      <div className="main">
        {isModalEnabled && (
          <Modal>
            <NewMessage />
          </Modal>
        )}
        <MessagesList />
      </div>
      <div className="popular">
        <ContactsList />
      </div>
      <Button isModalEnabled={isModalEnabled} func={onHandleModal} />
    </div>
  );
}

export default App;
