import React from "react";

function Bears(props) {
  return (
    <div className="bear">
      <h1>{props.bears} around here...</h1>
      <button type="button" onClick={props.increasePopulation}>
        증가
      </button>
      <button type="button" onClick={props.removeAllBears}>
        삭제
      </button>
    </div>
  );
}

export default Bears;
