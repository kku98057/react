import React, { useState } from "react";
import { FaTrashAlt } from "react-icons/fa";
import style from "./list.module.css";
function List({ todo, id, onDelete, onUpdate }) {
  const { text, status } = todo;
  const changeHandler = (e) => {
    const status = e.target.checked ? "complete" : "active";
    onUpdate({ ...todo, status });
  };
  return (
    <li className={style.list}>
      <div className={style.texts}>
        <input
          type="checkbox"
          id={id}
          onChange={changeHandler}
          checked={status === "complete"}
        />
        <label htmlFor={id}>{todo.text}</label>
      </div>
      <div
        className={style.delete}
        onClick={() => {
          onDelete(todo);
        }}
      >
        <FaTrashAlt />
      </div>
    </li>
  );
}

export default List;
