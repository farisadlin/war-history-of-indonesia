"use client";
import React, { createContext, ReactNode, useState } from "react";
import { LightDarkModeContextType, LightDarkModeType } from "../_types";

export const LightDarkModeContext = createContext<
  LightDarkModeContextType | undefined
>(undefined);

export const LightDarkModeContextProvider: React.FC<{
  children: ReactNode;
}> = ({ children }) => {
  const [lightDarkMode, setLightDarkMode] = useState<LightDarkModeType>("dark");

  const toggleLightDarkMode = () => {
    setLightDarkMode((prevMode) => (prevMode === "dark" ? "light" : "dark"));
  };

  return (
    <LightDarkModeContext.Provider
      value={{ lightDarkMode, toggleLightDarkMode }}
    >
      {children}
    </LightDarkModeContext.Provider>
  );
};
