const express = require('express');
const router = express.Router();
const Quiz = require('../models/quiz');

//Getting all questions
router.get('/', async (req, res) => {
  const { quizName } = req.query;
  try {
    const quizQuestions = await Quiz.find({ name: quizName });
    res.status(200).json(quizQuestions);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

//Creating a question
router.post('/', async (req, res) => {
  const quiz = new Quiz(req.body);
  try {
    const newQuestion = await quiz.save();
    res.status(201).json(newQuestion);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

module.exports = router;
