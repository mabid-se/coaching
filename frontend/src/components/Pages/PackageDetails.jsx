import React from "react";
import MainNavbar from "../MainNavbar";
import MainFooter from "../MainFooter";
import Grid from "@mui/material/Grid";
import { Box, Button, Link, Paper, Typography } from "@mui/material";
import { ArrowBackIos } from "@mui/icons-material";

const PackageDetails = () => {
  return (
    <>
      <MainNavbar />

      <Box py={{ xs: 6, md: 8 }} px={5}>
        <Grid
          container
          direction="row"
          justifyContent="space-around"
          alignItems="flex-start"
          px={{ md: 10 }}
          my={{ md: 3 }}
        >
          <Grid item md={9} sx={{ p: { md: 5 } }}>
            <Grid container direction="column">
              <Grid item>
                <Button
                  variant="text"
                  startIcon={<ArrowBackIos />}
                  sx={{
                    py: 1,
                    px: 2,
                    color: "#752eef",
                    fontWeight: 600,
                    border: 2,
                    borderRadius: 2,
                    "&:hover": {
                      color: "white",
                      backgroundColor: "#752eef",
                      borderColor: "#752eef",
                    },
                  }}
                >
                  Rafay Javed ___
                </Button>
              </Grid>
              <Grid item mt={4}>
                <Typography
                  variant="h4"
                  color="#0f0f3d"
                  fontWeight={600}
                  textTransform="capitalize"
                >
                  ONA (Organizational Network Analysis) Coaching ___
                </Typography>
              </Grid>

              <Grid item mt={3}>
                <Typography variant="h6" color="#0f0f3d" fontWeight={600}>
                  Details
                </Typography>
                <Typography
                  variant="subtitle2"
                  sx={{ color: "#74747e", mt: 1, textAlign: "justify" }}
                >
                  Feeling like you are not living up to your potential in life,
                  work, or relationships? Maybe you just need someone to talk to
                  that you can trust? Perhaps an outside view to help you think
                  outside your current thinking?
                  <br />
                  You are not alone most executives struggle with these same
                  issues. We show up to work every day not because we want to
                  but because we have to. This mindset stops us from bringing
                  out the best in us and often derails us from our goals in
                  life. If you are ready and willing to put in a little bit of
                  effort you can change this. My commitment is to be there on
                  your side to support and help you through this journey. All
                  you need is to take the first step and I am with you in your
                  journey to a new and more exciting future.
                  <br /> Looking forward to starting our journey side by side.
                  <br />
                  Sincerely,
                  <br />
                  Mikko ___
                </Typography>
              </Grid>

              <Grid item mt={3}>
                <Typography variant="h6" color="#0f0f3d" fontWeight={600}>
                  Pricing
                </Typography>
                <Typography
                  variant="subtitle2"
                  mt={1}
                  color="#74747e"
                  fontWeight={700}
                >
                  1 session $250.00/package___
                </Typography>
              </Grid>

              <Grid item mt={3}>
                <Typography variant="h6" color="#0f0f3d" fontWeight={600}>
                  Payement Details
                </Typography>
                <Typography
                  variant="subtitle2"
                  sx={{ color: "#74747e", ml: "-15px", textAlign: "justify" }}
                >
                  <ul>
                    <li>
                      This package charges&nbsp;
                      <span style={{ fontWeight: 600 }}>
                        a single package price.
                      </span>
                    </li>
                    <li>
                      Payment is due&nbsp;
                      <span style={{ fontWeight: 600 }}>upon purchase.</span>
                    </li>
                    <li>
                      Invocies are generated and charged automatically based on
                      the above payment schedule.___
                    </li>
                  </ul>
                </Typography>
              </Grid>

              <Grid item mt={3}>
                <Typography variant="h6" color="#0f0f3d" fontWeight={600}>
                  Canellation Policy
                </Typography>
                <Typography
                  variant="subtitle2"
                  color="#74747e"
                  sx={{ ml: "-15px" }}
                >
                  <ul>
                    <li>No refunds</li>
                    <li>
                      View our&nbsp;
                      <Link
                        onClick=""
                        color="#74747e"
                        fontWeight={600}
                        sx={{ "&:hover": { color: "#0f0f3d" } }}
                      >
                        terms of Service
                      </Link>
                      &nbsp;here.___
                    </li>
                  </ul>
                </Typography>
              </Grid>
            </Grid>
          </Grid>

          <Grid item md={3} paddingY={5} width="100%">
            <Paper elevation={8} sx={{ padding: 3 }}>
              <Grid container direction="column">
                <Grid item>
                  <Typography
                    variant="subtitle1"
                    color="#0f0f3d"
                    fontWeight={700}
                  >
                    Your Summary (1 Package):
                  </Typography>
                </Grid>

                <Grid item mt={2}>
                  <Typography
                    variant="subtitle2"
                    color="#0f0f3d"
                    fontWeight={500}
                  >
                    Stop, Pause and Discover
                  </Typography>
                </Grid>

                <Grid item mt={3}>
                  <Grid container direction="row">
                    <Grid item xs={6}>
                      <Typography
                        variant="subtitle1"
                        fontWeight={600}
                        color="#74747e"
                      >
                        Price:
                      </Typography>
                    </Grid>
                    <Grid item xs={6}>
                      <Typography variant="h6" fontWeight={600} color="#0f0f3d">
                        $250.00___
                      </Typography>
                      <Typography variant="subtitle2" color="#74747e">
                        Fixed amount
                      </Typography>
                    </Grid>
                  </Grid>
                </Grid>

                <Grid item mt={1}>
                  <Button
                    fullWidth
                    sx={{
                      py: 1,
                      color: "#752eef",
                      fontWeight: 600,
                      border: 2,
                      borderRadius: 2,
                      "&:hover": {
                        color: "white",
                        backgroundColor: "#752eef",
                        borderColor: "#752eef",
                      },
                    }}
                  >
                    purchase package
                  </Button>
                </Grid>
              </Grid>
            </Paper>
          </Grid>
        </Grid>
      </Box>
      <MainFooter />
    </>
  );
};

export default PackageDetails;
