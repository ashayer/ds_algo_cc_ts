import { shuffle } from "d3-array";

function insertionDirectTimeComplexity() {
  const rightAnswer = "n\u00B2";
  const wrongAnswers = shuffle(["n", "logn", "nlogn"]);

  const answerChoices = [{ isCorrect: true, answerContent: rightAnswer }];

  for (const wrongChoice of wrongAnswers) {
    answerChoices.push({ isCorrect: false, answerContent: wrongChoice });
  }

  const gameDisplayObject = {
    answerChoices,
    content: "Insertion Sort",
    question: "What is the time complexity of the algorithm below?",
  };

  return gameDisplayObject;
}

export default insertionDirectTimeComplexity;
