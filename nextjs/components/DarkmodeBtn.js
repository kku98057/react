import { useTheme } from "next-themes";
import React from "react";

function DarkmodeBtn(props) {
  const { theme, setTheme } = useTheme("light");
  return (
    <button
      type="button"
      onClick={() => {
        setTheme(theme === "dark" ? "light" : "dark");
      }}
    >
      <span className="block dark:hidden hover:color-red">다크모드</span>
      <span className="hidden dark:block ">라이트모드</span>
    </button>
  );
}

export default DarkmodeBtn;
