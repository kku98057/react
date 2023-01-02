import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

function Video(props) {
  const [text, setText] = useState("");
  const navigator = useNavigate();
  const handleChange = (e) => {
    setText(e.target.value);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    navigator(`/video/${text}`);
    setText("");
  };
  return (
    <form onSubmit={handleSubmit}>
      <input type="text" onChange={handleChange} />
    </form>
  );
}

export default Video;
