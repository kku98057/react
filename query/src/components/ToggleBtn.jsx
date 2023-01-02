import React from "react";

function ToggleBtn({ toggleHanlder }) {
  return (
    <button onClick={toggleHanlder}>
      <span>Toggle</span>
    </button>
  );
}

export default ToggleBtn;
