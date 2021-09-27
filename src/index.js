import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import "@fortawesome/fontawesome-free/js/all.js";
import App from "./app";
import Api from "./openApi/commonApi";

const myApi = new Api(process.env.REACT_APP_WEATHER_API_KEY);

ReactDOM.render(
  <React.StrictMode>
    <App myApi={myApi} />
  </React.StrictMode>,
  document.getElementById("root")
);
