import * as React from "react";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import Banner from "../../Assets/Singlebag-Homepage-banner.png";
import { Typography } from "@mui/material";
import "./styles.css";

function Home() {
  return (
    <Box sx={{ width: "100%" }}>
      <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
        <Grid item xs={6}>
          <Grid className="home_grid_text">
            <Typography className="home_text1">
              The Global Commerce Platform For You
            </Typography>
          </Grid>
          <Grid className="home_grid_text">
            <Typography className="home_text2">
              Building your business is now made easy with Singlebag!
            </Typography>
          </Grid>
          <Grid></Grid>
          <Grid className="home_grid_text">
            <Typography className="home_text3">
              Try Singlebag free for 14 days, no credit card required. Start
              your online store without any coding knowledge.{" "}
            </Typography>
          </Grid>
        </Grid>
        <Grid item xs={6}>
          <img src={Banner} />
        </Grid>
      </Grid>
    </Box>
  );
}

export default Home;
