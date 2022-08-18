import { Grid, Button, Container, Box, Paper, Typography } from "@mui/material";

const GameQuestionText = ({ questionDisplay }: { questionDisplay: GameDisplayInfo }) => {
  return (
    <Grid item xs={12} textAlign="center">
      <Paper>
        <Typography variant="h4" fontWeight="bold">
          {questionDisplay.question}
        </Typography>
      </Paper>
    </Grid>
  );
};

export default GameQuestionText;
