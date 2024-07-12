"use client";
import React from "react";

export default function P({ children }: { children?: React.ReactNode }) {
  return <div className="mdx-p">{children}</div>;
}
