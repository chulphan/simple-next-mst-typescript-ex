const withTypescript = require("@zeit/next-typescript");

module.exports = withTypescript({
  distDir: "build",

  webpack(config) {
    return config;
  }
});
