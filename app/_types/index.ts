export type LightDarkModeType = "light" | "dark" | undefined;
export type TranslationType = "en" | "id";

export interface TranslationContextType {
  translationLang: TranslationType;
  toggleTranslation: () => void;
}
export interface LightDarkModeContextType {
  lightDarkMode: LightDarkModeType;
  toggleLightDarkMode: () => void;
}
