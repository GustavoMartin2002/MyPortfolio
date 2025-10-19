const path = require('path');

const nextConfig = {
  /* config options here */
  // https://drive.google.com/uc?export=view&id=
  outputFileTracingRoot: path.join(__dirname, '../../'),
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'drive.google.com',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: '**.googleusercontent.com',
        pathname: '/**',
      },
    ]
  }
};

module.exports = nextConfig;