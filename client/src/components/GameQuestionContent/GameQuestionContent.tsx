import React from "react";

const DragContent = ({ questionContent }: any) => {
  return (
    <div>
      {questionContent?.map((question: any, index: number) => (
        <div key={index}>{question.lineContent}</div>
      ))}
    </div>
  );
};

const GameQuestionContent = ({ questionInfo, questionContent }: any) => {
  if (questionInfo.qType === "DRAG-CODE" || questionInfo.qType === "DRAG-ARRAY-BARS") {
    return <DragContent questionContent={questionContent} />;
  }
  return <div>{questionContent}</div>;
};

export default GameQuestionContent;
