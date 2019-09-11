const dbConnection = require('../database/db_connection');

const findAllFoodItems = cb => {
    dbConnection.query(
        'SELECT products.name pname, categories.name cname FROM products INNER JOIN categories ON products.category_id = categories.id;',
        (err, res) => {
            if (err) {
                cb(err);
            } else {
                cb(null, res.rows);
            }
        }
    )
}

const findAllFoodItemsPromise = new Promise ((resolve, reject) => {
    dbConnection.query(
        'SELECT products.name pname, categories.name cname FROM products INNER JOIN categories ON products.category_id = categories.id;',
        (err, res) => {
            if (err) reject(err);
            resolve(res.rows);
        });
});

module.exports = { findAllFoodItems, findAllFoodItemsPromise }