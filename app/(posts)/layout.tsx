import React from "react";
import MainLayout from "../_layouts/MainLayout";

export default function PostsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <MainLayout>
      <section className="p-5">{children}</section>
    </MainLayout>
  );
}
