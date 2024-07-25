import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "@/app/_styles/globals.css";
import "@radix-ui/themes/styles.css";
import { getLocale, getMessages } from "next-intl/server";
import ClientWrapper from "@/app/_components/ClientWrapper"; // Adjust the import path as necessary
import { CookiesProvider } from "next-client-cookies/server";
import { auth } from "@/auth";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "War History of Indonesia",
  description: "War History of Indonesia",
  icons: {
    icon: "/icon.svg",
  },
};

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const locale = await getLocale();
  const messages = await getMessages();
  const session = await auth();

  return (
    <html lang="en">
      <body className={inter.className}>
        <ClientWrapper session={session} locale={locale} messages={messages}>
          {children}
        </ClientWrapper>
      </body>
    </html>
  );
}
