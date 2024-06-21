/** @type {import('next').NextConfig} */
const { withSentryConfig } = require('@sentry/nextjs')
const withBundleAnalyzer = require('@next/bundle-analyzer')({
  enabled: process.env.ANALYZE === 'true',
  openAnalyzer: false,
})

const { createVanillaExtractPlugin } = require('@vanilla-extract/next-plugin')
const withVanillaExtract = createVanillaExtractPlugin()

const createNextIntlPlugin = require('next-intl/plugin')
const withNextIntl = createNextIntlPlugin()

const nextConfig = {
  webpack(config, { isServer }) {
    config.module.rules.push({
      test: /\.svg$/i,
      issuer: /\.[jt]sx?$/,
      use: ['@svgr/webpack'],
    })
    config.externals = [...config.externals, { canvas: 'canvas' }]
    return config
  },
  reactStrictMode: false,
  experimental: {
    appDir: true,
    esmExternals: 'loose',
  },
  swcMinify: true,
  compiler: {
    styledComponents: true,
  },
  images: {
    domains: [
      's3.ap-northeast-2.amazonaws.com',
      'stead-temporary.s3.ap-northeast-2.amazonaws.com',
      'stead-temporary.s3.amazonaws.com',
      'stead-data.s3.amazonaws.com',
      'stead-data.s3.ap-northeast-2.amazonaws.com',
      'sample.com',
      'cloudflare-ipfs.com',
    ],
  },
  sentry: {
    hideSourceMaps: true,
  },
}

const sentryWebpackPluginOptions = {
  silent: true,
  authToken: process.env.NEXT_PUBLIC_SENTRY_AUTH_TOKEN,
}

module.exports = withSentryConfig(
  withBundleAnalyzer(withNextIntl(withVanillaExtract(nextConfig))),
  sentryWebpackPluginOptions,
)
