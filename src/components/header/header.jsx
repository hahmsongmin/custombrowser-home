import React from "react";
import styles from "./header.module.css";
import Time from "../time/time";
import Weather from "../weather/weather";

const Header = ({ weather }) => {
  return (
    <section className={styles.header}>
      <Weather weather={weather} />
      <Time />
    </section>
  );
};

export default Header;
