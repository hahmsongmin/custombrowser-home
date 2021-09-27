import React, { useEffect, useState } from "react";
import styles from "./time.module.css";

const Time = () => {
  const [currentH, setCurrentH] = useState();
  const [currentM, setCurrentM] = useState();

  const getClock = () => {
    const date = new Date();
    const hours = String(date.getHours()).padStart(2, "0");
    const minutes = String(date.getMinutes()).padStart(2, "0");
    setCurrentH(hours);
    setCurrentM(minutes);
  };
  setInterval(() => {
    getClock();
  }, 1000);

  useEffect(() => {
    getClock();
  }, []);

  return <div className={styles.time}>{`${currentH}:${currentM}`}</div>;
};

export default Time;
