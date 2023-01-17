import { useQuery } from "@tanstack/react-query";
import React from "react";
import Footer from "./Footer";
import Header from "./Header";

function Layout({ children }) {
  return (
    <div className="bg-pink">
      <Header></Header>
      <div className="main" style={{ minHeight: "100vh" }}>
        {children}
      </div>
      <Footer></Footer>
    </div>
  );
}

export default Layout;
