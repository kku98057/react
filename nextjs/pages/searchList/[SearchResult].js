import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import { useRouter } from "next/router";
import React, { useEffect } from "react";
import Movie from "../../components/Movie";
import Search from "../api/searchApi";
import { useMovieContext } from "../../context/SearchContext";

// https://yts.mx/api/v2/list_movies.json
// 여기부터다시
function SearchList(props) {
  const { query } = useRouter();
  const { mov } = useMovieContext();
  console.log(mov);
  const {
    isLoading,
    error,
    data: lists,
  } = useQuery(["lists", query.SearchResult], async () =>
    mov.search(query.SearchResult)
  );
  return (
    <div>
      <div className="que">{query.SearchResult}</div>
      {error && <p>에러</p>}
      {isLoading && <p>로딩중</p>}
      <ul style={{ display: "flex", flexWrap: "wrap" }}>
        {lists?.data.movies ? (
          lists?.data.movies.map((list) => (
            <Movie
              key={list.id}
              title={list.title}
              src={list.large_cover_image}
              rating={list.rating}
            />
          ))
        ) : isLoading ? (
          ""
        ) : (
          <p>결과가없습니다.</p>
        )}
      </ul>
    </div>
  );
}

export default SearchList;
