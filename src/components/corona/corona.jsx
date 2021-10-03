import React from "react";
import styles from "./corona.module.css";

const Corona = ({ coronaTotal, coronaCountry }) => {
  const {
    TotalCase, //
    TotalDeath,
    TodayDeath,
    TotalRecovered,
    TodayRecovered,
  } = coronaTotal;
  const { korea } = coronaCountry;

  return (
    <section className={styles.corona}>
      <div className={styles.case}>
        <span>확진자</span>
        <span className={styles.caseSpan}>{TotalCase}</span>
        <div className={styles.caseCount}>
          <span>{korea.newCase}↑</span>
        </div>
      </div>
      <div className={styles.death}>
        <span>사망자</span>
        <span className={styles.deathSpan}>{TotalDeath}</span>
        <div className={styles.deathCount}>
          <span>{TodayDeath}↑</span>
        </div>
      </div>
      <div className={styles.TotalRecovered}>
        <span>완치자</span>
        <span className={styles.RecoveredSpan}>{TotalRecovered}</span>
        <div className={styles.recoveredCount}>
          <span>
            {TodayRecovered.replace(/\B(?<!\.\d*)(?=(\d{3})+(?!\d))/g, ",")}↑
          </span>
        </div>
      </div>
    </section>
  );
};

export default Corona;
