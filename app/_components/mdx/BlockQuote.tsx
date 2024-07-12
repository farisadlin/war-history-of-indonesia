"use client";
import React from "react";

export default function BlockQuote({
  children,
}: {
  children?: React.ReactNode;
}) {
  return <blockquote className="mdx-block-quote">{children}</blockquote>;
}
