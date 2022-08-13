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
  Paper,
} from "@mui/material";
import { useNavigate } from "react-router-dom";
import { SelectChangeEvent } from "@mui/material/Select";

const GameCard = () => {
  const navigate = useNavigate();
  const [gameLength, setGameLength] = useState("0");
  const handleLengthChange = (e: SelectChangeEvent) => {
    setGameLength(e.target.value);
  };
  return (
    <Paper elevation={4}>
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
            </FormControl>
          </Box>
        </Grid>
        <Grid item xs={12} sx={{ alignSelf: "end" }}>
          <Button fullWidth variant="contained" onClick={() => navigate("/game")}>
            <Typography variant="h3">Play</Typography>
          </Button>
        </Grid>
      </Grid>
    </Paper>
  );
};

export default GameCard;
