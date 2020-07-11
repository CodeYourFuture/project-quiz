const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let QuizSchema = new Schema({
  name: { type: String, required: true },
  text: { type: String, required: true },
  qType: { type: String, required: true },
  answers: [
    {
      _id: { type: Number, required: true },
      text: { type: String, required: true },
      isCorrect: { type: Boolean, required: true },
    },
  ],
});

const Quiz = mongoose.model('Quiz', QuizSchema);

module.exports = Quiz;
