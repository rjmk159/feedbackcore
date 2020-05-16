'use strict';
var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var FeedbackSchema = new Schema({
  appName: {
    type: String,
    required: 'App name is required'
  },
  Created_date: {
    type: Date,
    default: Date.now
  },
  feedback: {
    type: String,
    required: 'feedback is required'
  },
  deviceName: {
    type: String,
    required: 'deviceName is required'
  },
  appId: {
    type: String,
    required: 'App Id is required'
  },
  email: {
    type: String,
    required: 'email is required'
  },
  country: {
    type: String,
    required: 'Country is required'
  },
});

module.exports = mongoose.model('Feedback', FeedbackSchema);