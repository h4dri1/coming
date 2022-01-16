module.exports = {
    view: (req, res, next) => {
        const data = req.params;
        res.render('index', data);
    }
}