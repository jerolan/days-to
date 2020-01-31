const dotenv = require("dotenv");

dotenv.config();

module.exports = {
  SENTRY_DNS: process.env.SENTRY_DNS
};
