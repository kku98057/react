import React from "react";
import styles from "../../../styles/components/button.module.css";
function Button({ text, onClick }) {
  return (
    <button type="button" onClick={onClick} className={styles.button}>
      <span>{text}</span>
    </button>
  );
}

export default Button;
