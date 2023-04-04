class NewsController {
    //[GET] /tin-tuc
    index(req, res) {
        res.render('news');
    }
    //[GET] /tin-tuc/:slug
    show(req, res)
    {
        res.send('NEWS DETAIL')
    }
}
module.exports = new NewsController;