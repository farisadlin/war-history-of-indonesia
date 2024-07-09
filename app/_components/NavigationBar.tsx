"use client";
import * as NavigationMenu from "@radix-ui/react-navigation-menu";
import LightDarkModeSwitch from "./LightDarkModeSwitch";
import useLightDarkMode from "../_hooks/UseLightDarkMode";

export default function NavigationBar() {
  const { lightDarkMode, toggleLightDarkMode } = useLightDarkMode();

  return (
    <NavigationMenu.Root className="relative z-[1] flex w-screen justify-end p-5">
      <NavigationMenu.List>
        <NavigationMenu.Item>
          <LightDarkModeSwitch
            title={lightDarkMode}
            handleSwitch={toggleLightDarkMode}
          />
        </NavigationMenu.Item>
      </NavigationMenu.List>
    </NavigationMenu.Root>
  );
}
