import React, { useEffect, useState } from "react";

import { useQuery } from "@tanstack/react-query";

function Product({ id }) {
  const [check, setCheck] = useState(false);
  const {
    isLoading,
    error,
    data: products,
  } = useQuery(
    ["products", check],
    async () => {
      console.log("fetching");
      return fetch(`/products${check ? "_sale" : ""}.json`).then((res) =>
        res.json()
      );
    },
    { staleTime: 1000 * 60 * 5 }
  );

  const handleChange = (e) => {
    setCheck((perv) => !perv);
  };
  if (isLoading) return <p>로딩중..</p>;
  if (error) return <p>에러</p>;
  console.log(products);
  return (
    <>
      <form>
        <input type="checkbox" id={id} onChange={handleChange} value={check} />
        <label htmlFor={id}>sale상품보기</label>
      </form>
      <ul>
        {products.map((list) => (
          <li key={`list_${list.name}`}>
            <p>이름 : {list.name}</p>
            <p>가격 : {list.price}</p>
          </li>
        ))}
      </ul>
    </>
  );
}

export default Product;
