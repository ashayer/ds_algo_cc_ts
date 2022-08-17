import { Grid, Box, Typography } from "@mui/material";

const DragContent = ({ questionContent }: any) => {
  return (
    <div>
      {questionContent?.map((question: any, index: number) => (
        <div key={index}>{question.lineContent}</div>
      ))}
    </div>
  );
};
const ArrayBarsContent = ({ questionContent }: any) => {
  return (
    <Grid container sx={{ position: "relative", justifyContent: "center" }}>
      {questionContent.map((value: number) => (
        <Grid item key={value} sx={{ height: "25vh", width: "8vw" }} md={1} sm={0}>
          <Box
            sx={{
              height: `${value * 3}vh`,
              backgroundColor: "#036bfc",
              color: "white",
              position: "absolute",
              bottom: "0",
              borderRadius: "5px 5px 0px 0px",
              textAlign: "center",
            }}
          >
            <Typography variant="h4" sx={{ width: "4vw" }}>{`${value}`}</Typography>
          </Box>
        </Grid>
      ))}
    </Grid>
  );
};

const GameQuestionContent = ({ questionInfo, questionContent }: any) => {
  switch (questionInfo.qType) {
    case "STATE-AFTER-SWAPS":
      return <ArrayBarsContent questionContent={questionContent} />;
    case "TIME-COMPLEXITY-DIRECT":
      return <div>{questionContent}</div>;
    case "SPACE-COMPLEXITY":
      return <div>{questionContent}</div>;
    case "CHOOSE-PSEUDOCODE":
      return <div>{questionContent}</div>;
    case "TIME-COMPLEXITY-FROM-ARRAY":
      return <div>{questionContent}</div>;
    case "DRAG-CODE":
      return <DragContent questionContent={questionContent} />;
    case "DRAG-ARRAY-BARS":
      return <DragContent questionContent={questionContent} />;
    default:
      return <div>Error</div>;
  }
};

export default GameQuestionContent;
