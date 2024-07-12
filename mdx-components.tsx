import type { MDXComponents } from "mdx/types";

// This file is required to use MDX in `app` directory.
export function useMDXComponents(_components: MDXComponents): MDXComponents {
  return {
    // Allows customizing built-in _components, e.g. to add styling.
    // h1: ({ children }) => <h1 style={{ fontSize: "100px" }}>{children}</h1>,
    ..._components,
  };
}
