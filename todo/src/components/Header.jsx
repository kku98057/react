import React, { useEffect, useState } from "react";
import { MdDarkMode, MdOutlineLightMode } from "react-icons/md";
import useStore from "../store";

function Header({ todos, filters, filterhandler }) {
  const { darkMode, setDarkMode } = useStore();
  console.log(localStorage, "처음");
  useEffect(() => {
    const isDark =
      localStorage.theme === "dark" ||
      (!("theme" in localStorage) &&
        window.matchMedia("(prefers-color-scheme: dark)").matches);
    setDarkMode(isDark);
    updateDarkMode(isDark);
  }, []);
  return (
    <header>
      <div
        className="dark"
        onClick={() => {
          console.log(localStorage, "버튼");
          setDarkMode(!darkMode);
          updateDarkMode(!darkMode);
        }}
      >
        {darkMode ? (
          <MdDarkMode></MdDarkMode>
        ) : (
          <MdOutlineLightMode></MdOutlineLightMode>
        )}
      </div>
      <ul style={{ display: "flex", gap: "20px" }}>
        {filters.map((list, idx) => (
          <li
            key={idx}
            style={{ cursor: "pointer" }}
            onClick={() => {
              filterhandler(list);
            }}
          >
            {list}
          </li>
        ))}
      </ul>
    </header>
  );
}

export default Header;

function updateDarkMode(darkMode) {
  if (darkMode) {
    document.documentElement.classList.add("dark");
    localStorage.thema = "dark";
  } else {
    document.documentElement.classList.remove("dark");
    localStorage.thema = "light";
  }
}
