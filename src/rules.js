const config = require("./config");

const Rules = {
  format(urls) {
    // 1. exclude not base
    // 2. exclude hash
    return urls
      .filter((url) => url.includes(config.base))
      .filter((url) => !url.includes("#"));
  },
};

module.exports = Rules;
