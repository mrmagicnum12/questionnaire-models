'use strict';

const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let Question = new Schema({
  questionnaire : {type : Schema.Types.ObjectId, ref : 'Questionnaire'},
  question : String,
  answers : [{answer : String, selected : Boolean}],
	created : {type : Date, default : Date.now}
});

module.exports = Question = mongoose.model('Question', Question);
