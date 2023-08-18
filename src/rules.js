const config = require("./config");
const { base, crawlLevel } = config;
const baseUrlHashes = base.split("/").length;

const Rules = {
  format(urls) {
    // 1. exclude not base
    // 2. exclude hash
    // 3. exclude ignore crawlLevel
    // 4. exclude apk
    return urls
      .filter((url) => url.includes(base))
      .filter((url) => !url.includes("#"))
      .filter((url) => url.split("/").length < baseUrlHashes + crawlLevel)
      .filter((url) => !url.includes(".apk"));
  },
};

module.exports = Rules;
