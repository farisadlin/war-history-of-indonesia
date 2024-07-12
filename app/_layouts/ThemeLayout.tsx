"use client";

import { Theme } from "@radix-ui/themes";
import React from "react";
import useLightDarkMode from "../_hooks/UseLightDarkMode";

export default function ThemeLayout({
  children,
}: {
  children?: React.ReactNode;
}) {
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
      {children}
    </Theme>
  );
}
