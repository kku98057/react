import Link from "next/link";
import React from "react";

function Nav(props) {
  const data = ["asdf"];
  return (
    <nav className="md:ml-auto flex flex-wrap items-center text-base justify-center">
      <Link href="/" className="mr-5 hover:text-gray-900">
        홈
      </Link>
      <Link href="/Projects" className="mr-5 hover:text-gray-900">
        프로젝트
      </Link>
      <Link href="/Lists" className="mr-5 hover:text-gray-900">
        리스트
      </Link>
      <a className="mr-5 hover:text-gray-900">문의하기</a>
    </nav>
  );
}

export default Nav;
