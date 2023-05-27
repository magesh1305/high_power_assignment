import * as React from "react";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import Banner from "../../Assets/Singlebag-Homepage-banner.png";
import { Button, Typography } from "@mui/material";
import ArrowRightAltIcon from "@mui/icons-material/ArrowRightAlt";
import Symbol1 from "../../Assets/symbol-1@2x.png";
import Symbol2 from "../../Assets/symbol-2@2x.png";
import Symbol3 from "../../Assets/symbol-3@2x.png";
import Symbol4 from "../../Assets/Group-3446.png";
import Card1 from "../../Assets/Singlebag-Theme-1.jpg";
import Card2 from "../../Assets/Singlebag-Theme-2.jpg";
import Card3 from "../../Assets/Singlebag-Theme-3.jpg";
import Card4 from "../../Assets/Singlebag-Theme-4.jpg";
import Card5 from "../../Assets/Singlebag-Theme-5.jpg";
import Card6 from "../../Assets/Singlebag-Theme-6.jpg";
import Hosting from "../../Assets/hosting.png";
import WholeSale from "../../Assets/wholesale.png";
import Online from "../../Assets/online-shopping1.png";
import Revenue from "../../Assets/revenue.png";
import Book from "../../Assets/book.png";

import "./styles.css";

function Home() {
  return (
    <Box sx={{ width: "100%" }}>
      <Grid
        container
        rowSpacing={1}
        columnSpacing={{ xs: 1, sm: 2, md: 3 }}
        style={{ minHeight: "500px", backgroundColor: "#F8F9FC" }}
      >
        <Grid item xs={5}>
          <Grid className="home_grid_text">
            <Typography className="home_text1">
              The Global
              <br />
              Commerce <br />
              <span style={{ whiteSpace: "nowrap" }}>Platform For You</span>
            </Typography>
          </Grid>
          <Grid className="home_grid_text">
            <Typography className="home_text2">
              Building your business is now made <br />
              easy with Singlebag!
            </Typography>
          </Grid>
          <Grid className="home_grid_text">
            <Button
              variant="contained"
              endIcon={<ArrowRightAltIcon />}
              className="home_button_grid"
            >
              <span style={{ whiteSpace: "nowrap" }}>
                Start your free trial
              </span>
            </Button>
          </Grid>
          <Grid className="home_grid_text">
            <Typography className="home_text3">
              Try Singlebag free for 14 days, no credit card required. Start
              your online store without any coding knowledge.{" "}
            </Typography>
          </Grid>
        </Grid>
        <Grid item xs={7} className="home_page_right_grid">
          <Grid>
            <Grid>
              <img src={Symbol1} className="home_symbols1" />
            </Grid>
            <Grid>
              <img src={Symbol4} className="home_symbols4" />
            </Grid>
          </Grid>
          <Grid>
            <img src={Banner} className="banner_image" />
          </Grid>
          <Grid>
            <Grid>
              <img src={Symbol2} className="home_symbols2" />
            </Grid>
            <Grid>
              <img src={Symbol3} className="home_symbols3" />
            </Grid>
          </Grid>
        </Grid>
        <div
          class="elementor-shape elementor-shape-bottom"
          data-negative="false"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 1000 100"
            preserveAspectRatio="none"
          >
            <path
              class="elementor-shape-fill"
              d="M421.9,6.5c22.6-2.5,51.5,0.4,75.5,5.3c23.6,4.9,70.9,23.5,100.5,35.7c75.8,32.2,133.7,44.5,192.6,49.7 c23.6,2.1,48.7,3.5,103.4-2.5c54.7-6,106.2-25.6,106.2-25.6V0H0v30.3c0,0,72,32.6,158.4,30.5c39.2-0.7,92.8-6.7,134-22.4 c21.2-8.1,52.2-18.2,79.7-24.2C399.3,7.9,411.6,7.5,421.9,6.5z"
            ></path>
          </svg>
        </div>
      </Grid>
      <Box className="home_screen_secondgrid">
        <Grid style={{ marginTop: "85px" }}>
          <Grid>
            <Typography className="home_screen_secondgrid_text1">
              Singlebag, The Best Ecommerce Platform for Best Results
            </Typography>
          </Grid>
          <Grid>
            <Typography className="home_screen_secondgrid_text2">
              <span>
                We provide a cutting-edge platform for every business. Singlebag
                offers you the best tools to build
              </span>
              <br />
              <span>
                an online store through which your products will reach diverse
                customers, be it Cafes, Electronics, Flowers, Fast food,
                Furniture, Books, or any
              </span>
              <br />
              <span>other product.</span>
            </Typography>
          </Grid>
        </Grid>
      </Box>
      <Box sx={{ flexGrow: 1 }} className="home_screen_thirdgrid">
        <Grid container spacing={1}>
          <Grid container item spacing={3} className="card_subgrid">
            <Grid item xs={3.8} className="home_page_card_grid">
              <img src={Card1} className="home_page_card_img" />
            </Grid>
            <Grid item xs={3.8} className="home_page_card_grid">
              <img src={Card2} className="home_page_card_img" />
            </Grid>
            <Grid item xs={3.8} className="home_page_card_grid">
              <img src={Card3} className="home_page_card_img" />
            </Grid>
          </Grid>
          <Grid container item spacing={3} className="card_subgrid">
            <Grid item xs={3.8} className="home_page_card_grid">
              <img src={Card4} className="home_page_card_img" />
            </Grid>
            <Grid item xs={3.8} className="home_page_card_grid">
              <img src={Card5} className="home_page_card_img" />
            </Grid>
            <Grid item xs={3.8} className="home_page_card_grid">
              <img src={Card6} className="home_page_card_img" />
            </Grid>
          </Grid>
        </Grid>
      </Box>
      <Box className="home_screen_forthgrid">
        <Grid className="home_screen_forthgrid_typo_grid">
          <Typography className="home_screen_forthgrid_typo">
            What do we offer?
          </Typography>
        </Grid>
        <Grid container spacing={1}>
          <Grid
            container
            item
            spacing={3}
            className="home_screen_forthgrid_subrid1"
          >
            <Grid item xs={3.8} className="home_screen_forthgrid_bor">
              <img src={Hosting} className="home_inside_grid" />
              <Typography className="home_inside_grid_typo">
                Start an online business
              </Typography>
              <Typography className="home_inside_grid_dspt">
                Build your online store in a few easy steps. No coding knowledge
                is required, just your idea and passion!
              </Typography>
            </Grid>
            <Grid item xs={3.8} className="home_screen_forthgrid_bor">
              <img src={WholeSale} className="home_inside_grid" />
              <Typography className="home_inside_grid_typo">
                Become a wholesaler
              </Typography>
              <Typography className="home_inside_grid_dspt">
                Become a wholesaler and connect with multiple store owners and
                businesses.
              </Typography>
            </Grid>
            <Grid item xs={3.8} className="home_screen_forthgrid_bor">
              <img src={Online} className="home_inside_grid" />
              <Typography className="home_inside_grid_typo">
                Become a reseller
              </Typography>
              <Typography className="home_inside_grid_dspt">
                Become a reseller and earn money like a full fledged
                entrepreneur.
              </Typography>
            </Grid>
          </Grid>
          <Grid
            container
            item
            spacing={3}
            className="home_screen_forthgrid_subrid2"
          >
            <Grid item xs={5.8} className="home_screen_forthgrid_bor">
              <Grid className="image_grid_center">
                <img src={Revenue} className="home_inside_grid1" />
              </Grid>

              <Typography className="home_inside_grid_typo1">
                Earn a recurring revenue
              </Typography>
              <Typography className="home_inside_grid_dspt1">
                Partner with Singlebag and help other businesses create their
                ecommerce stores and earn a commission.
              </Typography>
            </Grid>
            <Grid item xs={5.8} className="home_screen_forthgrid_bor">
              <Grid className="image_grid_center">
                <img src={Book} className="home_inside_grid1" />
              </Grid>

              <Typography className="home_inside_grid_typo1">
                Share your knowledge
              </Typography>
              <Typography className="home_inside_grid_dspt1">
                Educate others and get educated, join our Community Forum and
                network with online store owners from any part of the world.
              </Typography>
            </Grid>
          </Grid>
        </Grid>
      </Box>
    </Box>
  );
}

export default Home;
