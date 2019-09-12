const test = require('tape');
const { generator, getRandomInteger } = require('../model/data_generator/generator');
const { findRowsCountForProductsSupermarketsOriginsFunction } = require('../model/queries/findQueries');

test('Check that we\'re ready for gen testing', t => {
    t.assert(true, true, 'Must return true');
    t.assert(process.env.NODE_ENV, 'test', 'Must be in testing environment');
    t.end();
});

test('Check generator returns an array', t => {
    const actual = Array.isArray(generator(1, 2, 3));
    const expected = Array.isArray([]);
    t.deepEquals(expected, actual, 'Check gen returns an array');
    t.end();
});

test('Check generator returns an array with appropriate length', t => {
    const actual = generator(6, 5, 7).length;
    const expected = 30;
    t.deepEquals(expected, actual, 'Check gen returns an array');
    t.end();
});

test('Check random number gen returns an int between 1 and 4', t => {
    const actual = getRandomInteger(1, 4);
    const min = actual >= 1;
    const max = actual <= 4;
    t.equals(min, true, 'Check random number gen returns an int between 1 and 4');
    t.equals(max, true, 'Check random number gen returns an int between 1 and 4');
    t.end();
});

test('Check random number gen when run multimple times', t => {
    for (let i = 0; i < 100; i++) {
        const actual = getRandomInteger(1, 4);
        t.equals(actual, Math.floor(actual));
        t.equals(actual >= 1 && actual <= 4, true);
    }
    t.end()
})

test('Check if generator provides all the values', t => {
    const productNum = 2;
    const supermarketNum = 3;
    const originNum = 4;
    const actual = generator(productNum, supermarketNum, originNum);
    for (let i = 0; i < productNum; i++) {
        for (let j = 0; j < supermarketNum; j++) {
            const index = supermarketNum * i + j
            const product = actual[index][0];
            const supermarket = actual[index][1];
            const origin = actual[index][2];

            t.equals(product, i + 1, "Testing product");
            t.equals(supermarket, j + 1, "Testing supermarket");
            t.equals(origin >= 1 && origin <= originNum, true, "Testing origin");
        }
    }
    t.end();
});

test('Check findRowsCountForProductsSupermarketsOriginsFunction provides an array of 3 integers', t => {
    findRowsCountForProductsSupermarketsOriginsFunction()
        .then(res => {
            const actual = Array.isArray(res);
            t.deepEquals(actual, Array.isArray([]), 'Check findRowsCountForProductsSupermarketsOriginsFunction provides an array of 3 integers');
            t.end();
        })
        .catch(err => {
            t.error(err, "Unable to findRowsCountForProductsSupermarketsOriginsFunction");
            t.end();
        });
});