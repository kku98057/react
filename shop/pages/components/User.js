import Image from "next/image";
import React from "react";
import styles from "../../styles/components/user.module.css";
function User({ user: { photoURL, displayName } }) {
  const loader = () => {
    return photoURL;
  };
  return (
    <div className={styles.user}>
      <div
        className={styles.img}
        style={{ width: "25px", position: "relative" }}
      >
        <Image src={photoURL} loader={loader} fill alt="imgff"></Image>
      </div>
      <p>{displayName}</p>
    </div>
  );
}

export default User;
