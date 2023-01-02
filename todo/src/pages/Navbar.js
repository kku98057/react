import React from "react";
import { Link } from "react-router-dom";

function Navbar(props) {
  return (
    <nav>
      <Link to="/">Home</Link>
      <Link to="/home2">Home2</Link>
      <Link to="/video">Video</Link>
    </nav>
  );
}

export default Navbar;
