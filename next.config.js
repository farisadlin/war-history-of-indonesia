/** @type {import('next').NextConfig} */
const createNextIntlPlugin = require("next-intl/plugin");

const withNextIntl = createNextIntlPlugin("./app/i18n.ts");

const nextConfig = {
  experimental: {
    serverActions: true,
  },
};

module.exports = withNextIntl(nextConfig);
