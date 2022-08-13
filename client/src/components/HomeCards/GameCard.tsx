import React, { useState } from "react";
import {
  Grid,
  Typography,
  Button,
  FormControl,
  InputLabel,
  Select,
  Box,
  MenuItem,
  // eslint-disable-next-line no-unused-vars
  Zoom,
} from "@mui/material";
import { useNavigate } from "react-router-dom";

const GameCard = () => {
  const navigate = useNavigate();

  // const [type, setType] = useState("adaptive");
  const [type, setType] = useState("a");
  // eslint-disable-next-line no-unused-vars
  const [difficulty, setDifficulty] = useState("1");
  // eslint-disable-next-line no-unused-vars
  const [gameLength, setGameLength] = useState("0");
  // const handleTypeChange = (e) => {
  //   setType(e.target.value);
  // };

  return (
    <>
      <Typography variant="h3" sx={{ borderBottom: "1px solid black" }}>
        Game
      </Typography>
      <Grid
        container
        sx={{
          direction: "column",
          justifyContent: "space-between",
          alignItems: "center",
          minHeight: "30vh",
        }}
      >
        <Grid item xs={12}>
          <Typography variant="h5">Game Options</Typography>
        </Grid>
        <Grid item xs={12}>
          <Box sx={{ display: "flex", flexDirection: "row", justifyContent: "space-evenly" }}>
            <FormControl sx={{ width: "200px" }}>
              <InputLabel id="game-type-select">Type</InputLabel>
              {/* <Select
                labelId="game-type-select"
                value={type}
                label="Type"
                onChange={handleTypeChange}
              >
                <MenuItem value="adaptive">Adaptive</MenuItem>
                <MenuItem value="static">Static</MenuItem>
              </Select> */}
            </FormControl>
            {/* {type === "static" && (
              <Zoom
                in
                easing={{
                  enter: "cubic-bezier(0, 2, .5, 1)",
                  exit: "linear",
                }}
              >
                <FormControl sx={{ width: "200px" }}>
                  <InputLabel id="game-difficulty-select">Difficulty</InputLabel>
                  <Select
                    labelId="game-difficulty-select"
                    label="Difficulty"
                    value={difficulty}
                    onChange={handleDifficultyChange}
                  >
                    <MenuItem value="0">Easy</MenuItem>
                    <MenuItem value="1">Medium</MenuItem>
                    <MenuItem value="2">Hard</MenuItem>
                  </Select>
                </FormControl>
              </Zoom>
            )} */}
            {/* <FormControl sx={{ width: "200px" }}>
              <InputLabel id="game-length-select">Questions</InputLabel>
              <Select
                labelId="game-length-select"
                value={gameLength}
                label="Questions"
                onChange={handleLengthChange}
              >
                <MenuItem value="0">Endless</MenuItem>
                <MenuItem value="20">20</MenuItem>
                <MenuItem value="40">40</MenuItem>
              </Select>
            </FormControl> */}
          </Box>
        </Grid>
        <Grid item xs={12} sx={{ alignSelf: "end" }}>
          <Button
            fullWidth
            variant="contained"
            sx={{ borderRadius: "0px", border: "5px solid white" }}
            onClick={() => navigate("/game")}
          >
            <Typography variant="h3">Play</Typography>
          </Button>
        </Grid>
      </Grid>
    </>
  );
};

export default GameCard;
