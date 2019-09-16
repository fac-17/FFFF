exports.get = (req, res) => {
    let productIds = req.query.product;
    productsIds = typeof productIds === 'string' ? productIds = [productIds]: productIds;
    productsIds = productsIds.map(Number);
    res.render('itemsbysupermarket', {
        productIds,
        supermarket: Number(req.query.supermarket)
    });
}