const dbConnection = require("../database/db_connection");

exports.resultsQuery = productsIdArray => {
  const query = `
    SELECT supermarkets.name sname, supermarkets.id supermarket_id,scoring.score 
     FROM
      (SELECT avg(origins.score) score, supermarkets.id 
        FROM entries 
        JOIN origins ON origins.id = entries.origin_id 
        JOIN supermarkets ON supermarkets.id = entries.supermarket_id 
        WHERE entries.product_id in (${productsIdArray.join(",")}) 
        GROUP BY supermarkets.id 
       ) AS scoring 
      JOIN supermarkets ON supermarkets.id=scoring.id  ORDER BY score
    `;
  return dbConnection.query(query);
};

// returns a Promise that resolves to sorted array with objects [{sname:"Tesco",score:2.3333},{sname:"Sainsbury",score:3.5}]
exports.resultsArray = productsIdArray => {
  return exports.resultsQuery(productsIdArray)
    .then(res=>res.rows)

};
