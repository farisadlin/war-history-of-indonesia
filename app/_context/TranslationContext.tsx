"use client";
import React, { createContext, ReactNode } from "react";
import { TranslationContextType } from "../_types";
import { useTranslate } from "../_hooks/UseTranslate";

export const TranslationContext = createContext<
  TranslationContextType | undefined
>(undefined);

export const TranslationContextProvider: React.FC<{
  children: ReactNode;
}> = ({ children }) => {
  const { language, setLanguage } = useTranslate();

  const toggleTranslation = () => {
    if (language === "en") {
      setLanguage("id");
    } else {
      setLanguage("en");
    }
  };

  return (
    <TranslationContext.Provider
      value={{ translationLang: language, toggleTranslation }}
    >
      {children}
    </TranslationContext.Provider>
  );
};
