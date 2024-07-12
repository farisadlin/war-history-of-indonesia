"use client";
import React from "react";
import Image from "next/image";
import { HeroImageProps } from "@/app/_types";

const HeroImage: React.FC<HeroImageProps> = ({ src, alt, ...props }) => {
  return (
    <div className="mdx-hero-image">
      <Image
        sizes="100vw"
        width={0}
        height={0}
        src={src}
        alt={alt}
        {...props}
      />
    </div>
  );
};

export default HeroImage;
