import { useState, useEffect, useCallback, useRef } from "react";
import { Grid, Button, Container, Paper, Box } from "@mui/material";
import gameQuestionList from "../../utils/gameQuestionList";
// import questionHandlerSort from "../../Algorithms/handler";
// import questionHandlerStructure from "../../StructureGame/handler";
// import algorithmInfoArray from "../../Algorithms/infoArray";
// import Answers from "./Answers/Answers";
// import Content from "./Content/Content";
// import createQuestionText from "./Question/dataStructureTime";
// import Question from "./Question/Question";
// import UserStatsTable from "./UserStatsTable/UserStatsTable";

const Game = () => {
  const randomIndex = Math.floor(Math.random() * gameQuestionList.length);
  const [gameStarted, setGameStarted] = useState(true);
  const [questionInfo, setQuestionInfo] = useState<GameQuestionListElement>(
    gameQuestionList[randomIndex],
  );

  const onGameStart = () => {
    setGameStarted(true);
  };

  const onGameEnd = () => {
    setGameStarted(false);
  };

  return gameStarted ? (
    <Grid container>
      <Grid item>{questionInfo.qType}</Grid>
      <Button variant="outlined" onClick={onGameEnd}>
        END GAME
      </Button>
    </Grid>
  ) : (
    <>
      <Button variant="outlined" onClick={onGameStart}>
        START GAME
      </Button>
    </>
  );
};

export default Game;
