export const getData = quizName => {
  return fetch(`/quizzes?quizName=${quizName}`).then(res => res.json());
};
