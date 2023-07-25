import { Button, Grid, Typography } from "@mui/material";
import React from "react";
import bgBanner from "../../assets/images/lp-banner-bg.jpg";

const HeroSection = () => {
  return (
    <>
      <Grid
        container
        direction="row"
        justifyContent="flex-start"
        alignItems="center"
        sx={{
          padding: { xs: 4, md: 6 },
          backgroundImage: `url(${bgBanner})`,
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
        }}
      >
        <Grid item md={5} my={9} pl={{ md: 6 }}>
          <Grid
            container
            direction="column"
            justifyContent="flex-start"
            alignItems="flex-start"
          >
            <Grid item>
              <Typography
                variant="h2"
                textTransform="capitalize"
                color="white"
                fontWeight={{ xs: 600, md: 800 }}
                sx={{
                  "-webkit-text-stroke-width": { xs: "1px", md: 0 },
                  "-webkit-text-stroke-color": "#752eef",
                }}
              >
                the all-in-one destination for professional coaching
              </Typography>
            </Grid>

            <Grid item mt={{ xs: 2, md: 4 }}>
              <Typography variant="h6" color="white" fontWeight={600}>
                Our platform allows you to manage, track & measure coaching, and
                to learn from the best professional coaching programs.
              </Typography>
            </Grid>

            <Grid item mt={4}>
              <Button
                sx={{
                  marginRight: 2,
                  paddingX: 2,
                  color: "white",
                  border: 2,
                  borderRadius: 5,
                  borderColor: "#752eef",
                  background: "#752eef",
                  "&:hover": {
                    color: "#752eef",
                    fontWeight: 600,
                  },
                }}
              >
                our platform
              </Button>

              <Button
                sx={{
                  marginLeft: 2,
                  paddingX: 2,
                  fontWeight: 600,
                  color: "#752eef",
                  border: 2,
                  borderRadius: 5,
                  "&:hover": {
                    fontWeight: 500,
                    color: "white",
                    borderColor: "#752eef",
                    background: "#752eef",
                  },
                }}
              >
                see features
              </Button>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </>
  );
};

export default HeroSection;
