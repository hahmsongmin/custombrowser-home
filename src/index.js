import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import "@fortawesome/fontawesome-free/js/all.js";
import App from "./app";
import Weather from "./openApi/weather";
import School from "./openApi/school";
import Corona from "./openApi/corona";

const weatherApi = new Weather(process.env.REACT_APP_WEATHER_API_KEY);
const school = new School(process.env.REACT_APP_SCHOOL_API_KEY);
const corona = new Corona(process.env.REACT_APP_CORONA_API_KEY);

ReactDOM.render(
  <React.StrictMode>
    <App weatherApi={weatherApi} school={school} corona={corona} />
  </React.StrictMode>,
  document.getElementById("root")
);
