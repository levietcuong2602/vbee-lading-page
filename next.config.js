require('dotenv').config();

const isProd = process.env.NODE_ENV === 'production';

module.exports = {
  env: {
    API_URL: process.env.API_URL,
    CRM_URL: process.env.CRM_URL,
    PORT: process.env.PORT,
    IAM_URL: process.env.IAM_URL,
    IAM_REALM: process.env.IAM_REALM,
    IAM_CLIENT_ID: process.env.IAM_CLIENT_ID,
    TTS_WEBSOCKET_URL: process.env.TTS_WEBSOCKET_URL,
    GTM_ID: process.env.GTM_ID,
    CDN_URL: process.env.CDN_URL,
  },
  reactStrictMode: true,
  assetPrefix: isProd ? process.env.CDN_URL : '',
};
