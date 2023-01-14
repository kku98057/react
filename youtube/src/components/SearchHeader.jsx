import React, { useEffect, useState } from "react";
import { BsYoutube, BsSearch } from "react-icons/bs";
import { useNavigate, useParams } from "react-router";
import { Link } from "react-router-dom";

function SearchHeader(props) {
  const { keyword } = useParams();
  const [text, setText] = useState("");
  const textHandler = (e) => {
    setText(e.target.value);
  };
  const navigate = useNavigate();
  const handleSubmit = (e) => {
    e.preventDefault();
    navigate(`/videos/${text}`);
  };
  useEffect(() => {
    setText(keyword || "");
    return;
  }, [keyword]);
  return (
    <header className="w-full flex p-4 text-2xl border-b border-zinc-600 mb-4">
      <Link to="/" className="flex items-center">
        <BsYoutube className="text-4xl text-brand" />
        <h1 className="font-bold ml-2 text-3xl text-white">YouTube</h1>
      </Link>
      <form onSubmit={handleSubmit} className="w-full flex justify-center">
        <input
          type="text"
          placeholder="검색하세요"
          id=""
          value={text}
          onChange={textHandler}
          className="w-7/12 p-2 outline-none bg-black text-gray-50"
        />
        <button type="button" className="bg-zinc-600 px-4">
          <BsSearch />
        </button>
      </form>
    </header>
  );
}

export default SearchHeader;
