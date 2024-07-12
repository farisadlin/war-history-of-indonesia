/** @type {import('next').NextConfig} */
const createNextIntlPlugin = require("next-intl/plugin");
const withMDX = require("@next/mdx")({
  extension: /\.mdx?$/,
});
const withNextIntl = createNextIntlPlugin("./app/i18n.ts");

const nextConfig = {
  experimental: {
    serverActions: true,
  },
  pageExtensions: ["js", "jsx", "mdx", "ts", "tsx"],
  images: {
    domains: ["source.unsplash.com"],
  },
};

module.exports = withNextIntl(withMDX(nextConfig));
