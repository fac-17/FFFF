exports.get = (req, res) => {
    res.render("home", { home: true,  cssPath: '/css/home.css', pageTitle:"Food Miles" });
}

