import React, { useEffect, useState } from "react";
import styles from "./weather.module.css";

const Weather = ({ weather }) => {
  const [currentTemp, setCurrentTemp] = useState();

  useEffect(() => {
    const temp = weather && Math.ceil(weather.main.temp);
    setCurrentTemp(temp);
  });

  return <div className={styles.weather}>{`${currentTemp}˚C`}</div>;
};

export default Weather;
