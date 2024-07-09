import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "@/app/_styles/globals.css";
import "@radix-ui/themes/styles.css";
import { LightDarkModeContextProvider } from "./_context/LightDarkModeContext";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "War History of Indonesia",
  description: "War History of Indonesia",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <LightDarkModeContextProvider>{children}</LightDarkModeContextProvider>
      </body>
    </html>
  );
}
