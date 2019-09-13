const { resultsArray } = require('../model/queries/resultsQuery');
exports.post = (req, res) => {

    const correctArray = Array.isArray(req.body.product) ? req.body.product : [req.body.product]; 
    const productIds = correctArray.map(Number);
    console.log(productIds);                                                        
    resultsArray(productIds)
        .then(result => {
            console.log(result)
            res.render("results", { result, back:"/select" });
        });
};