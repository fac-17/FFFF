const test = require("tape");
const runBuild = require("../model/database/db_build");
const { findAllFoodItems } = require("../model/queries/findQueries");

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

test("Check findAllFoodItems queries correctly", t => {
    findAllFoodItems((err, res) => {
        if(err) {
            t.error(err, "Unable to findAllFoodItems");
            t.end();
        } else {
            const expected = [{"Banana": "Fruit"}, {"Potato": "Vegetables"}, {"Sausages": "Meat"}, {"Apple": "Fruit"}];
            t.deepEquals(res, expected);
            t.end();
        }
    })
});