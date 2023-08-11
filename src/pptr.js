const puppeteer = require("puppeteer");

const WebService = {
  async run(url) {
    try {
      const browser = await puppeteer.launch({ headless: "new" });
      const page = await browser.newPage();
      // Navigate the page to a URL
      await page.goto(url, { waitUntil: "networkidle0" });
      // Set screen size
      await page.setViewport({ width: 1080, height: 1024 });
      const links = await page.$$eval("a", (collection) =>
        collection.map((ele) => ele.href)
      );
      const imgs = await page.$$eval("img", (collection) =>
        collection.map((ele) => ele.src)
      );

      await browser.close();

      return { links, imgs };
    } catch (error) {
      return { links: [], imgs: [] };
    }
  },
};

module.exports = WebService;
