const Course = require("../models/Course");
const { mutipleMongooseToObject } = require("../../util/mongoses");
class SiteController {
  //[GET] /tin-tuc

  home(req, res, next) {

    Course.find({})
      .then((courses) => {
        // courses = courses.map(courses => courses.toObject());
        res.render("home", {
          courses: mutipleMongooseToObject(courses),
        });
      })
      .catch(next);
  }
  //[GET] /tin-tuc/:slug
  search(req, res) {
    res.render("search");
  }
}
module.exports = new SiteController();
