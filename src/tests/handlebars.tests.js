const test = require("tape");
const runBuild = require("../model/database/db_build");
const app = require('../app');

test('Check results page is rendering handlebars correctly', t => {
    const result = app.render('results', (err, html) => {
        const actualStart = html.slice(0, 15);
        const expectedStart = '<!DOCTYPE html>';
        t.equal(actualStart, expectedStart);
        t.end();
    })
})
