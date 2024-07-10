import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "@/app/_styles/globals.css";
import "@radix-ui/themes/styles.css";
import { LightDarkModeContextProvider } from "./_context/LightDarkModeContext";
import { TranslationContextProvider } from "./_context/TranslationContext";
import { CookiesProvider } from "next-client-cookies/server";
import { NextIntlClientProvider } from "next-intl";
import { getLocale, getMessages } from "next-intl/server";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "War History of Indonesia",
  description: "War History of Indonesia",
};

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const locale = await getLocale();
  const messages = await getMessages();

  return (
    <html lang="en">
      <body className={inter.className}>
        <NextIntlClientProvider locale={locale} messages={messages}>
          <CookiesProvider>
            <LightDarkModeContextProvider>
              <TranslationContextProvider>
                {children}
              </TranslationContextProvider>
            </LightDarkModeContextProvider>
          </CookiesProvider>
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
