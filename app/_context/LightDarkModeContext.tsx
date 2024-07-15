"use client";
import React, { createContext, ReactNode, useEffect, useState } from "react";
import { LightDarkModeContextType, LightDarkModeType } from "../_types";
import { useCookies } from "next-client-cookies";

export const LightDarkModeContext = createContext<
  LightDarkModeContextType | undefined
>(undefined);

export const LightDarkModeContextProvider: React.FC<{
  children: ReactNode;
}> = ({ children }) => {
  const cookies = useCookies();
  const storedTheme = cookies.get("themeMode") as LightDarkModeType | undefined;
  const [lightDarkMode, setLightDarkMode] = useState<LightDarkModeType>(
    storedTheme || "dark"
  );

  const toggleLightDarkMode = () => {
    setLightDarkMode((prevMode) => {
      const newMode = prevMode === "dark" ? "light" : "dark";
      cookies.set("themeMode", newMode);
      return newMode;
    });
  };

  useEffect(() => {
    if (!storedTheme) {
      cookies.set("themeMode", "dark");
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [storedTheme]);

  return (
    <LightDarkModeContext.Provider
      value={{ lightDarkMode, toggleLightDarkMode }}
    >
      {children}
    </LightDarkModeContext.Provider>
  );
};
