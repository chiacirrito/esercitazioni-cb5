import { createContext } from "react";

const initialState = {
  todoList: [
    {
      id: 1,
      content: "Fare la spesa",
      status: true,
    },
    {
      id: 2,
      content: "Andare in palestra",
      status: false,
    },
    {
      id: 3,
      content: "Pulire casa",
      status: false,
    },
    {
      id: 4,
      content: "Studiare",
      status: false,
    },
    {
      id: 5,
      content: "Ape con amiche",
      status: false,
    },
  ],
};

const ApplicationCtx = createContext(initialState);
export { ApplicationCtx, initialState };
