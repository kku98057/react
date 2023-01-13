import Image from "next/image";
import React from "react";
import styles from "./ListsCard.module.css";

function ListsCard({ title, src, des }) {
  const loader = (src) => {
    console.log(src, src.width);
    return src.src ? src.src : src;
  };

  return (
    <li className={styles.card}>
      <Image
        loader={loader}
        src={src}
        alt={`${title}_alt`}
        width={100}
        height={100}
      />

      <h1>{title}</h1>
      <p>{des}</p>
    </li>
  );
}

export default ListsCard;
