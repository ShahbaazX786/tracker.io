"use client";

import { useTheme } from "next-themes";

export type TLightDark = "light" | "dark";

const useDarkMode = (): [() => void] => {
  const { setTheme } = useTheme();
  const isLocalStorageAvailable =
    typeof window !== "undefined" && window.localStorage;

  const storedTheme: TLightDark = isLocalStorageAvailable
    ? (localStorage.getItem("theme") as TLightDark) || "light"
    : "light";
    const theme = storedTheme === "light" ? "dark" : "light";
  const toggle = () => {
  
    setTheme(theme);
  };

  return [toggle];
};

export default useDarkMode;
