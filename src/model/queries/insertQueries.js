const dbConnection = require('../database/db_connection');

//temporary object
const entries = [[1, 1, 1],
[1, 2, 2],
[1, 3, 2],
[2, 1, 1],
[2, 2, 2],
[2, 3, 2]];

const insertEntries = (entries) => {
    const insertPromises = entries.map(e => dbConnection.query(
        'INSERT INTO entries (product_id, supermarket_id, origin_id ) VALUES($1, $2, $3)',
        e
    ));
    return Promise.all(insertPromises);
}

module.exports = { insertEntries }