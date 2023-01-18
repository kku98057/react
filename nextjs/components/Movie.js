import React from "react";
import Image from "next/image";
import styles from "./Movie.module.css";
function Movie({ title, src, rating }) {
  return (
    <li className={styles.list}>
      <Image width={100} height={100} alt={title} src={src}></Image>
      <h3>{title}</h3>
      <span>{rating}</span>
    </li>
  );
}

export default Movie;
