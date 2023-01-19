import Head from "next/head";
import React from "react";
import Footer from "../components/Footer";
import Header from "../components/Header";

function Layout({ children }) {
  return (
    <div className="wrap">
      <Header></Header>
      {children}
      <Footer></Footer>
    </div>
  );
}

export default Layout;
