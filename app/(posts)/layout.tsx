"use client";

import React from "react";
import MainLayout from "../_layouts/MainLayout";
import { Button } from "@radix-ui/themes";
import { ArrowLeftIcon } from "@radix-ui/react-icons";
import { useRouter } from "next/navigation";
import { useTranslations } from "next-intl";

export default function PostsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const t = useTranslations("Common");
  const router = useRouter();

  return (
    <MainLayout>
      <section className="p-5">
        <Button
          variant="surface"
          className="cursor-pointer"
          onClick={() => router.back()}
        >
          <ArrowLeftIcon />
          {t("back")}
        </Button>
        <section className="mt-4">{children}</section>
      </section>
    </MainLayout>
  );
}
