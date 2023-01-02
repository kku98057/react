import React, { useEffect, useState } from "react";
import Product from "../components/Product";
import ToggleBtn from "../components/ToggleBtn";

function Products(props) {
  const [show, setShow] = useState(true);
  const toggleHanlder = () => {
    setShow((prev) => !prev);
  };
  return (
    <div className="products_wrap">
      <ToggleBtn toggleHanlder={toggleHanlder} />
      {show && <Product />}
    </div>
  );
}

export default Products;
