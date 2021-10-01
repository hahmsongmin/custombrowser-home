import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import "@fortawesome/fontawesome-free/js/all.js";
import App from "./app";
import WeatherApi from "./openApi/weatherApi";
import School from "./openApi/school";

const weatherApi = new WeatherApi(process.env.REACT_APP_WEATHER_API_KEY);
const school = new School(process.env.REACT_APP_SCHOOL_API_KEY);

ReactDOM.render(
  <React.StrictMode>
    <App weatherApi={weatherApi} school={school} />
  </React.StrictMode>,
  document.getElementById("root")
);
