require('dotenv').config();
const { sizes } = require('./blocks/Image/sizes');

module.exports = {
  publicRuntimeConfig: {
    SERVER_URL: process.env.PAYLOAD_PUBLIC_SERVER_URL,
  },
  images: {
    domains: [
      'oracle3.stuy.world',
      // Your domain(s) here
    ],
    deviceSizes: sizes,
  },
};
