const { resultsArray } = require('../model/queries/resultsQuery');

exports.get = (req, res) => {

    if (req.query.product === undefined) {
        res.render('error', { errorMessage: 'No items selected by user' });
    }
    else {
        const correctArray = Array.isArray(req.query.product) ? req.query.product : [req.query.product];
        const productIds = correctArray.map(Number);
        const queryString = productIds.map(id => "product=" + id).join("&")

        resultsArray(productIds)
            .then(result => {
                res.render("results", { result, queryString, back: "/select" });
            });
    }

    console.log(req.query)
    const correctArray = Array.isArray(req.query.product) ? req.query.product : [req.query.product];
    const productIds = correctArray.map(Number);
    console.log(productIds);
    resultsArray(productIds)
        .then(result => {
            console.log(result)
            res.render("results", { result, back: "/select" });
        });
};