/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  output: 'export',  // Enable static HTML export
  distDir: 'out',
  images: {
    unoptimized: true, // Necessary for static export
    domains: ['media.licdn.com'], // Allow LinkedIn profile image
  },
}

module.exports = nextConfig 