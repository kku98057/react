import React from "react";
import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar";

function Root(props) {
  return (
    <div>
      <Navbar></Navbar>
      <Outlet></Outlet>
    </div>
  );
}

export default Root;
