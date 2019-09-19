const dbConnection = require('../database/db_connection');

// returns data in the form [{product_id:2,pname:"Apple",cname:"Fruit"},...]
const findAllFoodItems = cb => {
    dbConnection.query(
        'SELECT products.id product_id, products.name pname, categories.name cname FROM products INNER JOIN categories ON products.category_id = categories.id;',
        (err, res) => {
            if (err) {
                cb(err);
            } else {
                cb(null, res.rows);
            }
        }
    )
}

// returns data in the form of [12,6,8]
const findRowsCountForProductsSupermarketsOriginsFunction = () => {
    const tableNames = ["products", "supermarkets", "origins"];
    const countPromises = tableNames.map(e => dbConnection.query(
        `SELECT COUNT (*) FROM ${e};`
    ));
    return Promise.all(countPromises);
}

module.exports = { findAllFoodItems, findRowsCountForProductsSupermarketsOriginsFunction }