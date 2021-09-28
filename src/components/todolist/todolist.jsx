import React, { useRef, useState } from "react";
import styles from "./todolist.module.css";

const Todolist = () => {
  const inputRef = useRef();
  const [todoInput, setTodoInput] = useState();

  const onClick = () => {
    inputRef.current.classList.toggle(`${styles.hidden}`);
  };

  const onSubmit = (event) => {
    event.preventDefault();
    const inputValue = inputRef.current.childNodes[0][0].value;
    setTodoInput(inputValue);
  };

  return (
    <div className={styles.todolist}>
      <div>{todoInput}</div>
      <div ref={inputRef} className={`${styles.inputForm}`}>
        <form onSubmit={onSubmit}>
          <input type="text" />
        </form>
      </div>
      <button className={styles.button} onClick={onClick}>
        <i className="fas fa-plus"></i>
      </button>
    </div>
  );
};

export default Todolist;
