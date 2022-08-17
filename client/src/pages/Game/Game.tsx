import { useState, useEffect, useCallback, useRef } from "react";
import { Grid, Button, Container, Paper, Box } from "@mui/material";
import gameQuestionList from "../../utils/gameQuestionList";
import gameHandler from "./gameHandler";
import GameQuestionAnswerChoice from "../../components/GameQuestionAnswerChoice/GameQuestionAnswerChoice";
import GameQuestionContent from "../../components/GameQuestionContent/GameQuestionContent";
import GameQuestionText from "../../components/GameQuestionText/GameQuestionText";

const Game = () => {
  const randomIndex = Math.floor(Math.random() * gameQuestionList.length);
  const [tempIndex, setTempIndex] = useState(0);
  const [gameStarted, setGameStarted] = useState(true);
  const [questionInfo, setQuestionInfo] = useState<GameQuestionInfo>(gameQuestionList[0]);

  const [questionDisplay, setQuestionDisplay] = useState<any>();

  const onGameStart = () => {
    setGameStarted(true);
    gameHandler(questionInfo);
  };

  const onGameEnd = () => {
    setGameStarted(false);
  };

  useEffect(() => {
    //! remove when done and call function on game start button
    setQuestionDisplay(gameHandler(questionInfo));
  }, [tempIndex]);

  return gameStarted && questionDisplay ? (
    <Grid container>
      <Grid item>
        <GameQuestionText questionText={questionDisplay.question} />
      </Grid>
      <Grid item>
        <GameQuestionContent
          questionInfo={questionInfo}
          questionContent={questionDisplay.content}
        />
      </Grid>
      <Grid item>
        <GameQuestionAnswerChoice
          questionInfo={questionInfo}
          answerChoices={questionDisplay.answerChoices}
        />
      </Grid>
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
