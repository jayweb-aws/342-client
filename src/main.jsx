import React from "react";
import ReactDOM from "react-dom/client";
import App from "../src/components/App";
import "./index.css";
import { RouterProvider, createBrowserRouter } from 'react-router-dom'

import Profile from "./components/Profile";
import Register from "./components/Register";
import Login from "./components/Login";
import { Provider } from "react-redux";
import store from "./components/store/store";

const router = createBrowserRouter([
  {path: "/", element:<App/>, children: [
    {index:true, element:<Login/>},
    {path:"/register", element:<Register/>},
    {path:"/profile", element:<Profile/>},
  ]}
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
      <Provider store={store}>
        <RouterProvider router={router}/>
      </Provider>
  </React.StrictMode>
);
