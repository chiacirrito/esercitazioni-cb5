import styles from "./App.module.scss";
import AddNote from "./components/addNote/AddNote";
import Navbar from "./components/navbar/Navbar";
import Login from "./components/login/Login";
import NoteContent from "./components/noteContent/NoteContent";
import { createContext, useReducer } from "react";

const initialState = {
  noteList: [
    {
      id: 1,
      title: "I pezzi di Lello",
      content: "Non cancello mai le persone, smetto di colorarle",
    },
    { id: 2, title: "Tremacarne", content: "Qui sento odore di manicomio" },
    {
      id: 3,
      title: "Il poeta grigio e rosso",
      content: "Non è ovunque che si può fiorire",
    },
  ],
  user: {
    username: localStorage.getItem("Note-app-username"),
  },
};

const ApplicationCtx = createContext(initialState);
const globalReducer = (state, action) => {
  switch (action.type) {
    case "ADD_NEW_NOTE":
      return {
        ...state,
        noteList: [...state.noteList, action.payload],
      };
    case "SET_USERNAME":
      return {
        ...state,
        user: {
          ...state.user,
          username: action.payload,
        },
      };
    default:
      return state;
  }
};

function App() {
  const [state, dispatch] = useReducer(globalReducer, initialState);

  return (
    <div className={styles.App}>
      <ApplicationCtx.Provider value={{ state, dispatch }}>
        {!state.user.username && !localStorage.getItem("Note-app-username") ? (
          <Login />
        ) : (
          <>
            <Navbar />
            <main>
              <AddNote />
              <NoteContent />
            </main>
          </>
        )}
      </ApplicationCtx.Provider>
    </div>
  );
}

export { ApplicationCtx };
export default App;
