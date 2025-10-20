/** @type {import('next').NextConfig} */
const nextConfig = {
  eslint: {
    ignoreDuringBuilds: true,
  },
  typescript: {
    ignoreBuildErrors: true,
  },
  // Force new deployment
  generateBuildId: async () => {
    return 'build-' + Date.now()
  },
}

module.exports = nextConfig
