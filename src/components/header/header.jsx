import React from "react";
import styles from "./header.module.css";
import Time from "../time/time";
import Weather from "../weather/weather";
import SchoolSelect from "../school/schoolSelect";
import Lunch from "../school/lunch";
import Corona from "../corona/corona";

const Header = ({
  lunch,
  day,
  yoil,
  weather,
  selectLocation,
  selectedSchool,
  coronaTotal,
  coronaCountry,
}) => {
  return (
    <section className={styles.header}>
      <Weather weather={weather} />
      <Time />
      <div className={styles.right}>
        <div className={styles.select}>
          <SchoolSelect
            selectLocation={selectLocation}
            selectedSchool={selectedSchool}
          />
        </div>
      </div>
      <Corona coronaTotal={coronaTotal} coronaCountry={coronaCountry} />
      <Lunch lunch={lunch} day={day} yoil={yoil} />
    </section>
  );
};

export default Header;
