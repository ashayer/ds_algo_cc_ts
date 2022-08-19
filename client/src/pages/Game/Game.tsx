import { useState, useEffect, useCallback } from "react";
import { Grid, Button, Container, Box } from "@mui/material";
import gameQuestionList from "../../utils/gameQuestionList";
import gameHandler from "../../utils/GameHandlers/gameHandler";
import GameQuestionAnswerChoice from "../../components/GameQuestionAnswerChoice/GameQuestionAnswerChoice";
import GameQuestionContent from "../../components/GameQuestionContent/GameQuestionContent";
import GameQuestionText from "../../components/GameQuestionText/GameQuestionText";

const Game = () => {
  const [gameStarted, setGameStarted] = useState(true);
  const [questionInfo, setQuestionInfo] = useState<GameQuestionInfo>(gameQuestionList[3]);
  const [questionDisplay, setQuestionDisplay] = useState<GameDisplayInfo>();

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
  }, []);

  useEffect(() => {
    setQuestionDisplay(gameHandler(questionInfo));
  }, [questionInfo]);

  return gameStarted && questionDisplay ? (
    <Grid item container sx={{ marginInline: "auto" }}>
      <GameQuestionText questionDisplay={questionDisplay} />
      <GameQuestionContent questionDisplay={questionDisplay} />
      <GameQuestionAnswerChoice questionDisplay={questionDisplay} />
    </Grid>
  ) : (
    <>
      <Grid item container xs={10} sx={{ mt: 5, justifyContent: "center", marginInline: "auto" }}>
        <Button fullWidth variant="outlined" onClick={onGameStart}>
          START GAME
        </Button>
      </Grid>
    </>
  );
};

export default Game;
