const test = require('tape');
const { generator } = require('../model/data_generator/generator');

test('Check that we\'re ready for gen testing', t => {
    t.assert(true, true, 'Must return true');
    t.assert(process.env.NODE_ENV, 'test', 'Must be in testing environment');
    t.end();
});

test('Check gen returns an array', t => {
    const expected = typeof [];
    const actual = typeof generator();
    t.deepEquals(expected, actual, 'Check gen returns an array');
    t.end();
});