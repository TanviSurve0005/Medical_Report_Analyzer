const nextConfig = {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  webpack: (config: { externals: string[]; }, { isServer }: any) => {
    if (isServer) {
      config.externals.push("onnxruntime-node");
    }
    return config;
  },
};

module.exports = nextConfig;
