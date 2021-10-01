import React from "react";
import styles from "./lunch.module.css";

const YOIL = ["일", "월", "화", "수", "목", "금", "토"];

const Lunch = ({ lunch, day, yoil }) => {
  const lunchMenu = lunch && lunch.DDISH_NM.split("<br/>");
  const hangle = /[a-z0-9]|[ \[\]{}()<>?|`~!@#$%^&*-_+=,.;:\"'\\]/g;
  const todayMenu =
    lunchMenu &&
    lunchMenu.map((menu) =>
      menu
        .replace(hangle, "")
        .replace("여중", "")
        .replace("남중", "")
        .replace("건강식단", "")
    );
  return (
    <div className={styles.lunch}>
      {todayMenu ? (
        <>
          <span>
            {day} {`(${YOIL[yoil]})`}
          </span>
          <span className={styles.name}>{lunch.SCHUL_NM}</span>
          <ul className={styles.menuList}>
            {todayMenu.map((menu, index) => {
              return <li key={index}>{menu}</li>;
            })}
          </ul>
        </>
      ) : (
        <p>❗급식정보가없습니다</p>
      )}
    </div>
  );
};

export default Lunch;
