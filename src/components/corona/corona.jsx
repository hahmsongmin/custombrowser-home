import React from 'react';
import styles from './corona.module.css';

const Corona = ({ coronaTotal, coronaCountry }) => {
  const { korea } = coronaCountry;

  return (
    <>
      {coronaTotal && coronaCountry && (
        <section className={styles.corona}>
          <div className={styles.case}>
            <span>확진자</span>
            <span className={styles.caseSpan}>{coronaTotal.TotalCase}</span>
            <div className={styles.caseCount}>
              <span>{korea.newCase}↑</span>
            </div>
          </div>
          <div className={styles.death}>
            <span>사망자</span>
            <span className={styles.deathSpan}>{coronaTotal.TotalDeath}</span>
            <div className={styles.deathCount}>
              <span>{coronaTotal.TodayDeath}↑</span>
            </div>
          </div>
          <div className={styles.TotalRecovered}>
            <span>완치자</span>
            <span className={styles.RecoveredSpan}>{coronaTotal.TotalRecovered}</span>
            <div className={styles.recoveredCount}>
              <span>{coronaTotal.TodayRecovered.replace(/\B(?<!\.\d*)(?=(\d{3})+(?!\d))/g, ',')}↑</span>
            </div>
          </div>
        </section>
      )}
    </>
  );
};

export default Corona;
