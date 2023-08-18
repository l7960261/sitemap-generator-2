const WebService = require("./pptr");
const Rules = require("./rules");
const Log = require("./log");
const config = require("./config");

(async () => {
  const data = await WebService.run(config.base);
  Log.log("Data received");
  const { links, imgs } = data;
  const newLinks = Rules.format(links);

  console.log(newLinks);
})();

