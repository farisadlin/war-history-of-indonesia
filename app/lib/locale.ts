"use server";

import { cookies } from "next/headers";

export default async function changeLang(lang: "id" | "en") {
  cookies().set("lang", lang);
}
