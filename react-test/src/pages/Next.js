/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import React, { useEffect, useLayoutEffect, useRef } from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import MoveBtn from "../components/MoveBtn";
import "./next.css";
gsap.registerPlugin(ScrollTrigger);

function Next(props) {
  const tt = css`
    font-size: 25px;
    color: hotpink;
  `;

  const container = css`
    width: 100%;
    height: 100vh;
    display: flex;
    align-items: center;
    justify-content: center;
  `;

  return (
    <div className="nextwrap">
      <div css={container}>
        <h1>안녕</h1>
        <MoveBtn></MoveBtn>
      </div>
    </div>
  );
}

export default Next;
