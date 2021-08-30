/* eslint-disable max-len */

export const fetchQuestions = async () => {
  const res = await fetch(
    'https://techwizquiz-dev.herokuapp.com/api/v1/questions'
  );
  const json = await res.json();

  return json;

  // return json.map(({ questionId, level, questionTitle, questionText, answer, a, b, c, d, explanation, language }) => ({
  //   questionId,
  //   level,
  //   questionTitle,
  //   questionText,
  //   answer,
  //   a,
  //   b,
  //   c,
  //   d,
  //   explanation,
  //   language,
  // }));
};




export const fetchRandomQuestions = async (questionArr) => {


  const random = Math.floor(Math.random() * questionArr.length);

  const res = await fetch(
    `https://techwizquiz-dev.herokuapp.com/api/v1/questions/${random}`
  );
  return res.json();
};


