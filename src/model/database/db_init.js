const runBuild = require("./db_build");
const { populateEntriesTable } = require('../data_generator/generator');

runBuild((err, res) => {
  if (err) {
    console.log("database creation error", err);
  } else {
    populateEntriesTable();
    console.log("database created", res);
  }
});
