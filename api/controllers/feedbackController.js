"use strict";

var mongoose = require("mongoose"),
  Feedback = mongoose.model("Feedback");

const _handleResponse = function (req, res, err, response) {
  if (err) {
    return res.status(err.statusCode || 400).json({
      status: "error",
      ok: false,
      code: err.code || "BadRequest",
      message: err.message || err,
      result: "",
    });
  }
  return res.status(200).json({
    status: "success",
    ok: true,
    code: 200,
    message: "",
    result: response,
  });
};

exports.list_all_feedbacks = function (req, res) {
  Feedback.find({}, function (err, feedback) {
    if (err) res.send(err);
    res.json(feedback);
  });
};

exports.create_a_feedback =  function async (req, res) {
  try {
    if (!req.query) {
      throw "payload data not found";
    }
    let new_feedback = new Feedback(req.query);

    new_feedback.save(function(err, feedback) {
      if (err)
        res.send(err);
      res.json(feedback);
    });
  } 
  catch (e) {
    return _handleResponse(req, res, e);
  }
};

exports.read_a_feedback = function (req, res) {
  Feedback.findById(req.params.feedbackId, function (err, feedback) {
    if (err) res.send(err);
    res.json(feedback);
  });
};

exports.update_a_feedback = function (req, res) {
  Feedback.findOneAndUpdate(
    { _id: req.params.feedbackId },
    req.body,
    { new: true },
    function (err, feedback) {
      if (err) res.send(err);
      res.json(feedback);
    }
  );
};

exports.delete_a_feedback = function (req, res) {
  Feedback.remove(
    {
      _id: req.params.feedbackId,
    },
    function (err, feedback) {
      if (err) res.send(err);
      res.json({ message: "Feedback successfully deleted" });
    }
  );
};
