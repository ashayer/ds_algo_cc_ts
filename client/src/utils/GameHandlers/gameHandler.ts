import insertionSortHandler from "./Insertion/insertionSortHandler";
import selectionSortHandler from "./Selection/selectionSortHandler";

const gameHandler = (gameInfo: GameQuestionInfo) => {
  switch (gameInfo.qTopic) {
    case "INSERTION":
      return insertionSortHandler(gameInfo);
    case "SELECTION":
      return selectionSortHandler(gameInfo);
    case "MERGE":
      return insertionSortHandler(gameInfo);
    case "QUICK":
      return insertionSortHandler(gameInfo);
    default:
      return insertionSortHandler(gameInfo);
  }
};

export default gameHandler;
