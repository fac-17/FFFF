const dbConnection = require("./db_connection");
const { populateEntriesTable } = require('../data_generator/generator');
const fs = require("fs");
const path = require("path");

const buildLink = path.join(__dirname, "db_build.sql");

const sql = fs.readFileSync(buildLink).toString();

const runBuild = cb => dbConnection.query(sql, (err, res) => {
    populateEntriesTable()
    .then(resolve => cb(err, res));
});
module.exports = runBuild;
