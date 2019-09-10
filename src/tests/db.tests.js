const test = require("tape");
const runBuild = require("../model/database/db_build");

test("Check that we're ready for database testing", t => {
  t.assert(true, true, "Must return true");
  t.assert(process.env.NODE_ENV, "test", "Must be in testing environment");
  t.end();
});

test("Check database build is successful", t => {
  runBuild((err) => {
    if (err) {
      t.error(err, "Database build failed");
      t.end();
    } else {
      t.pass("Database build passing");
      t.end();
    }
  });
});
