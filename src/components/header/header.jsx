import React from "react";
import styles from "./header.module.css";
import Time from "../time/time";
import Weather from "../weather/weather";
import SchoolSelect from "../school/schoolSelect";

const Header = ({ weather, selectLocation, selectedSchool }) => {
  return (
    <section className={styles.header}>
      <Weather weather={weather} />
      <div className={styles.right}>
        <div className={styles.select}>
          <SchoolSelect
            selectLocation={selectLocation}
            selectedSchool={selectedSchool}
          />
        </div>
        <Time />
      </div>
    </section>
  );
};

export default Header;
