/** @jsxImportSource @emotion/react */
import React from "react";
import { css } from "@emotion/react";
function Header(props) {
  const st = css`
    width: 100%;
    height: 50px;
    background-color: #ffa;
  `;
  return <header css={st}></header>;
}

export default Header;
