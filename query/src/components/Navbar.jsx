import React from "react";
import { Link } from "react-router-dom";

function Navbar(props) {
  return (
    <nav>
      <Link to="/">홈</Link>
      <Link to="/contents">컨텐츠</Link>
      <Link to="/products">상품</Link>
    </nav>
  );
}

export default Navbar;
