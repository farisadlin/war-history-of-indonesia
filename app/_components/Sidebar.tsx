"use client";
import { Container, Text } from "@radix-ui/themes";
import { useTranslations } from "next-intl";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";

export default function Sidebar() {
  const t = useTranslations("Home");
  const pathname = usePathname();
  const menuListKeys = ["provinces", "years"] as const;

  return (
    <Container className="fixed w-56 mt-[85px] h-full top-0 left-0 overflow-x-hidden border-gray-500 border-r-[0.5px]">
      <Container className="border-gray-500 border-t-[0.5px] pt-[16.5px]">
        <ul className="px-5 flex gap-1 flex-col">
          {menuListKeys.map((key: string) => {
            const href = t(`sidebarMenu.${key}.url`);
            const isActive = pathname === href;
            return (
              <Link
                className={`cursor-pointer px-2 py-1 hover:bg-slate-100 rounded-md ${
                  isActive ? "bg-slate-200" : ""
                }`}
                key={key}
                href={href}
              >
                <Text color="blue">{t(`sidebarMenu.${key}.title`)}</Text>
              </Link>
            );
          })}
        </ul>
      </Container>
    </Container>
  );
}
