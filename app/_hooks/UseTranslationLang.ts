"use client";
import { useContext } from "react";
import { TranslationContextType } from "../_types";
import { TranslationContext } from "../_context/TranslationContext";

const useTranslationLang = (): TranslationContextType => {
  const context = useContext(TranslationContext);
  if (!context) {
    throw new Error(
      "useTranslationLang must be used within a TranslationContextProvider"
    );
  }
  return context;
};

export default useTranslationLang;
