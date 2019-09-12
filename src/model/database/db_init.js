const runBuild = require("./db_build");

runBuild((err, res) => {
  if (err) {
    console.log("database creation error", err);
  } else {
    console.log("database created", res);
  }
});
