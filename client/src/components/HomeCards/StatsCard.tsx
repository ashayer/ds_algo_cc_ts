/* eslint-disable no-undef */
import React from "react";
import {
  Typography,
  Button,
  Grid,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Divider,
} from "@mui/material";
import { useNavigate } from "react-router-dom";
import styles from "./HomeCardsStyles";
import GridCardItem from "./GameCardItem";

const StatsCard = () => {
  const navigate = useNavigate();

  return (
    <>
      <Typography variant="h3" fontWeight="bold">
        STATS
      </Typography>
      <Divider />
      <Grid container sx={{ ...styles.homeCardContainer }}>
        <GridCardItem>
          {/* <Typography variant="h5">{`${localUser.name}`}</Typography> */}
        </GridCardItem>
        <GridCardItem>
          <TableContainer>
            <Table size="small">
              <TableHead>
                <TableRow>
                  <TableCell align="center">Points</TableCell>
                  <TableCell align="center">Games Played</TableCell>
                  <TableCell align="center">Highest Streak</TableCell>
                  <TableCell align="center">Total Correct</TableCell>
                  <TableCell align="center">Total Wrong</TableCell>
                  <TableCell align="center">Response Time</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                <TableRow>
                  {/* <TableCell align="center">{`${localUser.points}`}</TableCell>
                  <TableCell align="center">{`${localUser.gamesPlayed}`}</TableCell>
                  <TableCell align="center">{`${localUser.streak}`}</TableCell>
                  <TableCell align="center">{`${localUser.numCorrect}`}</TableCell>
                  <TableCell align="center">{`${localUser.numWrong}`}</TableCell>
                  <TableCell align="center">{`${localUser.responseTime}`}</TableCell> */}
                </TableRow>
              </TableBody>
            </Table>
          </TableContainer>
        </GridCardItem>
        <GridCardItem alignSelf="end">
          <Button variant="outlined" onClick={() => navigate("/leaderboard")}>
            <Typography variant="h3">LeaderBoard</Typography>
          </Button>
        </GridCardItem>
      </Grid>
    </>
  );
};

export default StatsCard;
