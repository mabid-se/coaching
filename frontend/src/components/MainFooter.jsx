import { Box, Button, Container, Grid, Typography } from "@mui/material";
import React from "react";

import coachingLogo from "../assets/images/coaching-logo.png";
import appstoreImg from "../assets/images/Appstore.png";
import googleplayImg from "../assets/images/GooglePlay.png";
import faceIco from "../assets/images/facebook-circled.png";
import twitterIco from "../assets/images/twitter-circled.png";
import linkIco from "../assets/images/linkedin-circled.png";
import instaIco from "../assets/images/instagram-circled.png";
import { useNavigate } from "react-router-dom";

const MainFooter = () => {
  const navigate = useNavigate();
  return (
    <>
      <Box py={6} px={{ md: 12 }}>
        <Grid
          container
          direction="column"
          justifyContent="center"
          alignItems="center"
        >
          {/* --- Footer top section --- */}
          <Grid item>
            <Grid
              container
              direction="row"
              justifyContent="center"
              alignItems="flex-start"
            >
              <Grid item xs={12} md={6} lg={3} px={{ xs: 4, md: 6, lg: 8 }}>
                <Grid
                  container
                  direction="column"
                  justifyContent="flex-start"
                  alignItems="flex-start"
                >
                  <Grid item>
                    <img
                      src={coachingLogo}
                      alt="coaching - logo"
                      style={{ width: "90%" }}
                      onClick={() => navigate("/")}
                    />
                  </Grid>
                  <Grid item marginTop={3}>
                    <Typography
                      variant="subtitle2"
                      onClick={() => navigate("/")}
                      sx={{
                        color: "#0f0f3d",
                        "&:hover": {
                          fontWeight: 600,
                          color: "#752eef",
                          textDecoration: "underline",
                        },
                      }}
                    >
                      Why Coaching.com?
                    </Typography>
                    <Typography
                      variant="subtitle2"
                      onClick={() => navigate("/")}
                      sx={{
                        color: "#0f0f3d",
                        "&:hover": {
                          fontWeight: 600,
                          color: "#752eef",
                          textDecoration: "underline",
                        },
                      }}
                    >
                      Our Team
                    </Typography>
                    <Typography
                      variant="subtitle2"
                      onClick={() => navigate("/")}
                      sx={{
                        color: "#0f0f3d",
                        "&:hover": {
                          fontWeight: 600,
                          color: "#752eef",
                          textDecoration: "underline",
                        },
                      }}
                    >
                      Careers
                    </Typography>
                    <Typography
                      variant="subtitle2"
                      onClick={() => navigate("/")}
                      sx={{
                        color: "#0f0f3d",
                        "&:hover": {
                          fontWeight: 600,
                          color: "#752eef",
                          textDecoration: "underline",
                        },
                      }}
                    >
                      Contact
                    </Typography>
                    <Typography
                      variant="subtitle2"
                      onClick={() => navigate("/")}
                      sx={{
                        color: "#0f0f3d",
                        "&:hover": {
                          fontWeight: 600,
                          color: "#752eef",
                          textDecoration: "underline",
                        },
                      }}
                    >
                      Privacy Policy
                    </Typography>
                    <Typography
                      variant="subtitle2"
                      onClick={() => navigate("/")}
                      sx={{
                        color: "#0f0f3d",
                        "&:hover": {
                          fontWeight: 600,
                          color: "#752eef",
                          textDecoration: "underline",
                        },
                      }}
                    >
                      Privacy and Terms
                    </Typography>
                    <Typography
                      variant="subtitle2"
                      onClick={() => navigate("/")}
                      sx={{
                        color: "#0f0f3d",
                        "&:hover": {
                          fontWeight: 600,
                          color: "#752eef",
                          textDecoration: "underline",
                        },
                      }}
                    >
                      Status
                    </Typography>
                  </Grid>
                </Grid>
              </Grid>
              <Grid
                item
                xs={12}
                md={6}
                lg={3}
                px={{ xs: 4, md: 6, lg: 8 }}
                mt={{ xs: 4, md: 0 }}
              >
                <Grid
                  container
                  direction="column"
                  justifyContent="flex-start"
                  alignItems="flex-start"
                >
                  <Grid item>
                    <Typography
                      variant="subtitle1"
                      color="#0f0f3d"
                      fontWeight={600}
                    >
                      Pricing
                    </Typography>
                  </Grid>
                  <Grid item mt={3}>
                    <Typography
                      variant="subtitle2"
                      onClick={() => navigate("/")}
                      sx={{
                        color: "#0f0f3d",
                        "&:hover": {
                          fontWeight: 600,
                          color: "#752eef",
                          textDecoration: "underline",
                        },
                      }}
                    >
                      Individuals
                    </Typography>
                    <Typography
                      variant="subtitle2"
                      onClick={() => navigate("/")}
                      sx={{
                        color: "#0f0f3d",
                        "&:hover": {
                          fontWeight: 600,
                          color: "#752eef",
                          textDecoration: "underline",
                        },
                      }}
                    >
                      Coaches
                    </Typography>
                    <Typography
                      variant="subtitle2"
                      onClick={() => navigate("/")}
                      sx={{
                        color: "#0f0f3d",
                        "&:hover": {
                          fontWeight: 600,
                          color: "#752eef",
                          textDecoration: "underline",
                        },
                      }}
                    >
                      Businesses
                    </Typography>
                    <Typography
                      variant="subtitle2"
                      onClick={() => navigate("/")}
                      sx={{
                        color: "#0f0f3d",
                        "&:hover": {
                          fontWeight: 600,
                          color: "#752eef",
                          textDecoration: "underline",
                        },
                      }}
                    >
                      Enterprise
                    </Typography>
                  </Grid>
                  <Grid item mt={3}>
                    <Typography
                      variant="subtitle1"
                      color="#0f0f3d"
                      fontWeight={600}
                    >
                      Discover
                    </Typography>
                  </Grid>
                  <Grid item mt={3}>
                    <Typography
                      variant="subtitle2"
                      onClick={() => navigate("/")}
                      sx={{
                        color: "#0f0f3d",
                        "&:hover": {
                          fontWeight: 600,
                          color: "#752eef",
                          textDecoration: "underline",
                        },
                      }}
                    >
                      Find a Coach
                    </Typography>
                    <Typography
                      variant="subtitle2"
                      onClick={() => navigate("/")}
                      sx={{
                        color: "#0f0f3d",
                        "&:hover": {
                          fontWeight: 600,
                          color: "#752eef",
                          textDecoration: "underline",
                        },
                      }}
                    >
                      List Your Practice
                    </Typography>
                  </Grid>
                </Grid>
              </Grid>
              <Grid
                item
                xs={12}
                md={6}
                lg={3}
                px={{ xs: 4, md: 6, lg: 8 }}
                mt={{ xs: 4, md: 0 }}
              >
                <Grid
                  container
                  direction="column"
                  justifyContent="flex-start"
                  alignItems="flex-start"
                >
                  <Grid item>
                    <Typography
                      variant="subtitle1"
                      color="#0f0f3d"
                      fontWeight={600}
                    >
                      Pltaform
                    </Typography>
                  </Grid>
                  <Grid item mt={3}>
                    <Typography
                      variant="subtitle2"
                      onClick={() => navigate("/")}
                      sx={{
                        color: "#0f0f3d",
                        "&:hover": {
                          fontWeight: 600,
                          color: "#752eef",
                          textDecoration: "underline",
                        },
                      }}
                    >
                      Features
                    </Typography>
                    <Typography
                      variant="subtitle2"
                      onClick={() => navigate("/")}
                      sx={{
                        color: "#0f0f3d",
                        "&:hover": {
                          fontWeight: 600,
                          color: "#752eef",
                          textDecoration: "underline",
                        },
                      }}
                    >
                      Solutions For Individuals
                    </Typography>
                    <Typography
                      variant="subtitle2"
                      onClick={() => navigate("/")}
                      sx={{
                        color: "#0f0f3d",
                        "&:hover": {
                          fontWeight: 600,
                          color: "#752eef",
                          textDecoration: "underline",
                        },
                      }}
                    >
                      Solutions For Coaches
                    </Typography>
                    <Typography
                      variant="subtitle2"
                      onClick={() => navigate("/")}
                      sx={{
                        color: "#0f0f3d",
                        "&:hover": {
                          fontWeight: 600,
                          color: "#752eef",
                          textDecoration: "underline",
                        },
                      }}
                    >
                      Solutions For Business
                    </Typography>
                    <Typography
                      variant="subtitle2"
                      onClick={() => navigate("/")}
                      sx={{
                        color: "#0f0f3d",
                        "&:hover": {
                          fontWeight: 600,
                          color: "#752eef",
                          textDecoration: "underline",
                        },
                      }}
                    >
                      Solutions For Enterprise
                    </Typography>
                    <Typography
                      variant="subtitle2"
                      onClick={() => navigate("/")}
                      sx={{
                        color: "#0f0f3d",
                        "&:hover": {
                          fontWeight: 600,
                          color: "#752eef",
                          textDecoration: "underline",
                        },
                      }}
                    >
                      Programs and Events
                    </Typography>
                    <Typography
                      variant="subtitle2"
                      onClick={() => navigate("/")}
                      sx={{
                        color: "#0f0f3d",
                        "&:hover": {
                          fontWeight: 600,
                          color: "#752eef",
                          textDecoration: "underline",
                        },
                      }}
                    >
                      Marketplace
                    </Typography>
                    <Typography
                      variant="subtitle2"
                      onClick={() => navigate("/")}
                      sx={{
                        color: "#0f0f3d",
                        "&:hover": {
                          fontWeight: 600,
                          color: "#752eef",
                          textDecoration: "underline",
                        },
                      }}
                    >
                      Integrations
                    </Typography>
                    <Typography
                      variant="subtitle2"
                      onClick={() => navigate("/")}
                      sx={{
                        color: "#0f0f3d",
                        "&:hover": {
                          fontWeight: 600,
                          color: "#752eef",
                          textDecoration: "underline",
                        },
                      }}
                    >
                      Security
                    </Typography>
                  </Grid>
                </Grid>
              </Grid>
              <Grid item xs={12} md={6} lg={3} px={{ xs: 4, md: 6, lg: 8 }}>
                <Grid
                  container
                  direction="column"
                  justifyContent="flex-start"
                  alignItems="flex-start"
                >
                  <Grid item>
                    <Typography
                      variant="subtitle1"
                      color="#0f0f3d"
                      fontWeight={600}
                    >
                      Resources
                    </Typography>
                  </Grid>
                  <Grid item mt={3}>
                    <Typography
                      variant="subtitle2"
                      onClick={() => navigate("/")}
                      sx={{
                        color: "#0f0f3d",
                        "&:hover": {
                          fontWeight: 600,
                          color: "#752eef",
                          textDecoration: "underline",
                        },
                      }}
                    >
                      Knowledge Base
                    </Typography>
                    <Typography
                      variant="subtitle2"
                      onClick={() => navigate("/")}
                      sx={{
                        color: "#0f0f3d",
                        "&:hover": {
                          fontWeight: 600,
                          color: "#752eef",
                          textDecoration: "underline",
                        },
                      }}
                    >
                      Professional Services
                    </Typography>
                    <Typography
                      variant="subtitle2"
                      onClick={() => navigate("/")}
                      sx={{
                        color: "#0f0f3d",
                        "&:hover": {
                          fontWeight: 600,
                          color: "#752eef",
                          textDecoration: "underline",
                        },
                      }}
                    >
                      Live Webinars
                    </Typography>
                    <Typography
                      variant="subtitle2"
                      onClick={() => navigate("/")}
                      sx={{
                        color: "#0f0f3d",
                        "&:hover": {
                          fontWeight: 600,
                          color: "#752eef",
                          textDecoration: "underline",
                        },
                      }}
                    >
                      Recorded Webinars
                    </Typography>
                    <Typography
                      variant="subtitle2"
                      onClick={() => navigate("/")}
                      sx={{
                        color: "#0f0f3d",
                        "&:hover": {
                          fontWeight: 600,
                          color: "#752eef",
                          textDecoration: "underline",
                        },
                      }}
                    >
                      Guides
                    </Typography>
                    <Typography
                      variant="subtitle2"
                      onClick={() => navigate("/")}
                      sx={{
                        color: "#0f0f3d",
                        "&:hover": {
                          fontWeight: 600,
                          color: "#752eef",
                          textDecoration: "underline",
                        },
                      }}
                    >
                      Blog
                    </Typography>
                    <Typography
                      variant="subtitle2"
                      onClick={() => navigate("/")}
                      sx={{
                        color: "#0f0f3d",
                        "&:hover": {
                          fontWeight: 600,
                          color: "#752eef",
                          textDecoration: "underline",
                        },
                      }}
                    >
                      FAQ
                    </Typography>
                  </Grid>
                </Grid>
              </Grid>
            </Grid>
          </Grid>
          {/* --- Footer lower section --- */}
          <Grid item mt={6} mb={{ sm: 2 }} px={{ lg: 4 }} width="100%">
            {/* --- large displays - all right reserved section --- */}
            <Grid display={{ xs: "none", sm: "block" }}>
              <Grid
                container
                direction="row"
                justifyContent="center"
                alignItems="center"
                position="relative"
              >
                <Grid item sx={{ position: "absolute", width: "50%", left: 0 }}>
                  <div style={{ position: "absolute", width: "50%", left: 0 }}>
                    <Typography
                      variant="body2"
                      color="black"
                      textAlign="center"
                    >
                      <span style={{ fontWeight: 600 }}>
                        All rights reserved
                      </span>
                      &nbsp;© 2023 Coaching.com
                    </Typography>
                  </div>
                </Grid>
                <Grid
                  item
                  sx={{ position: "absolute", width: "50%", right: 0 }}
                >
                  <div style={{ position: "absolute", width: "50%", right: 0 }}>
                    <Grid
                      container
                      direction="row"
                      justifyContent="center"
                      alignItems="center"
                      spcacing={3}
                    >
                      <Grid item>
                        <img
                          src={faceIco}
                          alt="facebook-icon"
                          style={{ width: "60%" }}
                          onClick={() => navigate("/")}
                        />
                      </Grid>
                      <Grid item>
                        <img
                          src={twitterIco}
                          alt="twitter-icon"
                          style={{ width: "60%" }}
                          onClick={() => navigate("/")}
                        />
                      </Grid>
                      <Grid item>
                        <img
                          src={linkIco}
                          alt="linkedin-icon"
                          style={{ width: "60%" }}
                          onClick={() => navigate("/")}
                        />
                      </Grid>
                      <Grid item>
                        <img
                          src={instaIco}
                          alt="instagram-icon"
                          style={{ width: "60%" }}
                          onClick={() => navigate("/")}
                        />
                      </Grid>
                    </Grid>
                  </div>
                </Grid>
              </Grid>
            </Grid>

            <Grid sx={{ display: { xs: "block", sm: "none" } }}>
              <Typography variant="body2" color="black" textAlign="center">
                <span style={{ fontWeight: 600 }}>All rights reserved</span>
                &nbsp;© 2023 Coaching.com
              </Typography>
              <Grid
                container
                direction="row"
                justifyContent="center"
                alignItems="center"
                spacing={1}
                mt={2}
              >
                <Grid item>
                  <img
                    src={faceIco}
                    alt="facebook-icon"
                    style={{ width: "60%" }}
                    onClick={() => navigate("/")}
                  />
                </Grid>
                <Grid item>
                  <img
                    src={twitterIco}
                    alt="twitter-icon"
                    style={{ width: "60%" }}
                    onClick={() => navigate("/")}
                  />
                </Grid>
                <Grid item>
                  <img
                    src={linkIco}
                    alt="linkedin-icon"
                    style={{ width: "60%" }}
                    onClick={() => navigate("/")}
                  />
                </Grid>
                <Grid item>
                  <img
                    src={instaIco}
                    alt="instagram-icon"
                    style={{ width: "60%" }}
                    onClick={() => navigate("/")}
                  />
                </Grid>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Box>
    </>
  );
};

export default MainFooter;
