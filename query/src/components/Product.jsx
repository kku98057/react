import React, { useEffect, useState } from "react";
import useProducts from "../hooks/use-products";

function Product(props) {
  const [check, setCheck] = useState(false);
  const [loading, error, products] = useProducts({ salesOnly: check });

  const handleChange = (e) => {
    setCheck((perv) => !perv);
  };
  if (loading) return <p>로딩중..</p>;
  if (error) return <p>에러</p>;
  return (
    <>
      <form action="">
        <input
          type="checkbox"
          id="sale"
          onChange={handleChange}
          value={check}
        />
        <label htmlFor="sale">sale상품보기</label>
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
