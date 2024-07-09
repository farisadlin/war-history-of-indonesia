"use client";
import { Theme } from "@radix-ui/themes";
import NavigationBar from "./_components/NavigationBar";
import useLightDarkMode from "./_hooks/UseLightDarkMode";

export default function Home() {
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
      <NavigationBar />
    </Theme>
  );
}
