"use client";
import React from "react";

export default function Ol({ children }: { children?: React.ReactNode }) {
  return <ol className="mdx-ol">{children}</ol>;
}
