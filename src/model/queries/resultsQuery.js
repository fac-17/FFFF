const dbConnection = require('../database/db_connection');

exports.resultsQuery = (productsIdArray)=>{
    const query=`SELECT
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
    JOIN flags ON flags.id = origins.flag_id
WHERE
    products.id IN (${productsIdArray.join(",")})
ORDER BY
    sname,score;`

    return dbConnection.query(query);
}

// returns a Promise that resolves to sorted array with objects [{sname:"Tesco",score:2.3333},{sname:"Sainsbury",score:3.5}]
exports.resultsArray=(productsIdArray)=>{
    const supermarkets={};
    return exports.resultsQuery(productsIdArray)
    .then(res=>res.rows.forEach(row=>{
        if (!supermarkets[row.sname]) {
            supermarkets[row.sname]={sname:row.sname,score:Number(row.score)}
        } else {
            supermarkets[row.sname].score+=Number(row.score);
        }
        // console.log(row.score,row.sname,supermarkets);
    })).then(()=>
        Object.values(supermarkets)
        .sort( (a,b) => a.score-b.score)
        .map( (supermarket)=>({sname:supermarket.sname,score:supermarket.score/productsIdArray.length}))
    ).catch(console.err)
}
