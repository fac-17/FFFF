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
        .expect('Content-Type', /html/)
        .end((err) => {
            t.error(err, "/ works");
            t.end();
        });
})

test('Check that the select route is working', t => {
    supertest(app)
        .get('/select')
        .expect(200)
        .expect('Content-Type', /html/)
        .end((err) => {
            t.error(err, "/select does work");
            t.end()
        })
})
test('Check that the results route is working', t => {
    supertest(app)
        .get('/results?product=1')
        .expect(200)
        .expect('Content-Type', /html/)
        .end((err) => {
            t.error(err, '/results does work');
            t.end();
        })
})

test('Check 404 route works', t => {
    supertest(app)
        .get('/jikuhygtf')
        .expect(404)
        .expect('Content-Type', /html/)
        .end((err) => {
            t.error(err, '404 route works');
            t.end();
        });
});

test('Check 500 route works', t => {
    supertest(app)
    .get('/dummy')
        .expect(500)
        .expect('Content-Type', /html/)
        .end((err) => {
            t.error(err, '500 route works');
            t.end();
        });
})