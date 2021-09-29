import React, { useEffect, useRef, useState } from "react";
import styles from "./todolist.module.css";

let buttonIcon;

const Todolist = () => {
  const checkBoxRef = useRef();
  const inputRef = useRef();

  useEffect(() => {
    checkBoxRef.current.addEventListener("click", itemClick);
    buttonIcon = document.querySelector(".fa-plus");

    return () => checkBoxRef.current.removeEventListener("click", itemClick);
  }, []);

  const onAddClick = () => {
    inputRef.current.classList.toggle(`${styles.hidden}`);
    const ok = inputRef.current.classList.contains(`${styles.hidden}`);
    if (ok) {
      buttonIcon.style.transform = `rotate(45deg)`;
    } else {
      buttonIcon.style.transform = "none";
    }
  };

  const onDelClick = () => {
    while (checkBoxRef.current.firstChild) {
      checkBoxRef.current.removeChild(checkBoxRef.current.firstChild);
    }
  };

  const itemClick = (event) => {
    if (!event.target.id) {
      return;
    }
    const target = event.path[1];
    const clickCheck = target.style.textDecoration;
    if (clickCheck === "line-through") {
      target.style.textDecoration = "none";
      target.style.color = "inherit";
    } else {
      target.style.textDecoration = "line-through";
      target.style.color = "darkgray";
    }
  };

  const onSubmit = (event) => {
    event.preventDefault();
    const inputValue = inputRef.current.childNodes[0][0].value;
    if (!inputValue) {
      return;
    }
    const listBox = document.createElement("div");
    listBox.setAttribute(
      "style",
      `display: flex; align-items: center; width: 200px; `
    );
    listBox.innerHTML = `
      <input type="checkbox" id=${inputValue} />
      <h6>${inputValue}</h6>
    `;
    checkBoxRef.current.appendChild(listBox);
    inputRef.current.childNodes[0][0].value = "";
  };

  return (
    <div className={styles.todolist}>
      <div className={styles.list}>
        <div ref={checkBoxRef} className={styles.checkboxList}></div>
      </div>
      <div ref={inputRef} className={`${styles.inputForm}`}>
        <form onSubmit={onSubmit}>
          <input type="text" placeholder="What is your main focus for today?" />
        </form>
        <button className={styles.delButton} onClick={onDelClick}>
          <i className="fas fa-recycle"></i>
        </button>
      </div>
      <button className={styles.addButton} onClick={onAddClick}>
        <i className="fas fa-plus"></i>
      </button>
    </div>
  );
};

export default Todolist;
