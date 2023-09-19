/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  env: {
    GA_TRACKING_ID: process.env.NEXT_PUBLIC_GA_TRACKING_ID
  }
}

module.exports = nextConfig
