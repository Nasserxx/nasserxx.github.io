/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  output: 'export',  // Enable static HTML export
  basePath: process.env.NODE_ENV === 'production' ? '/nasserxx.github.io' : '',
  assetPrefix: process.env.NODE_ENV === 'production' ? '/nasserxx.github.io/' : '',
  images: {
    unoptimized: true, // Necessary for static export
    domains: ['media.licdn.com'], // Allow LinkedIn profile image
  },
}

module.exports = nextConfig 