const dbConnection = require('../database/db_connection');

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

// const findAllFoodItemsPromise = new Promise((resolve, reject) => {
//     dbConnection.query(
//         'SELECT products.id product_id, products.name pname, categories.name cname FROM products INNER JOIN categories ON products.category_id = categories.id;',
//         (err, res) => {
//             if (err) reject(err);
//             resolve(res.rows);
//         });
// });

const findRowsCountForProductsSupermarketsOriginsFunction = () => {
    const tableNames = ["products", "supermarkets", "origins"];
    const countPromises = tableNames.map(e => dbConnection.query(
        `SELECT COUNT (*) FROM ${e};`
    ));
    return Promise.all(countPromises);
}

module.exports = { findAllFoodItems, findRowsCountForProductsSupermarketsOriginsFunction }