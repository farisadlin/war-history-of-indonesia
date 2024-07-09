export type LightDarkModeType = "light" | "dark";
export type TranslationType = "EN" | "ID";

export interface TranslationContextType {
  translationLang: TranslationType;
  toggleTranslation: () => void;
}
export interface LightDarkModeContextType {
  lightDarkMode: LightDarkModeType;
  toggleLightDarkMode: () => void;
}
