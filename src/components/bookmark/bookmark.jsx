import React, { useState } from "react";
import styles from "./bookmark.module.css";
import Modal from "../modal/modal";

const Bookmark = () => {
  const [clickModal, setClickModal] = useState(false);

  const clickAdd = () => {
    setClickModal(true);
  };

  const onParentSave = (name, address) => {
    console.log("Bookmark : ", name, address);
  };

  const colors = [
    "#55efc4", //
    "#0984e3",
    "#4834d4",
    "#130f40",
    "#fd79a8",
    "#fdcb6e",
    "#d63031",
    "#182C61",
    "#BDC581",
    "#B33771",
  ];

  return (
    <>
      <div className={styles.bookmark}>
        <div className={styles.item}>
          <a className={styles.link} href="https://www.google.com/">
            <span className={styles.title}>Google</span>
          </a>
        </div>
        <div className={styles.item}>
          <a className={styles.link} href="https://www.naver.com/">
            <span className={styles.title}>Naver</span>
          </a>
        </div>
        <div className={styles.item}>
          <a className={styles.link} href="https://www.youtube.com/">
            <span className={styles.title}>Youtube</span>
          </a>
        </div>
        <button className={styles.addButton} onClick={clickAdd}>
          <i className="fas fa-plus fa-xs"></i>
        </button>
      </div>
      {clickModal && (
        <Modal setClickModal={setClickModal} onParentSave={onParentSave} />
      )}
    </>
  );
};

export default Bookmark;
