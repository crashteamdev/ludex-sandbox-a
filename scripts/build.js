const fs = require("node:fs");
fs.mkdirSync("dist", { recursive: true });
fs.copyFileSync("src/sum.js", "dist/sum.js");
console.log("built dist/sum.js");
