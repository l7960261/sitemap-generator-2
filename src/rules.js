const config = require("./config");

const Rules = {
  format(urls) {
    // 1. exclude hash
    // 2. exclude not base
    return urls
      .filter((url) => !url.includes("#"))
      .filter((url) => url.includes(config.base));
  },
};

module.exports = Rules;
