'use strict';

const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let Questionnaire = new Schema({
  name : String,
  questions : [{type : Schema.Types.ObjectId, ref : 'Question'}],
	created : {type : Date, default : Date.now}
});

module.exports = Questionnaire = mongoose.model('Questionnaire', Questionnaire);
