import insertionSortHandler from "../../utils/GameHandlers/Insertion/insertionSortHandler";

const gameHandler = (gameInfo: GameQuestionInfo) => {
  switch (gameInfo.qTopic) {
    case "INSERTION":
      return insertionSortHandler(gameInfo);
    case "SELECTION":
      return insertionSortHandler(gameInfo);
    case "MERGE":
      return insertionSortHandler(gameInfo);
    case "QUICK":
      return insertionSortHandler(gameInfo);
    default:
      return insertionSortHandler(gameInfo);
  }
};

export default gameHandler;
