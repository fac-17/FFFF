exports.get = (req, res) => {
    const dummyData = [
        {supermarket: "Asda", rating: "mostly sourced locally"},
        {supermarket: "Tesco", rating: "mostly not sourced locally"},
        {supermarket: "Lidl", rating: "mostly sourced from abroad"}
    ];
    res.render("results", { dummyData });
    // res.send('hello results')
};