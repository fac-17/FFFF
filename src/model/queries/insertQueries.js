const dbConnection = require('../database/db_connection');

const insertEntries = (entries) => {
    const insertPromises = entries.map(e => dbConnection.query(
        'INSERT INTO entries (product_id, supermarket_id, origin_id ) VALUES($1, $2, $3)',
        e
    ));
    return Promise.all(insertPromises);
}

module.exports = { insertEntries }