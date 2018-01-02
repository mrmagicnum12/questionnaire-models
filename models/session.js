'use strict';

const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const Session = new Schema({
  id : String,
  questionnaire : [{type : Schema.Types.ObjectId, ref : 'Questionnaire'}],
  questions : [{id : String, question : String, answer : String}],
	created : {type : Date, default : Date.now}
});

module.exports = Session = mongoose.model('Session', Session);
