"use client";

import { appWithTranslation } from "next-i18next";
import MainLayout from "./_layouts/MainLayout";

function Home() {
  return <MainLayout />;
}

export default appWithTranslation(Home);
