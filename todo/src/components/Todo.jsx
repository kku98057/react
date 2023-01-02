import React from "react";
import styles from "../pages/home.module.css";
import { FaTrashAlt } from "react-icons/fa";
function Todo({ ondelete, id, list, onUpdate, filter }) {
  const { text, status } = list;
  const handleChange = (e) => {
    const status = e.target.checked ? "complete" : "active";
    onUpdate({ ...list, status });
  };

  const handleDelete = () => ondelete(list);

  return (
    <li>
      <div className={styles.data}>
        <input
          type="checkbox"
          name=""
          id={`list_${id}`}
          checked={status === `complete`}
          onChange={handleChange}
        />
        <label htmlFor={`list_${id}`}>
          <p>{list.do}</p>
        </label>
      </div>
      <button type="button" className={styles.delete} onClick={handleDelete}>
        <span>
          <FaTrashAlt />
        </span>
      </button>
    </li>
  );
}

export default Todo;
