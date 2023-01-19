import Head from "next/head";
import React from "react";

function CoustomHead({ title, src, des }) {
  return (
    <Head>
      <title>{title}</title>
      <meta name="description" content={des || "설명란"} />
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <link rel="icon" href="/favicon.ico" />
    </Head>
  );
}

export default CoustomHead;
