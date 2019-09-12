const { resultsArray } = require('../model/queries/resultsQuery');
exports.post = (req, res) => {
    // console.log(req.body);
    // const body = {
    //     product: ['1', '7', '8']
    // }

    const productIds = req.body.product.map(Number);
    console.log(productIds);
    resultsArray(productIds)
        .then(result => {
            console.log(result)
            res.render("results", { result });
        });


    // const dummyData = [
    //     { supermarket: "Asda", rating: "mostly sourced locally" },
    //     { supermarket: "Tesco", rating: "mostly not sourced locally" },
    //     { supermarket: "Lidl", rating: "mostly sourced from abroad" }
    // ];
    // res.render("results", { dummyData });
    // res.send('hello results')
};