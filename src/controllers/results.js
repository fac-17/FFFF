const { resultsArray } = require('../model/queries/resultsQuery');
exports.get = (req, res) => {
    console.log(req.query)
    const correctArray = Array.isArray(req.query.product) ? req.query.product : [req.query.product]; 
    const productIds = correctArray.map(Number);
    console.log(productIds);                                                        
    resultsArray(productIds)
        .then(result => {
            console.log(result)
            res.render("results", { result });
        });
};