import React from "react";
import ReactDOM from "react-dom/client";
import {
  Route,
  createBrowserRouter,
  RouterProvider,
  createRoutesFromElements,
} from "react-router-dom";
import App from "./App";
import ErrorPage from "./error-page";
import UserList from "./routes/userList";
import User from "./routes/quote";
import Post from "./routes/post";
import Posts from "./routes/posts";
import "./index.css";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route>
      <Route path="/" element={<App />} errorElement={<ErrorPage />}></Route>
      <Route
        path="/users"
        element={<UserList />}
        errorElement={<ErrorPage />}
      ></Route>
      <Route
        path="/users/:user"
        element={<User />}
        errorElement={<ErrorPage />}
      ></Route>
      <Route
        path="/posts"
        element={<Posts />}
        errorElement={<ErrorPage />}
      ></Route>
      <Route
        path="/posts/:postId"
        element={<Post />}
        errorElement={<ErrorPage />}
      ></Route>
    </Route>
  )
);

/* const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <ErrorPage />,
  },
  {
    path: "/users",
    element: <UserList />,
  },
  {
    path: "/users/:user",
    element: <User />,
  },
]); */

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={router} />);
