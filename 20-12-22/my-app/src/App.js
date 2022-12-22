import "./App.css";
import "./components/layout/container.css";
import { Button } from "./atoms/Button.jsx";
import { Button2 } from "./atoms/Button.jsx";
import { Button3 } from "./atoms/Button.jsx";
import { Text } from "./atoms/text/Text";
import { Header } from "./components/layout/container.jsx";
import { Footer } from "./components/layout/container.jsx";

export default function App() {
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
      {Header({ Header })}
      <Text as="h1" variant="title">
        Hello world!
      </Text>
      <section className="button">
        {Button2({ button2 })}
        {Button3({ button3 })}
        <Button {...propsButton2} />
        <Button variant="primary">❤</Button>
      </section>
      <section className="footer">{Footer({ Footer })}</section>
    </div>
  );
}
