'use strict';
module.exports = function(app) {
  var feedback = require('../controllers/feedbackController');

  // todoList Routes
  app.route('/feedback')
    .get(feedback.list_all_feedbacks)
    .post(feedback.create_a_feedback);


  app.route('/feedbacks/:feedbackId')
    .get(feedback.read_a_feedback)
    .put(feedback.update_a_feedback)
    .delete(feedback.delete_a_feedback);
};
