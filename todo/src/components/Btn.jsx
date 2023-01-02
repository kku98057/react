import React from "react";
import useStore from "../store";
import { v4 as uuidv4 } from "uuid";
function Btn({ onAdd }) {
  const { todos, texts, setTexts } = useStore();

  const changeHanlder = (e) => {
    setTexts(e.target.value);
  };
  const submitHanlder = (e) => {
    e.preventDefault();
    onAdd({ id: uuidv4(), text: texts, status: "active" });
  };
  return (
    <form onSubmit={submitHanlder}>
      <input type="text" onChange={changeHanlder} />
      <button type="button" onClick={submitHanlder}>
        <span>추가하기</span>
      </button>
    </form>
  );
}

export default Btn;
