import insertionSortHandler from "../../utils/GameHandlers/Insertion/insertionSortHandler";

const gameHandler = (gameInfo: GameQuestionInfo) => {
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
