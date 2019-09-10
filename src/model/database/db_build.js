const dbConnection = require("./db_connection");
const fs = require("fs");
const path = require("path");

const buildLink = path.join(__dirname, "db_build.sql");

const sql = fs.readFileSync(buildLink).toString();

const runBuild = cb => dbConnection.query(sql, cb);
module.exports = runBuild;
