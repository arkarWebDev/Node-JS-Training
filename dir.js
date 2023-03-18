const fs = require("fs");

if (!fs.existsSync("./log")) {
  fs.mkdir("./log", (err) => {
    if (err) throw err;
  });
  console.log("folder found !");
}

if (fs.existsSync("./log")) {
  fs.rmdir("./log", (err) => {
    if (err) throw err;
  });
  console.log("destroyed !!!");
}
