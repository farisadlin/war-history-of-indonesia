import type { MDXComponents } from "mdx/types";
import P from "./app/_components/mdx/P";
import H1 from "./app/_components/mdx/H1";
import H2 from "./app/_components/mdx/H2";
import Em from "./app/_components/mdx/Em";
import Strong from "./app/_components/mdx/Strong";
import Code from "./app/_components/mdx/Code";
import A from "./app/_components/mdx/A";
import BlockQuote from "./app/_components/mdx/BlockQuote";
import Li from "./app/_components/mdx/Li";
import Ul from "./app/_components/mdx/Ul";
import Ol from "./app/_components/mdx/Ol";
import HeroImage from "./app/_components/mdx/HeroImage";
import { HeroImageProps } from "./app/_types";

// This file is required to use MDX in `app` directory.
export function useMDXComponents(components: MDXComponents): MDXComponents {
  return {
    h1: H1,
    h2: H2,
    p: P,
    em: Em,
    strong: Strong,
    code: Code,
    a: A,
    blockquote: BlockQuote,
    ul: Ul,
    li: Li,
    ol: Ol,
    img: (props) => <HeroImage {...(props as HeroImageProps)} />,
    ...components,
  };
}
