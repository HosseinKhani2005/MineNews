"use client";

import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setTheme } from "@/store/themeSlice";

export default function ThemeSync() {
  const dispatch = useDispatch();
  const darkmode = useSelector((state) => state.theme.darkmode);

  useEffect(() => {
    const savedTheme = localStorage.getItem("theme");

    if (savedTheme === "dark" || savedTheme === "light") {
      dispatch(setTheme(savedTheme));
      return;
    }

    const prefersDark = window.matchMedia(
      "(prefers-color-scheme: dark)",
    ).matches;
    dispatch(setTheme(prefersDark ? "dark" : "light"));
  }, [dispatch]);

  useEffect(() => {
    document.documentElement.setAttribute(
      "data-theme",
      darkmode ? "dark" : "light",
    );
  }, [darkmode]);

  return null;
}
