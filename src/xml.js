const fs = require("fs");
const Log = require("./log");

const XMLService = {
  createXML(links) {
    let str = `
    <?xml version="1.0" encoding="UTF-8"?>
    <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
    `;

    links.forEach((url) => {
      str =
        str +
        `<url>
      <loc>${url}</loc>
      <lastmod>2022-08-18</lastmod>
      </url>`;
    });

    str = str + `</urlset>`;

    Log.log(`Create sitemap start`);
    fs.writeFileSync("./sitemap.xml", str, "utf-8");
    Log.log(`Create sitemap end`);
  },
};

module.exports = XMLService;
