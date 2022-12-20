import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { VideogamesContextProvider } from "./context/VideogamesContext";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <VideogamesContextProvider>
      <App />
    </VideogamesContextProvider>
  </React.StrictMode>
);
