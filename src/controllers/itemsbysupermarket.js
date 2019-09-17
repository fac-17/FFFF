const query = require('../model/queries/breakdownQuery').breakdownQuery
exports.get = (req, res) => {
    let productIds = req.query.product;
    productIds = typeof productIds === 'string' ? [productIds] : productIds;
    productIds = productIds.map(Number);
    query(productIds, Number(req.query.supermarket)).then(result => {
        res.render('itemsbysupermarket', {
            result: result.rows, 
            cssPath: '/css/itemsbysupermarket.css',
            back: `${req.url.split('itemsbysupermarket').join('results')}`,
            supermarket: result.rows[0].sname
        });
    });
}