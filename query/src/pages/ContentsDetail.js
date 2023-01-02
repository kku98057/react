import React from "react";
import { useParams } from "react-router";

function ContentsDetail(props) {
  const { contentsId } = useParams();

  return <div>{contentsId}</div>;
}

export default ContentsDetail;
