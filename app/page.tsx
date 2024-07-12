"use client";

import { Box, Theme } from "@radix-ui/themes";
import NavigationBar from "./components/NavigationBar";
import useLightDarkMode from "./_hooks/UseLightDarkMode";
import { appWithTranslation } from "next-i18next";
import Sidebar from "./components/Sidebar";
import MainLayout from "./components/MainLayout";

function Home() {
  const { lightDarkMode } = useLightDarkMode();

  return (
    <Theme
      appearance={lightDarkMode}
      accentColor="blue"
      grayColor="gray"
      panelBackground="solid"
      scaling="100%"
      radius="full"
      className={`${lightDarkMode}-theme`}
    >
      <MainLayout />
    </Theme>
  );
}

export default appWithTranslation(Home);
