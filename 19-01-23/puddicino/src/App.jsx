import NewMessage from "./components/newMessage/index";
import MessagesList from "./components/messagesList/index";
import FriendList from "./components/friendsList/FriendList";
import ContactsList from "./components/contactsList";
import Button from "./components/button";
import Modal from "./components/modal/Modal";
import FriendContent from "./components/friendContent";
import { useState } from "react";
import "./App.css";

function App() {
  const [isModalEnabled, setModalEnabled] = useState(false);
  const [modalContent, setModalContent] = useState("NewMessage");

  const onHandleModal = () => {
    setModalEnabled((prev) => !prev);
    setModalContent("NewMessage");
  };

  return (
    <div className="App">
      <div className="friends">
        <FriendList
          setModalContent={setModalContent}
          setModalEnabled={setModalEnabled}
        />
      </div>
      <div className="main">
        {isModalEnabled && (
          <Modal setModalEnabled={setModalEnabled}>
            {modalContent === "NewMessage" ? (
              <NewMessage setModalEnabled={setModalEnabled} />
            ) : (
              <FriendContent friendId={modalContent} />
            )}
          </Modal>
        )}
        <MessagesList />
      </div>
      <div className="popular">
        <ContactsList />
      </div>
      <Button
        isModalEnabled={isModalEnabled}
        setModalContent={setModalContent}
        func={onHandleModal}
      />
    </div>
  );
}

export default App;
