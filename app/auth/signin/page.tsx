"use client";

import React, { useState } from "react";
import * as NavigationMenu from "@radix-ui/react-navigation-menu";
import { useForm, SubmitHandler } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import * as Form from "@radix-ui/react-form";
import { Button, Text } from "@radix-ui/themes";
import { useTranslations } from "next-intl";
import Input from "@/app/_components/Input";
import { useRouter } from "next/navigation";
import AuthLayout from "@/app/_layouts/AuthLayout";
import { userLoginAction } from "@/app/_lib/actions/auth";
import useLightDarkMode from "@/app/_hooks/UseLightDarkMode";
import useTranslationLang from "@/app/_hooks/UseTranslationLang";
import ThemeLayout from "@/app/_layouts/ThemeLayout";
import Link from "next/link";
import Image from "next/image";
import LightDarkModeSwitch from "@/app/_components/LightDarkModeSwitch";
import { CaretDownIcon } from "@radix-ui/react-icons";
import Logo from "@/app/_assets/logo.webp";

// Validation schema
const schema = z.object({
  email: z.string().email({ message: "Invalid email address" }),
  password: z
    .string()
    .min(8, { message: "Password must be at least 8 characters" }),
});

// Infer form data type from schema
type FormData = z.infer<typeof schema>;

const Signin: React.FC = () => {
  const t = useTranslations();
  const { lightDarkMode, toggleLightDarkMode } = useLightDarkMode();
  const { translationLang, toggleTranslation } = useTranslationLang();
  const router = useRouter();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>({
    resolver: zodResolver(schema),
  });
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const onSubmit: SubmitHandler<FormData> = async (data) => {
    setIsLoading(true);
    try {
      await userLoginAction(data);
      router.push("/");
    } catch (error) {
      console.error(error);
    }
    setIsLoading(false);
  };

  if (isLoading) {
    return (
      <AuthLayout>
        <p>Loading...</p>
      </AuthLayout>
    );
  }

  return (
    <ThemeLayout>
      <nav
        className={`sticky top-0 flex justify-between items-center p-5 border-gray-500 border-b-[0.5px] z-10 ${
          lightDarkMode === "dark" ? "bg-dark" : "bg-light"
        }`}
      >
        <Link href="/">
          <Image width={50} height={50} src={Logo} alt="Logo" />
        </Link>
        <Text
          color="blue"
          className="flex-2 text-center font-bold text-3xl m-0 ml-2"
        >
          {t("Home.titleBar")}
        </Text>
        <NavigationMenu.Root className="flex justify-end flex-1">
          <NavigationMenu.List className="flex items-center">
            <NavigationMenu.Item>
              <NavigationMenu.Trigger className="text-violet11 hover:bg-violet3 focus:shadow-violet7 group flex select-none items-center justify-between gap-[2px] rounded-[4px] px-3 py-2 text-[15px] font-medium leading-none outline-none focus:shadow-[0_0_0_2px] cursor-pointer">
                {translationLang.toUpperCase()}
                <CaretDownIcon
                  className="text-violet10 relative top-[1px] transition-transform duration-[250] ease-in group-data-[state=open]:-rotate-180"
                  aria-hidden
                />
              </NavigationMenu.Trigger>
              <NavigationMenu.Content className="data-[motion=from-start]:animate-enterFromLeft data-[motion=from-end]:animate-enterFromRight data-[motion=to-start]:animate-exitToLeft data-[motion=to-end]:animate-exitToRight absolute top-2 -left-2.5 mt-1">
                <ul className="m-0 grid list-none gap-x-[10px] p-[22px]">
                  <li
                    className="grid cursor-pointer"
                    onClick={toggleTranslation}
                  >
                    {translationLang === "en" ? "ID" : "EN"}
                  </li>
                </ul>
              </NavigationMenu.Content>
            </NavigationMenu.Item>
            <NavigationMenu.Item className="mr-2 ml-1">
              <LightDarkModeSwitch
                title={lightDarkMode}
                handleSwitch={toggleLightDarkMode}
              />
            </NavigationMenu.Item>
          </NavigationMenu.List>
        </NavigationMenu.Root>
      </nav>
      <div className="flex h-[80vh] justify-center items-center">
        <Form.Root onSubmit={handleSubmit(onSubmit)} className="w-[300px]">
          <Form.Field name="email" className="mb-4">
            <Form.Label htmlFor="email">Email</Form.Label>
            <Form.Control asChild>
              <Input id="email" type="email" {...register("email")} />
            </Form.Control>
            {errors.email && (
              <span className="text-red-500">{errors.email.message}</span>
            )}
          </Form.Field>
          <Form.Field name="password" className="mb-4">
            <Form.Label htmlFor="password">Password</Form.Label>
            <Form.Control asChild>
              <Input id="password" type="password" {...register("password")} />
            </Form.Control>
            {errors.password && (
              <span className="text-red-500">{errors.password.message}</span>
            )}
          </Form.Field>

          <div className="flex justify-center mt-4 w-full">
            <Form.Submit asChild>
              <Button size="3" type="submit" className="p-2">
                {t("Common.signin")}
              </Button>
            </Form.Submit>
          </div>
        </Form.Root>
      </div>
    </ThemeLayout>
  );
};

export default Signin;
