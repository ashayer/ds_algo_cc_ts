import { useState, useRef } from "react";
import { Grid, Button, Container, Paper, Box } from "@mui/material";
import gameQuestionList from "../../utils/gameQuestionList";
import gameHandler from "../../utils/GameHandlers/gameHandler";
import GameQuestionAnswerChoice from "../../components/GameQuestionAnswerChoice/GameQuestionAnswerChoice";
import GameQuestionContent from "../../components/GameQuestionContent/GameQuestionContent";
import GameQuestionText from "../../components/GameQuestionText/GameQuestionText";

const Game = () => {
  const [gameStarted, setGameStarted] = useState(false);
  const questionInfo = useRef<GameQuestionInfo>(gameQuestionList[0]);
  const questionDisplay = useRef<GameDisplayInfo>();
  const [counter, setCounter] = useState<number>(0);
  const [timer, setTimer] = useState<number>(0);

  const onGameStart = () => {
    const randomIndex = Math.floor(Math.random() * 7);
    questionInfo.current = gameQuestionList[randomIndex];
    questionDisplay.current = gameHandler(questionInfo.current);
    setTimer(questionInfo.current.qTimer);
    setGameStarted(true);
  };
  const onGameEnd = () => {
    setGameStarted(false);
  };

  const generateNextQuestion = () => {
    const randomIndex = Math.floor(Math.random() * 7);
    questionInfo.current = gameQuestionList[randomIndex];
    questionDisplay.current = gameHandler(questionInfo.current);
    setCounter((prevCounter) => prevCounter + 1);
    setTimer(questionInfo.current.qTimer);
  };
  return gameStarted && questionDisplay.current ? (
    <Grid container>
      {counter}
      <Button onClick={() => generateNextQuestion()}>ASDASDASD</Button>
      <Grid item>
        <GameQuestionText questionDisplay={questionDisplay.current} />
      </Grid>
      <Grid item>
        <GameQuestionContent
          questionInfo={questionInfo.current}
          questionDisplay={questionDisplay.current}
        />
      </Grid>

      <Grid item>
        <GameQuestionAnswerChoice
          questionInfo={questionInfo.current}
          questionDisplay={questionDisplay.current}
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
