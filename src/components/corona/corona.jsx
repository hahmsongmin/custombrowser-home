import React from "react";
import styles from "./corona.module.css";

const Corona = ({ coronaTotal, coronaCountry }) => {
  console.log(coronaTotal, coronaCountry);
  const { TotalCase, TotalDeath, TodayDeath, TotalRecovered, TodayRecovered } =
    coronaTotal;
  const {
    korea,
    seoul,
    busan,
    daegu,
    incheon,
    gwangju,
    daejeon,
    ulsan,
    sejong,
    gyeonggi,
    gangwon,
    chungbuk,
    chungnam,
    jeonbuk,
    jeonnam,
    gyeongbuk,
    gyeongnam,
    jeju,
    quarantine,
  } = coronaCountry;

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
          <span>{TodayRecovered}↑</span>
        </div>
      </div>
    </section>
  );
};

export default Corona;
