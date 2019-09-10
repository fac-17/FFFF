const test = require('tape');
const supertest = require('supertest');
const app = require('../app');

test('Check that we\'re ready for router testing', t => {
    t.assert(true, true, 'Must return true');
    t.assert(process.env.NODE_ENV, 'test', 'Must be in testing environment');
    t.end();
});

test('Check that the home route is working', t => {
    supertest(app)
        .get('/')
        .expect(200)
        .end((err) => {
            t.error(err);
            t.end();
        });
})