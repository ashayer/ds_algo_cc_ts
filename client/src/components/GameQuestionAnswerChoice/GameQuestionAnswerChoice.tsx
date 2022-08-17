import React from "react";

const GameQuestionAnswerChoice = ({ answerChoices }: any) => {
  return (
    <div>
      {answerChoices &&
        answerChoices?.map((answerChoice: any, index: number) => (
          <div key={index}>{answerChoice.answerContent}</div>
        ))}
    </div>
  );
};

export default GameQuestionAnswerChoice;
