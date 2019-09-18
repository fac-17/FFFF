const test = require("tape");
const app = require('../app');

test('Check home page is rendering handlebars', t => {
    app.render('home', (err, html) => {
        const actual = html.slice(0, 15);
        const expected = '<!DOCTYPE html>';
        t.equal(actual, expected);
        t.end();
    })
})

test('Check select page is rendering handlebars', t => {
    app.render('select', (err, html) => {
        const actual = html.slice(0, 15);
        const expected = '<!DOCTYPE html>';
        t.equal(actual, expected);
        t.end();
    })
})



test('Check results page is rendering handlebars correctly', t => {
    app.render('results', (err, html) => {
        const actualStart = html.slice(0, 15);
        const expectedStart = '<!DOCTYPE html>';
        t.equal(actualStart, expectedStart);
        t.end();
    })
})

test('Check itemsbysupermarket page is rendering handlebars', t => {
    app.render('itemsbysupermarket', (err, html) => {
        const actual = html.slice(0, 15);
        const expected = '<!DOCTYPE html>';
        t.equal(actual, expected);
        t.end();
    })
})