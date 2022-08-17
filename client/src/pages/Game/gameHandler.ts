import insertionSortHandler from "../../utils/GameHandlers/Insertion/insertionSortHandler";

const gameHandler = (gameInfo: GameQuestionListElement) => {
  switch (gameInfo.qTopic) {
    case "INSERTION":
      return insertionSortHandler(gameInfo);
    case "SELECTION":
      break;
    case "MERGE":
      break;
    case "QUICK":
      break;
    default:
      break;
  }
};

export default gameHandler;
