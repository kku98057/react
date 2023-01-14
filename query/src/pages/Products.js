import React, { useEffect, useState } from "react";
import Product from "../components/Product";
import ToggleBtn from "../components/ToggleBtn";

function Products(props) {
  const [show, setShow] = useState(true);
  const [show2, setShow2] = useState(true);

  return (
    <div className="products_wrap" style={{ display: "flex" }}>
      <div>
        <ToggleBtn
          toggleHanlder={() => {
            setShow((prev) => !prev);
          }}
        />
        {show && <Product id="check" />}
      </div>
      <div>
        <ToggleBtn
          toggleHanlder={() => {
            setShow2((prev) => !prev);
          }}
        />
        {show2 && <Product id="check2" />}
      </div>
    </div>
  );
}

export default Products;
