import React from "react";
import ReactDOM from "react-dom/client";
import Home from "./component/home/index";
import Charts from "./component/charts/index";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import './assets/styles/globall.css'
import { store } from "./app/store";
import { Provider } from "react-redux";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/charts",
    element: <Charts />,
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Provider store={store}>
      <RouterProvider router={router} />
    </Provider>
  </React.StrictMode>
);
