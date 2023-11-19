/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: false,
  env: {
    GITHUB_AUTHENTICATION_TOKEN: process.env.GITHUB_AUTHENTICATION_TOKEN,
    NODEMAILER_AUTHENTICATION_USER: process.env.NODEMAILER_AUTHENTICATION_USER,
    NODEMAILER_AUTHENTICATION_PASSWORD:
      process.env.NODEMAILER_AUTHENTICATION_PASSWORD,
    GITHUB_USERNAME: process.env.GITHUB_USERNAME,
  },
}

const withNextIntl = require('next-intl/plugin')('./i18n.ts')

module.exports = withNextIntl(nextConfig)
