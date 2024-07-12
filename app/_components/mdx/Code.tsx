"use client";
import React, { useEffect } from "react";
import Prism from "@/prism"; // Adjust the import path
import { useTranslations } from "next-intl";

interface CodeProps {
  children?: React.ReactNode;
  language?: string; // Optional language prop for syntax highlighting
}

const Code: React.FC<CodeProps> = ({ children, language = "typescript" }) => {
  const t = useTranslations();

  useEffect(() => {
    Prism.highlightAll();
  }, [children]);

  const handleCopy = () => {
    if (children) {
      navigator.clipboard.writeText(children.toString());
      alert(t("Toast.codeCopied"));
    }
  };

  return (
    <div className="relative">
      <pre className={`language-${language}`}>
        <code className="mdx-code-fences">{children}</code>
      </pre>

      <button
        onClick={handleCopy}
        className="absolute right-2 top-2 px-2 py-1 text-xs bg-gray-800 text-white rounded"
      >
        {t("Common.copy")}
      </button>
    </div>
  );
};

export default Code;
