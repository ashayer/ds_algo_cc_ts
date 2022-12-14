import  { useState, useEffect } from "react";
import { Grid, Typography, Button, Dialog } from "@mui/material";
import { useNavigate } from "react-router-dom";
import Signup from "../Signup/Signup";
import useStore from "../../stores/authStore";

const LandingPage = () => {
  const navigate = useNavigate();

  const [open, setOpen] = useState<boolean>(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const user = useStore((state) => state.isUser);

  useEffect(() => {
    if (user) navigate("/home");
  });

  return (
    <Grid
      container
      direction="column"
      sx={{
        backgroundColor: "#FFFFFF",
        alignItems: "center",
        marginInline: "auto",
      }}
      maxWidth="md"
    >
      <Grid item sx={{ mt: 10 }}>
        <Button variant="contained" onClick={handleOpen}>
          <Typography>GET STARTED</Typography>
        </Button>
      </Grid>
      <Dialog open={open} onClose={handleClose} fullWidth>
        <Signup />
      </Dialog>
    </Grid>
  );
};

export default LandingPage;
