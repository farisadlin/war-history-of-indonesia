"use server";

import {
  API_ROUTES,
  DEFAULT_NOT_AUTHENTICATED_ROUTE,
  DEFAULT_REDIRECT,
  ROOT,
  PUBLIC_ROUTES,
} from "./app/_lib/routes";

import { authConfig } from "./auth.config";
import NextAuth from "next-auth";

const { auth } = NextAuth(authConfig);

// TODOS: Need to fix this Middleware for routing
export default auth((req): any => {
  const { nextUrl, auth } = req;
  const isLoggedIn = !!auth;

  const isApiAuthRoute = nextUrl.pathname.startsWith(API_ROUTES);
  const isPublicRoute = PUBLIC_ROUTES.includes(nextUrl.pathname);
  const isAuthRoute = DEFAULT_NOT_AUTHENTICATED_ROUTE.includes(
    nextUrl.pathname
  );

  return null;

  // if (isApiAuthRoute) {
  //   return null;
  // }

  // if (isAuthRoute || isPublicRoute) {
  //   if (isLoggedIn) {
  //     return Response.redirect(new URL(DEFAULT_REDIRECT, nextUrl));
  //   }
  //   return null;
  // }

  // if (!isLoggedIn && !isPublicRoute) {
  //   return Response.redirect(new URL(ROOT, nextUrl));
  // }
  // return null;
});

export const config = {
  matcher: ["/((?!api|_next/static|_next/image|favicon.ico).*)"],
};
