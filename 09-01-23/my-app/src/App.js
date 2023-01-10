import "./App.css";
import "./components/layout/container.css";
import { Button2 } from "./atoms/Button.jsx";
import { Button } from "./atoms/Button.jsx";
import { Text } from "./atoms/text/Text";
import { Header } from "./components/layout/container.jsx";
import { Footer } from "./components/layout/container.jsx";
import { useState } from "react";

function TodoItem(props) {
  const { children } = props;
  const [isDone, setIsDone] = useState(false);

  return (
    <li>
      {isDone ? "👌" : "🙅"}
      <span>{children}</span>
      <button onClick={() => setIsDone((val) => !val)}> ✅ </button>
    </li>
  );
}

function TodoList() {
  const items = [
    { label: " - Studiare React " },
    { label: " - Pulire casa " },
    { label: " - Comprare il pane " },
  ];

  return (
    <div>
      <h3>To Do List</h3>
      <ul>
        {items.map((item, index) => (
          <TodoItem key={index}>{item.label}</TodoItem>
        ))}
      </ul>
    </div>
  );
}

function Input(props) {
  const { label = "", type = "text", ...attributes } = props;

  if (type === "textarea") {
    return (
      <label>
        <span>{label}</span>
        <textarea {...attributes}></textarea>
      </label>
    );
  }
  return (
    <label>
      <span>{label}</span>
      <input type={type} {...attributes} />
    </label>
  );
}

export default function App() {
  const button2 = {
    label: "Show",
    title: "title3",
  };

  return (
    <div className="App">
      {Header({ Header })}
      <Text as="h1" variant="title">
        Hello!
      </Text>

      <form className="form">
        <Input label={"To Do"} type="textarea" />
        <Button type="submit">Invia</Button>
      </form>
      <div className="list">
        <TodoList />
      </div>
      <section className="footer">
        {Button2({ button2 })}
        {Footer({ Footer })}
      </section>
    </div>
  );
}
