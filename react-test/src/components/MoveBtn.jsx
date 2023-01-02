/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import React from "react";

function MoveBtn(props) {
  const btn = css`
    font-size: ${(props) => props.fontSize}px;
    color: red;
  `;
  return (
    <button class="btn" type="button">
      이동
    </button>
  );
}

export default MoveBtn;
