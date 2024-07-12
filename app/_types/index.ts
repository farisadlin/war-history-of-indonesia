import { ImageProps } from "next/image";

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

export interface HeroImageProps extends Omit<ImageProps, "src" | "alt"> {
  src: string;
  alt: string;
}
