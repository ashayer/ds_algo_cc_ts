import React, { useState } from "react";
import {
  Grid,
  Typography,
  Button,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  Divider,
} from "@mui/material";
import { useNavigate } from "react-router-dom";
import { SelectChangeEvent } from "@mui/material/Select";
import styles from "./HomeCardsStyles";

const GridCardItem = (props: any) => (
  <Grid item sx={{ width: "100%", alignSelf: props.alignSelf }}>
    {props.children}
  </Grid>
);

const GameCard = () => {
  const navigate = useNavigate();
  const [gameLength, setGameLength] = useState("0");
  const handleLengthChange = (e: SelectChangeEvent) => {
    setGameLength(e.target.value);
  };
  return (
    <>
      <Typography variant="h3" fontWeight="bold">
        Game
      </Typography>
      <Divider />
      <Grid container sx={{ ...styles.homeCardContainer }}>
        <GridCardItem>
          <Typography variant="h5">Game Options</Typography>
        </GridCardItem>
        <GridCardItem>
          <FormControl sx={{ width: "50%" }}>
            <InputLabel id="game-length-select">Number of Questions</InputLabel>
            <Select
              labelId="game-length-select"
              value={gameLength}
              label="Number of Questions"
              onChange={handleLengthChange}
            >
              <MenuItem value="0">Endless</MenuItem>
              <MenuItem value="20">20</MenuItem>
              <MenuItem value="40">40</MenuItem>
            </Select>
          </FormControl>
        </GridCardItem>
        <GridCardItem alignSelf="end">
          <Button fullWidth variant="outlined" color="success" onClick={() => navigate("/game")}>
            <Typography variant="h3">Play</Typography>
          </Button>
        </GridCardItem>
      </Grid>
    </>
  );
};

export default GameCard;
