import { useRouter } from "next/router";
import React, { useEffect, useRef, useState } from "react";

import styles from "./Search.module.css";
function Search(props) {
  const [text, setText] = useState("");
  const navigate = useRouter("");
  const handleSubmit = (e) => {
    e.preventDefault();
    navigate.push({
      pathname: `/searchList/[SearchResult]`,
      query: { SearchResult: text },
    });
  };

  return (
    <form className={styles.searchForm} onSubmit={handleSubmit}>
      <input
        type="text"
        value={text}
        placeholder="검색하세요."
        onChange={(e) => {
          setText(e.target.value);
        }}
      />
      <button type="button">
        <span>검색</span>
      </button>
    </form>
  );
}

export default Search;
