import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
// imports for redux
import { Provider } from "react-redux";
import { store } from "./redux/store";

ReactDOM.render(
  <React.StrictMode>
    {/* provider is the parent element containing the store */}
    <Provider store={store}>
      {/* all app children will access the store */}
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById("root")
);
