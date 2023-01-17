const testFolder = "./uploads";
const fs = require("fs");
const table = [];

fs.readdirSync(testFolder).forEach((file) => {
  table.push(file);
});
 
module.exports = table;
