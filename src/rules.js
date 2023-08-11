const Rules = {
  format(urls) {
    return urls
      .filter((url) => !url.includes("#"))
      .filter((url) => url.includes("https://nohu99.org/"));
  },
};

module.exports = Rules;
