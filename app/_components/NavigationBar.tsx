"use client";
import * as NavigationMenu from "@radix-ui/react-navigation-menu";
import LightDarkModeSwitch from "./LightDarkModeSwitch";
import useLightDarkMode from "../_hooks/UseLightDarkMode";
import { CaretDownIcon } from "@radix-ui/react-icons";
import useTranslationLang from "../_hooks/UseTranslationLang";

export default function NavigationBar() {
  const { lightDarkMode, toggleLightDarkMode } = useLightDarkMode();
  const { translationLang, toggleTranslation } = useTranslationLang();

  return (
    <NavigationMenu.Root className="relative z-[1] flex w-screen justify-end p-5">
      <NavigationMenu.List className="shadow-blackA4 m-0 flex items-center">
        <NavigationMenu.Item className="mr-2">
          <NavigationMenu.Trigger className="text-violet11 hover:bg-violet3 focus:shadow-violet7 group flex select-none items-center justify-between gap-[2px] rounded-[4px] px-3 py-2 text-[15px] font-medium leading-none outline-none focus:shadow-[0_0_0_2px] cursor-pointer">
            {translationLang}
            <CaretDownIcon
              className="text-violet10 relative top-[1px] transition-transform duration-[250] ease-in group-data-[state=open]:-rotate-180"
              aria-hidden
            />
          </NavigationMenu.Trigger>
          <NavigationMenu.Content className="data-[motion=from-start]:animate-enterFromLeft data-[motion=from-end]:animate-enterFromRight data-[motion=to-start]:animate-exitToLeft data-[motion=to-end]:animate-exitToRight absolute top-2 -left-2.5 mt-1">
            <ul className="m-0 grid list-none gap-x-[10px] p-[22px]">
              <li className="grid cursor-pointer" onClick={toggleTranslation}>
                {translationLang === "EN" ? "ID" : "EN"}
              </li>
            </ul>
          </NavigationMenu.Content>
        </NavigationMenu.Item>
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
