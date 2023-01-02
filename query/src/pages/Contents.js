import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router";

function Contents(props) {
  const [text, setText] = useState("");
  const navigate = useNavigate("");
  const textChange = (e) => {
    setText(e.target.value);
  };
  const submitHandler = (e) => {
    e.preventDefault();
    navigate(`/contents/${text}`);
    setText("");
  };

  return (
    <form onSubmit={submitHandler}>
      <p>입력하셈요</p>
      <input type="text" onChange={textChange} />
    </form>
  );
}

export default Contents;
