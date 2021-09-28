import React from "react";
import styles from "./school.module.css";

const YOIL = ["일", "월", "화", "수", "목", "금", "토"];

const School = ({ lunch, day, yoil }) => {
  const lunchMenu = lunch.DDISH_NM.split("<br/>");
  const hangle = /[a-z0-9]|[ \[\]{}()<>?|`~!@#$%^&*-_+=,.;:\"'\\]/g;
  const todayMenu = lunchMenu.map((menu) =>
    menu.replace(hangle, "").replace("여중", "").replace("남중", "")
  );
  return (
    <div className={styles.school}>
      <span>
        {day} {`(${YOIL[yoil]})⭐`}
      </span>
      <span className={styles.name}>{lunch.SCHUL_NM}</span>
      <ul className={styles.menuList}>
        {todayMenu.map((menu, index) => {
          return <li key={index}>{menu}</li>;
        })}
      </ul>
    </div>
  );
};

export default School;
