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

module.exports = router;
