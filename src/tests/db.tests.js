const test = require("tape");
const runBuild = require("../model/database/db_build");
const { findAllFoodItems} = require("../model/queries/findQueries");
const {resultsQuery} = require("../model/queries/resultsQuery")

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
        if (err) {
            t.error(err, "Unable to findAllFoodItems");
            t.end();
        } else {
            const expected = [
                { product_id:1,pname: 'Bananas', cname: 'Fruit' },
                { product_id:2,pname: 'Potatoes', cname: 'Vegetables' },
                { product_id:3,pname: 'Sausages', cname: 'Meat' },
                { product_id:4,pname: 'Apples', cname: 'Fruit' }
            ];
            t.deepEquals(res.slice(0,4), expected);
            t.end();
        }
    })
});



test("Check if resultsQuery returns items in order",t=>{
    resultsQuery([1,3,4,5,6,7]).then(results=>{
        let currentScore = 0;
        results.rows.forEach( row=>{
            t.equal(row.score>=currentScore,true,"Next score is more then currnet");
            currentScore=row.score;
        })
        t.end();
    })
})