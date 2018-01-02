'use strict';

const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let Answer = new Schema({
  questionId : String,
  question : String,
  answer : String
});

let Session = new Schema({
  id : String,
  questionnaire : [{type : Schema.Types.ObjectId, ref : 'Questionnaire'}],
  questions : [Answer],
	created : {type : Date, default : Date.now}
});

module.exports = Session = mongoose.model('Session', Session);
