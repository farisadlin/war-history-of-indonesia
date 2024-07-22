import React from "react";
import ClientWrapper from "@/app/_components/ClientWrapper";
import { getLocale, getMessages } from "next-intl/server";
import { auth } from "@/auth";

export default async function SigninLayout({
  children,
}: {
  children?: React.ReactNode;
}) {
  const locale = await getLocale();
  const messages = await getMessages();
  const session = await auth();
  return (
    <ClientWrapper session={session} locale={locale} messages={messages}>
      {children}
    </ClientWrapper>
  );
}
