import React, { useState } from "react";
import ProtectedRoute from "../ProtectedRoute";
import Button from "../components/ui/Button";
import Image from "next/image";
import { uploadImage } from "../api/uploader";
import { addNewProduct } from "../api/firebase";

function New(props) {
  const [product, setProduct] = useState({});
  const [file, setFile] = useState();
  const handleSubmit = (e) => {
    e.preventDefault();
    uploadImage(file).then((url) => {
      console.log(url);
      console.log(product);
      addNewProduct(product, url);
    });
    // 제품사진 업로드하고 url 획득
    // filrebase새로운제품 추가
  };
  const handleChange = (e) => {
    const { name, value, files } = e.target;
    if (name === "file") {
      setFile(files && files[0]);

      return;
    }
    setProduct((product) => ({ ...product, [name]: value }));
  };
  const loader = (url) => {
    return url;
  };
  return (
    <div>
      {file && (
        <div
          className="img"
          style={{ width: "100%", height: "auto", maxWidth: "500px" }}
        >
          <Image
            src={URL.createObjectURL(file)}
            loader={() => {
              loader(file);
            }}
            width={100}
            height={100}
            alt="loc"
          />
        </div>
      )}
      <form onSubmit={handleSubmit}>
        <input
          type="file"
          name="file"
          id=""
          accept="image/*"
          required
          onChange={handleChange}
        />
        <input
          type="text"
          name="title"
          id=""
          defaultValue={product.title ?? ""}
          placeholder="제품명"
          required
        />
        <input
          type="number"
          name="price"
          id=""
          defaultValue={product.price ?? ""}
          placeholder="가격"
          required
        />
        <input
          type="text"
          name="category"
          id=""
          defaultValue={product.category ?? ""}
          placeholder="카테고리"
          required
        />
        <input
          type="text"
          name="description"
          id=""
          defaultValue={product.description ?? ""}
          placeholder="제품설명"
          required
        />
        <input
          type="text"
          name="option"
          id=""
          defaultValue={product.options ?? ""}
          placeholder="옵션들(콤마(,)로 구분)"
          required
        />
        <Button onClick={handleSubmit} text="제품등록"></Button>
      </form>
    </div>
  );
}

export default New;
