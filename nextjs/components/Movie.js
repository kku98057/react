import React from "react";
import Image from "next/image";
import styles from "./Movie.module.css";

import { useRouter } from "next/router";

function Movie({ title, src, rating, id, list, link }) {
  const route = useRouter();
  const goDetail = () => {
    route.push({
      pathname: `/detail/[detail]`,
      query: { detail: id, list },
    });
  };
  return (
    <li className={styles.list} onClick={goDetail}>
      <Image width={100} height={100} alt={title} src={src}></Image>
      <h3>{title}</h3>
      <span>{rating}</span>
    </li>
  );
}

export default Movie;
