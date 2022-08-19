import { useState, useEffect, useCallback } from "react";
import { Grid, Button, Container, Box } from "@mui/material";
import gameQuestionList from "../../utils/gameQuestionList";
import gameHandler from "../../utils/GameHandlers/gameHandler";
import GameQuestionAnswerChoice from "../../components/GameQuestionAnswerChoice/GameQuestionAnswerChoice";
import GameQuestionContent from "../../components/GameQuestionContent/GameQuestionContent";
import GameQuestionText from "../../components/GameQuestionText/GameQuestionText";
import UserStatsTable from "../../components/UserStatsTable/UserStatsTable";
import useUserStore from "../../stores/userStore";
import produce from "immer";

const Game = () => {
  const [gameStarted, setGameStarted] = useState(true);
  const [questionInfo, setQuestionInfo] = useState<GameQuestionInfo>(gameQuestionList[1]);
  const [questionDisplay, setQuestionDisplay] = useState<GameDisplayInfo>();
  const sessionGameStats = useUserStore((state) => state.sessionGameStats);
  const setSessionGameStats = useUserStore((state) => state.setSessionGameStats);

  const questionStartTime = new Date();

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

  const calculatePoints = () => {
    // if streak over 3 then add 10 to (streak - 3) * 1.67
    let updatePointsBy = 0;
    if (sessionGameStats.streak > 3) {
      updatePointsBy = 10 + (sessionGameStats.streak - 3) * 1.67;
    } else {
      updatePointsBy = 10;
    }
    return Math.floor(updatePointsBy);
  };

  const answeredCorrect = () => {
    const questionEndTime = new Date();
    const updatePointsBy = calculatePoints();
    const nextState = produce(sessionGameStats, (draftState) => {
      draftState.numCorrect += 1;
      draftState.streak += 1;
      draftState.points += updatePointsBy;
      draftState.responseTime += questionEndTime.getTime() - questionStartTime.getTime();
    });
    setSessionGameStats(nextState);
    generateNextQuestion();
  };

  const answeredWrong = () => {
    const questionEndTime = new Date();
    const updatePointsBy = calculatePoints();
    const nextState = produce(sessionGameStats, (draftState) => {
      draftState.numWrong += 1;
      draftState.streak = 0;
      draftState.points += updatePointsBy;
      draftState.responseTime += questionEndTime.getTime() - questionStartTime.getTime();
    });
    setSessionGameStats(nextState);
    generateNextQuestion();
  };

  useEffect(() => {
    setQuestionDisplay(gameHandler(questionInfo));
  }, [questionInfo]);

  return gameStarted && questionDisplay ? (
    <Grid item container sx={{ marginInline: "auto" }}>
      <UserStatsTable />
      <GameQuestionText questionDisplay={questionDisplay} />
      <GameQuestionContent
        questionDisplay={questionDisplay}
        setQuestionDisplay={setQuestionDisplay}
      />
      <GameQuestionAnswerChoice
        questionDisplay={questionDisplay}
        answeredCorrect={answeredCorrect}
        answeredWrong={answeredWrong}
      />
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
