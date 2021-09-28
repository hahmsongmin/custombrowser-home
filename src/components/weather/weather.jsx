import React, { useEffect, useState } from "react";
import styles from "./weather.module.css";

const Weather = ({ weather }) => {
  const [currentTemp, setCurrentTemp] = useState();
  const [currentIcon, setCurrentIcon] = useState();

  useEffect(() => {
    const temp = weather && Math.ceil(weather.main.temp);
    const imgURL =
      weather &&
      `http://openweathermap.org/img/w/${weather.weather[0].icon}.png`;
    setCurrentIcon(imgURL);
    setCurrentTemp(temp);
  });

  return (
    <div className={styles.weather}>
      <div className={styles.temp}>{`${currentTemp}˚C`}</div>
      <img src={currentIcon} alt="Icon" />
    </div>
  );
};

export default Weather;
