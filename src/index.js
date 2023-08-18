const WebService = require("./pptr");
const Rules = require("./rules");
const Log = require("./log");
const XMLService = require("./xml");
const config = require("./config");

const R = require('ramda');

const pending = [];
const completed = [];
let counter = 0;

(async function () {
  pending.push(config.base);
  await crawl();
  XMLService.createXML(completed); // 這個產出的檔案是不完整的
})();

async function crawl() {
  while (pending.length > 0) {
    const url = pending.shift();
    Log.log(`Queue url: ${url}`);

    counter++;
    Log.log(`Url queue - ${counter}`);
    completed.push(url);

    const data = await WebService.run(url);
    Log.log(`Data received by ${url}`);
    const { links, imgs } = data;
    const newLinks = Rules.format(links);
    queue(newLinks);
  }
}

// 整理資訊
function queue(urls) {
  // removeCompleted
  // removePending
  // uniq
  const removeCompleted = R.without(completed, urls);
  const removePending = R.without(pending, removeCompleted);
  const uniqResult = R.uniq(removePending);
  pending.push(...uniqResult);
  Log.log(pending)
  crawl();
}