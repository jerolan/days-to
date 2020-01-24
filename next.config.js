const withOffline = require("next-offline");

const nextConfig = {
  target: "serverless",
  exportTrailingSlash: true,
  exportPathMap: function() {
    return {
      "/": { page: "/" },
      "/events": { page: "/event" }
    };
  }
};

module.exports = withOffline(nextConfig);
