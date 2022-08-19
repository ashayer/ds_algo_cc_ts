import {
  Grid,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
} from "@mui/material";
import useUserStore from "../../stores/userStore";

const UserStatsTable = () => {
  const sessionGameStats = useUserStore((state) => state.sessionGameStats);

  return (
    <Grid item container xs={10} sx={{ marginInline: "auto" }}>
      <TableContainer>
        <Table size="small">
          <TableHead>
            <TableRow>
              <TableCell align="center">
                <strong>Points</strong>
              </TableCell>
              <TableCell align="center">
                <strong>Streak</strong>
              </TableCell>
              <TableCell align="center">
                <strong>Total Correct</strong>
              </TableCell>
              <TableCell align="center">
                <strong>Total Wrong</strong>
              </TableCell>
              <TableCell align="center">
                <strong>Response Time (ms)</strong>
              </TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            <TableRow>
              <TableCell align="center">{`${sessionGameStats.points}`}</TableCell>
              <TableCell align="center">{`${sessionGameStats.streak}`}</TableCell>
              <TableCell align="center">{`${sessionGameStats.numCorrect}`}</TableCell>
              <TableCell align="center">{`${sessionGameStats.numWrong}`}</TableCell>
              <TableCell align="center">{`${sessionGameStats.responseTime}`}</TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </TableContainer>
    </Grid>
  );
};

export default UserStatsTable;
