'use strict';

const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const Question = new Schema({
  question : String,
  answers : [{answer : String, selected : Boolean}],
	created : {type : Date, default : Date.now}
});

module.exports = Question = mongoose.model('Question', Question);
