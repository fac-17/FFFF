const dbConnection = require('../database/db_connection');

const dropEntries = () => {
    return dbConnection.query(
        'DELETE FROM entries;'
    );
}

module.exports = { dropEntries }