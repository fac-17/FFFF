const dbConnection = require("./db_connection");
const { populateEntriesTable } = require('../data_generator/generator');
const fs = require("fs");
const path = require("path");

const buildLink = path.join(__dirname, "db_build.sql");

const sql = fs.readFileSync(buildLink).toString();

// drops all tables and rebuilds them using db_dbuild.sql, then populates the entries data
const runBuild = cb => dbConnection.query(sql, (err, res) => {
    populateEntriesTable()
    .then(() => cb(err, res));
});
module.exports = runBuild;
