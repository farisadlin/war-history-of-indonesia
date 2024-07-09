export type LightDarkModeType = "light" | "dark";

export interface LightDarkModeContextType {
  lightDarkMode: LightDarkModeType;
  toggleLightDarkMode: () => void;
}
