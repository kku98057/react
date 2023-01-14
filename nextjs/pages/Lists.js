import { useQuery } from "@tanstack/react-query";

import React, { useEffect } from "react";
import Layout from "../components/Layout";
import ListsCard from "./ListsCard";
// https://yts.mx/api/v2/list_movies.json
// http://www.grac.or.kr/WebService/GameSearchSvc.asmx
function Lists(props) {
  const {
    isLoading,
    error,
    data: lists,
  } = useQuery(["lists"], async () =>
    fetch("https://yts.mx/api/v2/list_movies.json").then((res) => res.json())
  );

  return (
    <Layout>
      <ul style={{ display: "flex", flexWrap: "wrap", gap: "20px" }}>
        {lists?.data.movies.map((li) => (
          <ListsCard
            key={li.id}
            src={li.background_image}
            des={li.description_full}
            title={li.title}
          />
        ))}
      </ul>
    </Layout>
  );
}

export default Lists;
