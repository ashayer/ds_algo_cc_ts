import { Grid } from "@mui/material";

const GridCardItem = (props: any) => (
  <Grid item sx={{ width: "100%", alignSelf: props.alignSelf }}>
    {props.children}
  </Grid>
);

export default GridCardItem;
