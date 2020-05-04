import htmlQuiz from '../data/dummy.json';
import cssQuiz from '../data/cssQuiz.json';
import jsQuiz from '../data/jsQuiz.json';
import { shuffle } from '../helpers/shuffle';

const data = { html: htmlQuiz, css: cssQuiz, js: jsQuiz };

export const retrieveData = quizName => {
  const quizData = data[quizName];
  quizData.forEach(question => shuffle(question.answers));
  shuffle(quizData);
  return quizData;
};
