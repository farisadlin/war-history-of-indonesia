"use client";
import * as NavigationMenu from "@radix-ui/react-navigation-menu";
import LightDarkModeSwitch from "./LightDarkModeSwitch";
import useLightDarkMode from "../_hooks/UseLightDarkMode";
import { CaretDownIcon, MagnifyingGlassIcon } from "@radix-ui/react-icons";
import useTranslationLang from "../_hooks/UseTranslationLang";
import { useTranslations } from "next-intl";
import { Button, Text, TextField } from "@radix-ui/themes";
import Link from "next/link";
import Image from "next/image";
import Logo from "@/app/_assets/logo.webp";
import AuthButton from "./AuthButton";

export default function NavigationBar() {
  const t = useTranslations();
  const { lightDarkMode, toggleLightDarkMode } = useLightDarkMode();
  const { translationLang, toggleTranslation } = useTranslationLang();

  return (
    <nav
      className={`sticky top-0 flex justify-between items-center p-5 border-gray-500 border-b-[0.5px] z-10 ${
        lightDarkMode === "dark" ? "bg-dark" : "bg-light"
      }`}
    >
      <Link href="/">
        <Image width={50} height={50} src={Logo} alt="Logo" />
      </Link>
      <Text
        color="blue"
        className="flex-2 text-center font-bold text-3xl m-0 ml-2"
      >
        {t("Home.titleBar")}
      </Text>
      <NavigationMenu.Root className="flex justify-end flex-1">
        <TextField.Root
          placeholder={t("Common.searchDocs")}
          className="w-1/3 py-2 mr-2"
        >
          <TextField.Slot>
            <MagnifyingGlassIcon height="24px" width="24px" />
          </TextField.Slot>
        </TextField.Root>
        <NavigationMenu.List className="flex items-center">
          <NavigationMenu.Item>
            <NavigationMenu.Trigger className="text-violet11 hover:bg-violet3 focus:shadow-violet7 group flex select-none items-center justify-between gap-[2px] rounded-[4px] px-3 py-2 text-[15px] font-medium leading-none outline-none focus:shadow-[0_0_0_2px] cursor-pointer">
              {translationLang.toUpperCase()}
              <CaretDownIcon
                className="text-violet10 relative top-[1px] transition-transform duration-[250] ease-in group-data-[state=open]:-rotate-180"
                aria-hidden
              />
            </NavigationMenu.Trigger>
            <NavigationMenu.Content className="data-[motion=from-start]:animate-enterFromLeft data-[motion=from-end]:animate-enterFromRight data-[motion=to-start]:animate-exitToLeft data-[motion=to-end]:animate-exitToRight absolute top-2 -left-2.5 mt-1">
              <ul className="m-0 grid list-none gap-x-[10px] p-[22px]">
                <li className="grid cursor-pointer" onClick={toggleTranslation}>
                  {translationLang === "en" ? "ID" : "EN"}
                </li>
              </ul>
            </NavigationMenu.Content>
          </NavigationMenu.Item>
          <NavigationMenu.Item className="mr-2 ml-1">
            <LightDarkModeSwitch
              title={lightDarkMode}
              handleSwitch={toggleLightDarkMode}
            />
          </NavigationMenu.Item>
          <NavigationMenu.Item className="cursor-pointer">
            <AuthButton />
          </NavigationMenu.Item>
        </NavigationMenu.List>
      </NavigationMenu.Root>
    </nav>
  );
}
