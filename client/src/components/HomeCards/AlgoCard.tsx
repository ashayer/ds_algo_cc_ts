import React from "react";
import { Typography, Grid, Button, Paper, Divider } from "@mui/material";
import { useNavigate } from "react-router-dom";
import styles from "./HomeCardsStyles";
import GridCardItem from "./GameCardItem";
const StatsCard = () => {
  const navigate = useNavigate();

  return (
    <>
      <Typography variant="h3" fontWeight="bold">
        SORTING ALGORITHMS
      </Typography>
      <Divider />
      <Grid container sx={{ ...styles.homeCardContainer }}>
        <GridCardItem>
          {/* <Typography>{`${calculateCompletedReadingForAlgo()}% Read`}</Typography> */}
        </GridCardItem>
        <GridCardItem width="45%" alignSelf="end">
          <Button fullWidth variant="contained" onClick={() => navigate("/algos")}>
            <Typography variant="h3">Read</Typography>
          </Button>
        </GridCardItem>
        <GridCardItem width="45%" alignSelf="end">
          <Button fullWidth variant="contained" onClick={() => navigate("/sortsandbox")}>
            <Typography variant="h3">Sandbox</Typography>
          </Button>
        </GridCardItem>
      </Grid>
    </>
  );
};

export default StatsCard;
