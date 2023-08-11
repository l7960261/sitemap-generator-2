const config = require('./config')

const Rules = {
  format(urls) {
    return urls
      .filter((url) => !url.includes("#"))
      .filter((url) => url.includes(config.base));
  },
};

module.exports = Rules;
