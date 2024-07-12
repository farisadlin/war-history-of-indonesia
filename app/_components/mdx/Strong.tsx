"use client";
import React from "react";

export default function Strong({ children }: { children?: React.ReactNode }) {
  return <strong className="mdx-strong">{children}</strong>;
}
