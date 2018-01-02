'use strict';

const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let Answer = new Schema({
  questionId : String,
  question : String,
  answer : String
});

let Question = new Schema({
  questionnaire : {type : Schema.Types.ObjectId, ref : 'Questionnaire'},
  question : String,
  answers : [Answer],
	created : {type : Date, default : Date.now}
});

module.exports = Question = mongoose.model('Question', Question);
