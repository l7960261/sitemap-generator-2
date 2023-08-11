const pptr = require("./pptr");

(async () => {
  const data = await pptr.run("https://nohu99.org/");
  console.log(data);
})();
