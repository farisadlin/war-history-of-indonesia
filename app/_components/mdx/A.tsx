import React from "react";

type AnchorProps = React.DetailedHTMLProps<
  React.AnchorHTMLAttributes<HTMLAnchorElement>,
  HTMLAnchorElement
>;

const A: React.FC<AnchorProps> = ({ children, href, ...props }) => {
  return (
    <a href={href} target="_blank" className="mdx-a" {...props}>
      {children}
    </a>
  );
};

export default A;
