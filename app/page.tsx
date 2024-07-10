"use client";
import { Theme } from "@radix-ui/themes";
import NavigationBar from "./_components/NavigationBar";
import useLightDarkMode from "./_hooks/UseLightDarkMode";
import { appWithTranslation } from "next-i18next";
import Sidebar from "./_components/Sidebar";

function Home() {
  const { lightDarkMode } = useLightDarkMode();

  return (
    <Theme
      appearance={lightDarkMode}
      accentColor="mint"
      grayColor="gray"
      panelBackground="solid"
      scaling="100%"
      radius="full"
    >
      <Sidebar />
      <NavigationBar />
    </Theme>
  );
}

export default appWithTranslation(Home);
