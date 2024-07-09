"use client";
import { useContext } from "react";
import { LightDarkModeContextType } from "../_types";
import { LightDarkModeContext } from "../_context/LightDarkModeContext";

const useLightDarkMode = (): LightDarkModeContextType => {
  const context = useContext(LightDarkModeContext);
  if (!context) {
    throw new Error(
      "useLightDarkMode must be used within a LightDarkModeContextProvider"
    );
  }
  return context;
};

export default useLightDarkMode;
