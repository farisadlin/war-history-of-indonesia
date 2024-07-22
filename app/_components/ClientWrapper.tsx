// components/ClientWrapper.tsx
"use server";

import { SessionProvider } from "next-auth/react";
import { LightDarkModeContextProvider } from "@/app/_context/LightDarkModeContext";
import { TranslationContextProvider } from "@/app/_context/TranslationContext";
import { CookiesProvider } from "next-client-cookies/server";
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
          <CookiesProvider>
            <LightDarkModeContextProvider>
              <TranslationContextProvider>
                {children}
              </TranslationContextProvider>
            </LightDarkModeContextProvider>
          </CookiesProvider>
        </NextIntlClientProvider>
      </NextThemeProvider>
    </SessionProvider>
  );
};

export default ClientWrapper;
