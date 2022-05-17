const withPlugins = require('next-compose-plugins')
const withPWA = require('next-pwa')
const removeImports = require("next-remove-imports")();


const isDev = process.env.NODE_ENV !== 'production'

const nextConfig = {
  env: {
    API_URL: isDev ? 'http://localhost:8000' : 'https://api.example.com/v1/'
  },
  pwa: {
    dest: 'public',
    disable: isDev
  },
  presets: ["next/babel"],
  reactStrictMode: true,
}

module.exports =  withPlugins([], withPWA(nextConfig));

// , removeImports({
//   experimental: { esmExternals: "loose" }
// })
