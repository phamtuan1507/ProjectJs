const Course = require("../models/Course");
const { mutipleMongooseToObject } = require("../../util/mongoses");
class MeController {
  //[GET] /stored/courses
  stored(req, res, next) {
    Course.find({})
    .then((courses) => {
      // courses = courses.map(courses => courses.toObject());
      res.render("me/stored-courses", {
        courses: mutipleMongooseToObject(courses),
      });
    })
    .catch(next);
  }
}
module.exports = new MeController();
