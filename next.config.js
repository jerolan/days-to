const compose = require("lodash.flowright");
const withOffline = require("next-offline");
const withSourceMaps = require("@zeit/next-source-maps");
const bundleAnalyzer = require("@next/bundle-analyzer");

const nextConfig = {
  workboxOpts: {
    runtimeCaching: [
      {
        urlPattern: /^https?.*/,
        handler: "NetworkFirst",
        options: {
          cacheName: "offlineCache",
          expiration: {
            maxEntries: 200
          }
        }
      }
    ]
  },
  experimental: {
    async rewrites() {
      return [
        {
          source: "/service-worker.js",
          destination: "/_next/static/service-worker.js"
        }
      ];
    }
  }
};

const withBundleAnalyzer = bundleAnalyzer({
  enabled: process.env.ANALYZE === "true"
});

const withNextPlugins = compose(
  withOffline,
  withSourceMaps,
  withBundleAnalyzer
);

module.exports = withNextPlugins(nextConfig);
