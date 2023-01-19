import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import Image from "next/image";
import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";

function Detail() {
  const { query } = useRouter();
  const { detail, list } = query;

  const { isLoading, error, data } = useQuery(["movieKey", detail], async () =>
    axios
      .get(`https://yts.mx/api/v2/movie_details.json?movie_id=${detail}`)
      .then((res) => res.data)
  );
  const movieData = data?.data.movie;

  const loader = () => {
    return movieData?.large_cover_image;
  };

  return (
    <div>
      {isLoading ? (
        <div>로딩중</div>
      ) : (
        <div className="detail_img" style={{ width: "50%" }}>
          <Image
            loader={loader}
            src={movieData?.large_cover_image}
            alt={movieData?.title}
            width={100}
            height={100}
          ></Image>
        </div>
      )}

      <h4></h4>
      <p></p>
    </div>
  );
}

export default Detail;
