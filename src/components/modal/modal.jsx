import React, { useRef } from "react";
import styles from "./modal.module.css";

const Modal = ({ onParentSave, onClose }) => {
  const nameRef = useRef();
  const addRef = useRef();

  const onChildSave = () => {
    const name = nameRef.current.value;
    const address = addRef.current.value;
    onParentSave(name, address);
    onClose();
  };

  return (
    <section className={styles.modal}>
      <div className={styles.close}>
        <button onClick={onClose}>X</button>
      </div>
      <div className={styles.body}>
        <span>이름</span>
        <input ref={nameRef} type="text" placeholder="웹 사이트 제목" />
        <span>URL</span>
        <input
          ref={addRef}
          type="text"
          placeholder="웹 사이트 주소  (예시 www.google.com)"
        />
        <div className={styles.button}>
          <button onClick={onChildSave}>저장</button>
        </div>
      </div>
    </section>
  );
};

export default Modal;
