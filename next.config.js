/** @type {import('next').NextConfig} */
const createNextIntlPlugin = require("next-intl/plugin");

const withNextIntl = createNextIntlPlugin();

const nextConfig = {
  i18n: {
    locales: ["en", "id"],
    defaultLocale: "en",
  },
  experimental: {
    serverActions: true,
  },
};

module.exports = withNextIntl(nextConfig);
