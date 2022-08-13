import React from "react";
import { Typography, Grid, Button, Paper } from "@mui/material";
import { useNavigate } from "react-router-dom";

const StatsCard = () => {
  const navigate = useNavigate();

  return (
    <>
      <Typography variant="h3" sx={{ borderBottom: "1px solid black" }}>
        Sorting Algorithms
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
          {/* <Typography>{`${calculateCompletedReadingForAlgo()}% Read`}</Typography> */}
        </Grid>
        <Grid item xs={5} sx={{ alignSelf: "end", m: 1 }}>
          <Button fullWidth variant="contained" onClick={() => navigate("/algos")}>
            <Typography variant="h3">Read</Typography>
          </Button>
        </Grid>
        <Grid item xs={5} sx={{ alignSelf: "end", m: 1 }}>
          <Button fullWidth variant="contained" onClick={() => navigate("/sortsandbox")}>
            <Typography variant="h3">Sandbox</Typography>
          </Button>
        </Grid>
      </Grid>
    </>
  );
};

export default StatsCard;
