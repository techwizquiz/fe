const questionRandomizer = (questionArr) => {
  // pick random object from array depending on length of array
  // return random question
  const randomQuestion = Math.floor(Math.random() * questionArr.length);

  return randomQuestion;
};

export default questionRandomizer;
