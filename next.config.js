const withOffline = require("next-offline");

const nextConfig = {
  target: "serverless",
  exportTrailingSlash: true,
  exportPathMap: function() {
    return {
      "/": { page: "/" },
      "/events": { page: "/event" }
    };
  },
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

module.exports = withOffline(nextConfig);
