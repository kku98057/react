import React from "react";
import Navbar from "./Navbar";
import { GiShop } from "react-icons/Gi";
import styles from "../../styles/components/header.module.css";
import Link from "next/link";

function Header(props) {
  return (
    <header className={styles.header}>
      <div className={`${styles.container} container`}>
        <div className={styles.inheader}>
          <Link href="/">
            <div className={styles.logo}>
              <GiShop />
              <h1>Shoppy</h1>
            </div>
          </Link>
          <Navbar></Navbar>
        </div>
      </div>
    </header>
  );
}

export default Header;
