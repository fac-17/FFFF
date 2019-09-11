exports.get = (req, res) => {
    // get from the db
    const dummyData = ['banana', 'apple','orange'];
    res.render("select", { dummyData});
};