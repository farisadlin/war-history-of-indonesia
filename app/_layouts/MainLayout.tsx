"use client";

import { Box } from "@radix-ui/themes";
import React from "react";
import NavigationBar from "../_components/NavigationBar";
import Sidebar from "../_components/Sidebar";
import ThemeLayout from "./ThemeLayout";

export default function MainLayout({
  children,
}: {
  children?: React.ReactNode;
}) {
  return (
    <ThemeLayout>
      <NavigationBar />
      <Box className="ml-56">{children}</Box>
      <Sidebar />
    </ThemeLayout>
  );
}
