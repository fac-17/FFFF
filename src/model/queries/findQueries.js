const dbConnection = require('../database/db_connection');

const findAllFoodItems = cb => (
dbConnection.query(
    'SELECT products.name, categories.name FROM products INNER JOIN categories ON products.category_id = categories.id;',
    
)

module.exports = { findAllFoodItems }