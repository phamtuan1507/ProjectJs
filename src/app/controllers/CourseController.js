const Course = require("../models/Course");
const { mongooseToObject } = require("../../util/mongoses");

class CourseController {
  //[GET] /tin-tuc/:slug
  show(req, res,next) {
    Course.findOne({ slug : req.params.slug })
    .then(courses => res.render('courses/show',{ courses: mongooseToObject(courses) }))
    .catch(next);
  }
  create(req, res, next)
  {
    res.render('courses/create')
  }
  store(req, res, next)
  {
    // res.json(req.body)
    const formData = req.body;
    formData.thumbnail = `https://img.youtube.com/vi/${req.body.videoId}/sddefault.jpg`;
    const course = new Course(formData);
    course.save()
    .then(() => res.redirect('/'))
    .catch(error => {
        
    })

    res.send('Course Send')
  }
}
module.exports = new CourseController();
