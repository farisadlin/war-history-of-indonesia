// components/ClientWrapper.tsx
"use client";
import { SessionProvider } from "next-auth/react";
import { LightDarkModeContextProvider } from "@/app/_context/LightDarkModeContext";
import { TranslationContextProvider } from "@/app/_context/TranslationContext";
import { NextIntlClientProvider } from "next-intl";
import { NextThemeProvider } from "@/app/_components/ThemeProvider";

const ClientWrapper = ({
  children,
  session,
  locale,
  messages,
}: {
  children: React.ReactNode;
  session: any;
  locale: string;
  messages: any;
}) => {
  return (
    <SessionProvider session={session}>
      <NextThemeProvider>
        <NextIntlClientProvider locale={locale} messages={messages}>
          <LightDarkModeContextProvider>
            <TranslationContextProvider>{children}</TranslationContextProvider>
          </LightDarkModeContextProvider>
        </NextIntlClientProvider>
      </NextThemeProvider>
    </SessionProvider>
  );
};

export default ClientWrapper;
