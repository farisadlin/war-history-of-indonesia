import { Box } from "@radix-ui/themes";
import React from "react";
import NavigationBar from "./NavigationBar";
import Sidebar from "./Sidebar";

export default function MainLayout({
  children,
}: {
  children?: React.ReactNode;
}) {
  return (
    <section>
      <Box className="ml-56">
        <NavigationBar />
        {children}
      </Box>
      <Sidebar />
    </section>
  );
}
