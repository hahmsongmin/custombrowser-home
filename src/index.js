import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import "@fortawesome/fontawesome-free/js/all.js";
import App from "./app";
import WeatherApi from "./openApi/weatherApi";
import SchoolLunch from "./openApi/schoolLunch";

const weatherApi = new WeatherApi(process.env.REACT_APP_WEATHER_API_KEY);
const schoolLunch = new SchoolLunch(process.env.REACT_APP_SCHOOL_API_KEY);

ReactDOM.render(
  <React.StrictMode>
    <App weatherApi={weatherApi} schoolLunch={schoolLunch} />
  </React.StrictMode>,
  document.getElementById("root")
);
