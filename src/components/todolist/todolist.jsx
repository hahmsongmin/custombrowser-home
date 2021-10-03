import React, { useEffect, useRef, useState } from "react";
import styles from "./todolist.module.css";

let buttonIcon;

const Todolist = () => {
  const checkBoxRef = useRef();
  const inputRef = useRef();
  const addButtonRef = useRef();

  useEffect(() => {
    checkBoxRef.current.addEventListener("click", itemClick);
    buttonIcon = document.querySelector(".fa-plus");
  }, []);

  const boxCheck = (value) => {
    checkBoxRef.current.childNodes.forEach((child) => {
      if (child.childNodes[1].checked) {
        child.childNodes[1].style.pointerEvents = value;
      }
    });
  };

  const onAddClick = () => {
    inputRef.current.classList.toggle(`${styles.visible}`);
    const ok = inputRef.current.classList.contains(`${styles.visible}`);
    if (ok) {
      addButtonRef.current.classList.add(`${styles.rotate}`);
      boxCheck("none");
    } else {
      addButtonRef.current.classList.remove(`${styles.rotate}`);
      buttonIcon.style.transform = "";
      boxCheck("auto");
    }
  };

  const onSelDelClick = () => {
    checkBoxRef.current.childNodes.forEach((child) => {
      if (child.childNodes[1].checked) {
        child.remove();
      }
    });
  };

  const onAllDelClick = () => {
    while (checkBoxRef.current.firstChild) {
      checkBoxRef.current.removeChild(checkBoxRef.current.firstChild);
    }
  };

  const itemClick = (event) => {
    if (!event.target.id) {
      return;
    }
    const ok = inputRef.current.classList.contains(`${styles.visible}`);
    if (!ok) {
      const target = event.path[1];
      const clickCheck = target.style.textDecoration;
      if (clickCheck === "line-through") {
        target.style.textDecoration = "none";
        target.style.color = "inherit";
      } else {
        target.style.textDecoration = "line-through";
        target.style.color = "darkgray";
      }
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
      `display:flex; align-items:center; width: 450px;`
    );
    listBox.innerHTML = `
      <input type="checkbox" id=${inputValue} style="transform:scale(1.5);" />
      <h4>${inputValue}</h4>
    `;
    checkBoxRef.current.appendChild(listBox);
    inputRef.current.childNodes[0][0].value = "";
  };

  return (
    <div className={styles.container}>
      <div className={styles.title}>✔Today</div>
      <div className={styles.todolist}>
        <div className={styles.list}>
          <div ref={checkBoxRef} className={styles.checkboxList}></div>
        </div>
        <div ref={inputRef} className={`${styles.inputForm}`}>
          <form onSubmit={onSubmit}>
            <input
              type="text"
              placeholder="What is your main focus for today?"
            />
          </form>
          <button className={styles.selectDelButton} onClick={onSelDelClick}>
            <i className="fas fa-trash"></i>
          </button>
          <button className={styles.allDelButton} onClick={onAllDelClick}>
            <i className="fas fa-recycle"></i>
          </button>
        </div>
        <button
          ref={addButtonRef}
          className={styles.addButton}
          onClick={onAddClick}
        >
          <i className="fas fa-plus"></i>
        </button>
      </div>
    </div>
  );
};

export default Todolist;
