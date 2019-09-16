const dbConnection = require('../database/db_connection');


// returns a Promise that resolves to results from db with .rows as rows values
exports.breakdownQuery = (productsIdArray,supermarket_id)=>{
    const query=`
    SELECT 
     products.name pname, 
     supermarkets.name sname, 
     origins.name oname, 
     origins.score, 
     flags.emoji_code 
 FROM 
     products 
     JOIN entries ON entries.product_id = products. id 
     JOIN supermarkets ON supermarkets.id = entries.supermarket_id 
     JOIN origins ON origins.id = entries.origin_id 
     JOIN flags ON flags.id = origins.flag_id WHERE products.id IN (${productsIdArray.join(",")}) AND 
     entries.supermarket_id = ${supermarket_id}`

    return dbConnection.query(query);
}

