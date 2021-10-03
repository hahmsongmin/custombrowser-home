import React from "react";
import styles from "./schoolSelect.module.css";

const SchoolSelect = ({ selectLocation, selectedSchool }) => {
  return (
    <form className={styles.select} onSubmit={selectedSchool}>
      <select
        onChange={selectLocation}
        name="locations"
        className={styles.option}
      >
        <option value="">시도교육청을 선택해주세요 :</option>
        <option value="B10">서울특별시</option>
        <option value="C10">부산광역시</option>
        <option value="D10">대구광역시</option>
        <option value="E10">인천광역시</option>
        <option value="F10">광주광역시</option>
        <option value="G10">대전광역시</option>
        <option value="H10">울산광역시</option>
        <option value="J10">경기도</option>
        <option value="K10">강원도</option>
        <option value="M10">충청북도</option>
        <option value="N10">충청남도</option>
        <option value="P10">전라북도</option>
        <option value="Q10">전라남도</option>
        <option value="R10">경상북도</option>
        <option value="S10">경상남도</option>
        <option value="T10">제주특별시</option>
      </select>
      <input
        className={styles.schoolInput}
        type="text"
        placeholder="학교를입력해주세요"
      />
    </form>
  );
};

export default SchoolSelect;
