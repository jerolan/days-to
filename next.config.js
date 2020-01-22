module.exports = {
  target: "serverless",
  exportTrailingSlash: true,
  exportPathMap: function() {
    return {
      "/": { page: "/" }
    };
  }
};
