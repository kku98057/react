import React, { useEffect, useState } from "react";
import Link from "next/link";
import styles from "../../styles/components/navbar.module.css";
import { BsFillPencilFill } from "react-icons/Bs";
import { login, logOut, onUserStateChange } from "../api/firebase";
import User from "./User";
import Button from "./ui/button";
import { useAuthContext } from "./context/AuthContext";

function Navbar(props) {
  const { user, login, logOut } = useAuthContext();

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
        {user && user.isAdmin && (
          <li>
            <Link href="/products/New" as="/products/new">
              <BsFillPencilFill />
            </Link>
          </li>
        )}
        {user && (
          <li>
            <User user={user} />
          </li>
        )}
        {!user && (
          <li>
            <Button onClick={login} text="Login"></Button>
          </li>
        )}
        {user && (
          <li>
            <Button onClick={logOut} text="Logout"></Button>
          </li>
        )}
      </ul>
    </div>
  );
}

export default Navbar;
