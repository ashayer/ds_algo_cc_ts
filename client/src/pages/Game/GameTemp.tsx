import { useState, useEffect, useCallback } from "react";
import { Grid, Button } from "@mui/material";
import gameQuestionList from "../../utils/gameQuestionList";
import gameHandler from "../../utils/GameHandlers/gameHandler";
import GameQuestionAnswerChoice from "../../components/GameQuestionAnswerChoice/GameQuestionAnswerChoice";
import GameQuestionContent from "../../components/GameQuestionContent/GameQuestionContent";
import GameQuestionText from "../../components/GameQuestionText/GameQuestionText";

const GameTemp = () => {
  const [gameStarted, setGameStarted] = useState(false);
  const [questionInfo, setQuestionInfo] = useState<GameQuestionInfo>(gameQuestionList[0]);
  const [questionDisplay, setQuestionDisplay] = useState<GameDisplayInfo>();
  const [counter, setCounter] = useState<number>(0);

  const onGameStart = () => {
    const randomIndex = Math.floor(Math.random() * 7);
    setQuestionInfo(gameQuestionList[randomIndex]);
    setGameStarted(true);
  };
  const onGameEnd = () => {
    setGameStarted(false);
  };

  const generateNextQuestion = useCallback(() => {
    const randomIndex = Math.floor(Math.random() * 7);
    setQuestionInfo(gameQuestionList[randomIndex]);
    setCounter((prevCounter) => prevCounter + 1);
  }, []);

  useEffect(() => {
    setQuestionDisplay(gameHandler(questionInfo));
  }, [questionInfo]);
  return gameStarted && questionDisplay ? (
    <Grid container>
      {counter}
      <Button onClick={() => generateNextQuestion()}>ASDASDASD</Button>
      <Grid item>
        <GameQuestionText questionDisplay={questionDisplay} />
      </Grid>
      <Grid item>
        <GameQuestionContent questionDisplay={questionDisplay} />
      </Grid>
      <Grid item>
        <GameQuestionAnswerChoice questionDisplay={questionDisplay} />
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

export default GameTemp;
