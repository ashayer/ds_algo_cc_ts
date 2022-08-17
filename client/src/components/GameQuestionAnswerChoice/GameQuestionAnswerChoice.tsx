import { Grid, Box, Typography, ButtonBase, Button } from "@mui/material";

const ArrayBarsAnswer = ({ answerChoices }: { answerChoices: GameAnswerChoices[] }) => {
  return (
    <>
      {answerChoices?.map((answer: any, index: number) => (
        <Grid item key={index} sx={{ margin: "1vh" }}>
          <ButtonBase
            focusRipple
            sx={{
              width: "35vw",
              height: "20vh",
            }}
          >
            <Grid
              container
              sx={{
                border: "1px solid black",
                justifyContent: "space-evenly",
                "&:hover": {
                  backgroundColor: "#fa382a",
                },
                transition: "all 0.2s ease",
              }}
            >
              {answer.answerContent.map((value: number, index: number) => (
                <Grid item key={index} sx={{ height: "20vh", width: "4vw" }}>
                  <Box
                    sx={{
                      height: `${value * 2.25}vh`,
                      backgroundColor: "#a1caff",
                      color: "black",
                      position: "absolute",
                      bottom: "0",
                      borderRadius: "5px 5px 0px 0px",
                    }}
                  >
                    <Typography variant="h4" sx={{ width: "4vw" }}>{`${value}`}</Typography>
                  </Box>
                </Grid>
              ))}
            </Grid>
          </ButtonBase>
        </Grid>
      ))}
    </>
  );
};

const TextAnswer = ({ answerChoices }: { answerChoices: GameAnswerChoices[] }) => {
  return (
    <>
      {answerChoices?.map((answer: any, index: number) => (
        <Grid
          item
          key={index}
          xs={12}
          md={5}
          sx={{
            textAlign: "center",
            margin: "1vw",
            border: "1px solid black",
            "&:hover": {
              backgroundColor: "#fa382a",
            },
            transition: "all 0.2s ease",
          }}
        >
          <ButtonBase
            sx={{
              width: "40vw",
              height: "15vh",
            }}
          >
            <Typography>{answer.answerContent}</Typography>
          </ButtonBase>
        </Grid>
      ))}
    </>
  );
};

const GameQuestionAnswerChoice = ({
  questionInfo,
  questionDisplay,
}: {
  questionInfo: GameQuestionInfo;
  questionDisplay: GameDisplayInfo;
}) => {
  switch (questionInfo.qType) {
    case "STATE-AFTER-SWAPS":
      return (
        <ArrayBarsAnswer answerChoices={questionDisplay.answerChoices as GameAnswerChoices[]} />
      );
    case "TIME-COMPLEXITY-DIRECT":
      return (
        <>
          {questionDisplay.answerChoices && (
            <TextAnswer answerChoices={questionDisplay.answerChoices as GameAnswerChoices[]} />
          )}
        </>
      );

    case "SPACE-COMPLEXITY":
      return (
        <>
          {questionDisplay.answerChoices && (
            <TextAnswer answerChoices={questionDisplay.answerChoices as GameAnswerChoices[]} />
          )}
        </>
      );
    case "CHOOSE-PSEUDOCODE":
      return (
        <>
          {questionDisplay.answerChoices && (
            <TextAnswer answerChoices={questionDisplay.answerChoices as GameAnswerChoices[]} />
          )}
        </>
      );
    case "TIME-COMPLEXITY-FROM-ARRAY":
      return (
        <>
          {questionDisplay.answerChoices && (
            <TextAnswer answerChoices={questionDisplay.answerChoices as GameAnswerChoices[]} />
          )}
        </>
      );
    case "DRAG-CODE":
      return <>{!questionDisplay.answerChoices && <Button>Check</Button>}</>;
    case "DRAG-ARRAY-BARS":
      return <>{!questionDisplay.answerChoices && <Button>Check</Button>}</>;
    default:
      return <div>Error</div>;
  }
};

export default GameQuestionAnswerChoice;
