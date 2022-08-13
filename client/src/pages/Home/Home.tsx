import { useEffect } from "react";
import { Grid, Paper } from "@mui/material";
import { useNavigate } from "react-router-dom";
import useAuthStore from "../../stores/authStore";
import GameCard from "../../components/HomeCards/GameCard";
import StatsCard from "../../components/HomeCards/StatsCard";
import AlgoCard from "../../components/HomeCards/AlgoCard";
import DataCard from "../../components/HomeCards/DataCard";

// const calculateCompletedReading = () => {
//   const localUser = JSON.parse(sessionStorage.getItem("user"));
//   const totalSections = 4;
//   const totalSubSections = 2;
//   let completed = 0;
//   for (let i = 0; i < totalSections; i += 1) {
//     for (let j = 0; j < totalSubSections; j += 1) {
//       if (localUser.algoReading[i].subsections[j].completed) {
//         completed += 1;
//       }
//     }
//   }
//   return (completed / 8) * 100;
// };

const Home = () => {
  const user = useAuthStore((state) => state.isUser);
  const navigate = useNavigate();
  useEffect(() => {
    if (!user) navigate("/login");
  }, [navigate, user]);

  return (
    <Grid item container xs={11} sx={{ mt: 1, textAlign: "center", marginInline: "auto" }}>
      <Grid item xs={12} lg={6} sx={{ pt: 5, pr: 5, pl: 5 }}>
        <Paper elevation={4}>
          <GameCard />
        </Paper>
      </Grid>
      <Grid item xs={12} lg={6} sx={{ pt: 5, pr: 5, pl: 5 }}>
        <Paper elevation={4}>
          <StatsCard />
        </Paper>
      </Grid>
      <Grid item xs={12} lg={6} sx={{ pt: 5, pr: 5, pl: 5 }}>
        <Paper elevation={4}>
          <AlgoCard />
        </Paper>
      </Grid>
      <Grid item xs={12} lg={6} sx={{ pt: 5, pr: 5, pl: 5 }}>
        <Paper elevation={4}>
          <DataCard />
        </Paper>
      </Grid>
    </Grid>
  );
};

export default Home;
