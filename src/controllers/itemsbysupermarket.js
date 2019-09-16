const query=require('../model/queries/breakdownQuery').breakdownQuery
exports.get = (req, res) => {
    let productIds = req.query.product;
    productIds = typeof productIds === 'string' ? productIds = [productIds]: productIds;
    productIds = productIds.map(Number);
    query(productIds,Number(req.query.supermarket)).then(result=>{
        console.log(result.rows)
        res.render('itemsbysupermarket', {result:result.rows});
    });
}