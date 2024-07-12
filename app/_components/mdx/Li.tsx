"use client";
import React from "react";

export default function Li({ children }: { children?: React.ReactNode }) {
  return <li className="mdx-li">{children}</li>;
}
