import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import { useRouter } from "next/router";
import React, { useEffect } from "react";
import Movie from "../../components/Movie";

// 여기부터다시
function SearchList(props) {
  const { query } = useRouter();
  const {
    isLoading,
    error,
    data: lists,
  } = useQuery(["lists", query.SearchResult], async () => {
    const httpClient = axios
      .create("https://yts.mx/api/v2/")
      .get("list_movies", {
        params: {
          limit: "50",
          query_term: "title",
        },
      })
      .then((res) => res.data);
  });

  return (
    <div>
      <div>{query.SearchResult}</div>
      {error && <p>에러</p>}
      {isLoading && <p>로딩중</p>}
      <ul style={{ display: "flex", flexWrap: "wrap" }}>
        {lists?.data.movies.map((list) => (
          <Movie
            key={list.id}
            title={list.title}
            src={list.large_cover_image}
          />
        ))}
      </ul>
    </div>
  );
}

export default SearchList;
