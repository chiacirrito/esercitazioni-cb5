import "./App.css";
import { Button } from "./components/Button.jsx";
import { Button2 } from "./components/Button.jsx";
import { Button3 } from "./components/Button.jsx";

export default function App() {
  const propsButton1 = {
    label: "Function Button",
    title: "Sono un title1",
  };

  const propsButton2 = {
    label: "Non premere",
    title: "Sono un title2",
  };

  const button2 = {
    label: "Show",
    title: "title3",
  };

  const button3 = {
    label: "Here",
    title: "title4",
  };

  return (
    <div className="App">
      {/* <Text variant="title">Hello World!</Text> */}
      <h1>Hello</h1>
      {Button2({ button2 })}
      {Button3({ button3 })}
      <Button {...propsButton2} />
      <Button variant="primary">Non premere!</Button>
    </div>
  );
}
