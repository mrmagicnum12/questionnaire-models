'use strict';

const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let Session = new Schema({
  id : String,
  questionnaire : [{type : Schema.Types.ObjectId, ref : 'Questionnaire'}],
  questions : [{questionId : String, answerId : String}],
	created : {type : Date, default : Date.now}
});

module.exports = Session = mongoose.model('Session', Session);
