const Course = require("../models/Course");
const { mongooseToObject } = require("../../util/mongoses");

class CourseController {
  //[GET] /courses/show
  show(req, res, next) {
    Course.findOne({ slug: req.params.slug })
      .then(courses => res.render('courses/show', { courses: mongooseToObject(courses) }))
      .catch(next);
  }
  //[GET] /courses/create
  create(req, res, next) {
    res.render('courses/create')
  }
  //[GET] /courses/store
  store(req, res, next) {
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
  //[GET] /courses/:id/edit
  edit(req, res, next) {
    Course.findById(req.params.id)
      .then(courses => res.render('courses/edit', { courses: mongooseToObject(courses) }))
      .catch(next);

  }
  //[PUT] /courses/:id
  update(req, res, next) {
    Course.updateOne({
      _id: req.params.id,
    }, req.body)
      .then(() => res.redirect('/me/stored/courses'))
      .catch(next);
  }
  //[DELETE] /courses/:id
  delete(req, res, next) {
    Course.deleteOne({
      _id: req.params.id,
    })
      .then(() => res.redirect('back'))
      .catch(next);
  }
}
module.exports = new CourseController();
