const mongoose = require("mongoose");
const Schema = mongoose.Schema;

let Quiz = new Schema({
  name: { type: String, required: true },
  question: {
    text: { type: String, required: true },
    qType: { type: String, required: true },
    answers: [
      {
        text: { type: String, required: true },
        isCorrect: { type: Boolean, required: true },
      },
    ],
  },
});

const CyfQuiz = mongoose.model("CyfQuiz", Quiz);

module.exports = CyfQuiz;
