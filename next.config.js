const TerserPlugin = require('terser-webpack-plugin');

module.exports = {
  reactStrictMode: true,
  images: {
    unoptimized: true,
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'wp23.cryscampus.com',
        port: '',
        pathname: '/**',
      },
    ],
  },
  rewrites: async () => [
    {
      source: "/public/supersale/index.html",
      destination: "/pages/api/index.js",
    },
    {
      source: "/public/topecommerce/index.html",
      destination: "/pages/api/ecommerce.js",
    },
  ],
  webpack: (config, { isServer }) => {
    if (!isServer) {
      config.optimization.minimizer = [new TerserPlugin()];

      config.optimization.splitChunks = {
        chunks: 'all',
        cacheGroups: {
          styles: {
            name: 'styles',
            test: /\.css$/,
            chunks: 'all',
            enforce: true,
          },
        },
      };
    }
    return config;
  },
};
