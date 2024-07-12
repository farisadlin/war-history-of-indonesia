"use client";
import React from "react";

export default function Ul({ children }: { children?: React.ReactNode }) {
  return <ul className="mdx-ul">{children}</ul>;
}
