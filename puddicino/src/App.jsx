import "./App.css";
import NewMessage from "./components/newMessage/index";
import MessagesList from "./components/messagesList/index";

function App() {
  return (
    <div className="App">
      <section className="header">
        <h3>Fake Twitter</h3>
        <h5>Puddicino</h5>
      </section>
      <NewMessage />
      <MessagesList />
    </div>
  );
}

export default App;
