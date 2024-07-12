"use client";
import React from "react";

export default function Em({ children }: { children?: React.ReactNode }) {
  return <em className="mdx-em">{children}</em>;
}
