"use client";
import { Box, Container, Text } from "@radix-ui/themes";
import { useTranslations } from "next-intl";
import Link from "next/link";
import React from "react";

export default function Sidebar() {
  const t = useTranslations("Home");
  const menuListKeys = ["provinces", "years"] as const;

  return (
    <Container className="fixed w-56 h-full top-0 left-0 overflow-x-hidden border-gray-500 border-r-[0.5px]">
      <Box className="w-full h-full " />
      <Container className="border-gray-500 border-t-[0.5px] pt-[16.5px]">
        <ul className="px-5 flex gap-1 flex-col">
          {menuListKeys.map((key: string) => (
            <Link
              className="cursor-pointer px-2 py-1 hover:bg-slate-100 rounded-md"
              key={key}
              href={t(`sidebarMenu.${key}.url`)}
            >
              <Text color="blue">{t(`sidebarMenu.${key}.title`)}</Text>
            </Link>
          ))}
        </ul>
      </Container>
    </Container>
  );
}
