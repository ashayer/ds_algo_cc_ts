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
import useUserStore from "../../stores/userStore";
import useAuthStore from "../../stores/authStore";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";

const getUserStats = async (id: string) => {
  const response = await axios.get(`/api/user/getUserStats/${id}`);
  return response.data;
};

const StatsCard = () => {
  const navigate = useNavigate();
  const username = useAuthStore((state) => state.username);
  const id = useAuthStore((state) => state.id);

  const {
    data: gameStats,
    isLoading,
    isSuccess,
    isError,
  } = useQuery(["user-stats"], () => getUserStats(id));

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (isError) {
    return <div>Error</div>;
  }

  return (
    <>
      <Typography variant="h3" fontWeight="bold">
        STATS
      </Typography>
      <Divider />
      {isSuccess && !isLoading && (
        <Grid container sx={{ ...styles.homeCardContainer }}>
          <GridCardItem>
            <Typography variant="h5">{`${username}`}</Typography>
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
                    <TableCell align="center">{`${gameStats.points}`}</TableCell>
                    <TableCell align="center">{`${gameStats.gamesPlayed}`}</TableCell>
                    <TableCell align="center">{`${gameStats.streak}`}</TableCell>
                    <TableCell align="center">{`${gameStats.numCorrect}`}</TableCell>
                    <TableCell align="center">{`${gameStats.numWrong}`}</TableCell>
                    <TableCell align="center">{`${gameStats.responseTime}`}</TableCell>
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
      )}
    </>
  );
};

export default StatsCard;
