"use client";

import { Button } from "@radix-ui/themes";
import { useSession } from "next-auth/react";
import React from "react";
import { userLogoutAction } from "../_lib/actions/auth";
import { useTranslations } from "next-intl";
import { redirect, useRouter } from "next/navigation";

export default function AuthButton() {
  const router = useRouter();
  const t = useTranslations();
  const data = useSession();

  const handleSignOut = () => {
    userLogoutAction();
    redirect("/auth/signin");
  };

  const handleSignIn = () => {
    router.push("/auth/signin");
  };

  if (data.status === "authenticated") {
    return (
      <Button color="gray" variant="outline" onClick={handleSignOut}>
        {t("Common.signout")}
      </Button>
    );
  }

  return (
    <Button color="gray" variant="outline" onClick={handleSignIn}>
      {t("Common.signin")}
    </Button>
  );
}
