import "./App.css";
import NewMessage from "./components/newMessage/index";
import MessagesList from "./components/messagesList/index";
import FriendList from "./components/friendsList/FriendList";

function App() {
  return (
    <div className="App">
      {/*  <section className="header">
        <h3>Fake Twitter</h3>
        <h5>Puddicino</h5> 
      </section>*/}
      <div className="friends">
        <FriendList />
      </div>
      <div className="main">
        <NewMessage />
        <MessagesList />
      </div>
    </div>
  );
}

export default App;
