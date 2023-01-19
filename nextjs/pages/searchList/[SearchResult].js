import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import { useRouter } from "next/router";
import React, { useEffect } from "react";
import Movie from "../../components/Movie";
import Search from "../api/searchApi";
import { useMovieContext } from "../../context/SearchContext";

// https://yts.mx/api/v2/list_movies.json

function SearchList(props) {
  const { query } = useRouter();
  const { mov } = useMovieContext();
  const searchResult = query.SearchResult;

  const {
    isLoading,
    error,
    data: lists,
  } = useQuery(["lists", searchResult], async () => mov.search(searchResult));
  return (
    <div>
      {error && <p>에러</p>}
      {isLoading && (
        <div
          style={{
            width: "100%",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            height: "100vh",
          }}
        >
          <p>로딩중.</p>
        </div>
      )}
      <ul style={{ display: "flex", flexWrap: "wrap" }}>
        {lists?.data.movies ? (
          lists?.data.movies.map((list) => (
            <Movie
              key={list.id}
              title={list.title}
              src={list.large_cover_image}
              rating={list.rating}
              link={searchResult}
              id={list.id}
              list={list}
            />
          ))
        ) : isLoading ? (
          ""
        ) : (
          <div
            style={{
              width: "100%",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              height: "100vh",
            }}
          >
            <p>결과가없습니다.</p>
          </div>
        )}
      </ul>
    </div>
  );
}

export default SearchList;
