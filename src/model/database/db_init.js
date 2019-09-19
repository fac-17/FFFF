// Independently run script, currently as npm run db_init
// that drop all project tables, rebuilds them according to schema and populates with random data
const runBuild = require("./db_build");

runBuild((err, res) => {
  if (err) {
    console.log("database creation error", err);
  } else {
    console.log("database created", res);
  }
});
