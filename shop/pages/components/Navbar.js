import React from "react";
import Link from "next/link";
import styles from "../../styles/components/navbar.module.css";
import { BsFillPencilFill } from "react-icons/Bs";
import { login } from "../api/firebase";

function Navbar(props) {
  return (
    <div className={styles.nav}>
      <ul>
        <li>
          <Link href="/products/AllProducts" as="/products">
            Products
          </Link>
        </li>
        <li>
          <Link href="/carts/MyCarts" as="/cart">
            Carts
          </Link>
        </li>
        <li>
          <Link href="/products/new/[id]">
            <BsFillPencilFill />
          </Link>
        </li>
        <li>
          <button type="button" onClick={login}>
            <span>login</span>
          </button>
        </li>
      </ul>
    </div>
  );
}

export default Navbar;
