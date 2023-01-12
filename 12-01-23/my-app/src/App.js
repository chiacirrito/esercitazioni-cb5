import "./App.css";
import "./counter/components/layout/container.css";
/* import { Text } from "./atoms/text/Text"; */
import { useState } from "react";
import { BloodTypes } from "./counter/components/bloodTypes/BloodTypes";
import { Beers } from "./counter/components/beers/Beers";
import { CreditCards } from "./counter/components/creditCards/CreditCards";
import { Users } from "./counter/components/users/Users";
import { Banks } from "./counter/components/banks/Banks";

function ComponentSelector(props) {
  const { selectChangeHandler } = props;
  return (
    <form>
      <select defaultValue={""} onChange={selectChangeHandler}>
        <option selected disabled value="">
          Select
        </option>
        <option value="beers">Beer</option>
        <option value="bloodTypes">Blood</option>
        <option value="creditcards">Credit Card</option>
        <option value="users">Users</option>
        <option value="banks">Banks</option>
      </select>
    </form>
  );
}

export default function App() {
  const [componentToRender, setComponentToRender] = useState("default");

  const selectChangeHandler = (event) => {
    console.log({ event });
    setComponentToRender(event.target.value);
  };

  const DefaultComponent = () => <div>You haven't selected an item</div>;

  const componentMap = {
    beers: Beers,
    bloodTypes: BloodTypes,
    creditcards: CreditCards,
    users: Users,
    banks: Banks,
    default: DefaultComponent,
  };

  const DynamicComponent = componentMap[componentToRender];

  return (
    <div className="App">
      <ComponentSelector selectChangeHandler={selectChangeHandler} />
      <DynamicComponent />
    </div>
  );
}
