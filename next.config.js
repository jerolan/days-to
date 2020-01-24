const withOffline = require("next-offline");

const nextConfig = {
  target: "serverless",
  exportTrailingSlash: true,
  exportPathMap: function() {
    return {
      "/": { page: "/" }
    };
  }
};

module.exports = withOffline(nextConfig);
