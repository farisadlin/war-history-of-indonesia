"use client";
import React, { createContext, ReactNode, useState } from "react";
import { TranslationType, TranslationContextType } from "../_types";

export const TranslationContext = createContext<
  TranslationContextType | undefined
>(undefined);

export const TranslationContextProvider: React.FC<{
  children: ReactNode;
}> = ({ children }) => {
  const [translationLang, setTranslationLang] = useState<TranslationType>("EN");

  const toggleTranslation = () => {
    setTranslationLang((prevMode) => (prevMode === "EN" ? "ID" : "EN"));
  };

  return (
    <TranslationContext.Provider value={{ translationLang, toggleTranslation }}>
      {children}
    </TranslationContext.Provider>
  );
};
