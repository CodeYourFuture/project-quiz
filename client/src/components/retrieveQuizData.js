export const getData = quizName =>
  fetch(`/quizzes?quizName=${quizName}`).then(res => res.json());
