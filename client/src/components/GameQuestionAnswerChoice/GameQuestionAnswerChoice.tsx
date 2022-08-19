import { Grid, Box, Typography, ButtonBase, Button } from "@mui/material";

const ArrayBarsAnswer = ({ answerChoices }: { answerChoices: GameAnswerChoices[] }) => {
  const arrayMax = Math.max(...(answerChoices[0].answerContent as number[]));
  return (
    <Grid container sx={{ justifyContent: "center" }}>
      {answerChoices?.map((answer: any, index: number) => (
        <Grid
          item
          key={index}
          sx={{ m: 1, position: "relative", justifyContent: "center" }}
          xs={12}
          xl={5}
          sm={5}
        >
          <Grid
            item
            container
            sx={{
              border: "1px solid black",
              borderRadius: "5px",
              justifyContent: "center",
              "&:hover": {
                backgroundColor: "lightgray",
              },
              transition: "all 0.1s ease",
            }}
          >
            {answer.answerContent?.map((value: number, index: number) => (
              <Grid
                item
                container
                key={index}
                xs={1.25}
                sm={2}
                xl={1.5}
                sx={{ height: "20vh", pl: 1, pr: 1, justifyContent: "center" }}
              >
                <Grid
                  item
                  sx={{
                    height: `${(value * 100) / arrayMax}%`,
                    backgroundColor: "gray",
                    color: "white",
                    position: "absolute",
                    bottom: "0",
                    borderRadius: "5px 5px 0px 0px",
                    textAlign: "center",
                  }}
                  minWidth="4vw"
                >
                  <Typography variant="h4">{`${value}`}</Typography>
                </Grid>
              </Grid>
            ))}
          </Grid>
        </Grid>
      ))}
    </Grid>
  );
};

const TextAnswer = ({ answerChoices }: { answerChoices: GameAnswerChoices[] }) => {
  return (
    <Grid container sx={{ justifyContent: "center" }}>
      {answerChoices?.map((answer: any, index: number) => (
        <Grid
          item
          container
          key={index}
          xs={12}
          md={5}
          sx={{
            border: "1px solid black",
            borderRadius: "5px",
            transition: "all 0.1s ease",
            height: "15vh",
            justifyContent: "center",
            textAlign: "center",
            alignItems: "center",
            m: 2,
          }}
        >
          <Grid item>
            <Typography variant="h3" fontWeight="bold">
              {answer.answerContent}
            </Typography>
          </Grid>
        </Grid>
      ))}
    </Grid>
  );
};

const GameQuestionAnswerChoice = ({ questionDisplay }: { questionDisplay: GameDisplayInfo }) => {
  switch (questionDisplay.answerType) {
    case "TEXT":
      return <TextAnswer answerChoices={questionDisplay.answerChoices as GameAnswerChoices[]} />;
    case "ARRAY-BARS":
      return (
        <ArrayBarsAnswer answerChoices={questionDisplay.answerChoices as GameAnswerChoices[]} />
      );
    case "CHECK-ANSWER":
      return <Button>Check</Button>;
    default:
      return <div>Error</div>;
  }
};

export default GameQuestionAnswerChoice;
