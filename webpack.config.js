module.exports = {
  webpack(config) {
    // Handle .node files
    config.module.rules.push({
      test: /\.node$/,
      use: "file-loader",
    });

    return config;
  },
};
