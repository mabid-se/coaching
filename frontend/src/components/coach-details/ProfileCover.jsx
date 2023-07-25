import React from "react";
import { Grid, Typography, Button, Box, Divider } from "@mui/material";
import {
  DateRange,
  Facebook,
  Instagram,
  LinkedIn,
  Twitter,
} from "@mui/icons-material";
import servaneDP from "../../assets/images/DP-Servane Mouazan.png";
import linkedinPng from "../../assets/images/linkedin-in.png";

const coachHighlights = [
  "corporate / organizational",
  "groups & teams",
  "startup",
  "small business",
  "high potentials",
  "executive",
];

const ProfileCover = ({ data }) => {
  const userData = data[0];

  const sliceHighlights = coachHighlights.slice(0, 3);

  return (
    <>
      <Box mt={5}>
        <Grid
          container
          direction="row"
          justifyContent="space-between"
          sx={{
            display: { xs: "none", md: "flex" },
            background: "#5e1de1",
            borderRadius: 2,
          }}
        >
          {/* --- Coach Image --- */}
          <Grid
            item
            md={3}
            p={5}
            sx={{ display: "flex", position: "relative" }}
          >
            <img
              src={servaneDP}
              style={{
                position: "absolute",
                top: 50,
                borderRadius: "100%",
                border: "2px solid #fff",
                width: "70%",
                marginLeft: 8,
              }}
            />
          </Grid>
          {/* --- Coach Name & Highlights --- */}
          <Grid item md={9} paddingTop={3} paddingBottom={1}>
            <Grid container direction="column">
              {/* --- Coach Highlights Upper Section --- */}
              <Grid item>
                <Grid container direction="row" justifyContent="space-between">
                  {/* --- Coach Name Section --- */}
                  <Grid item md={9} p={3}>
                    <Grid container direction="row">
                      <Grid item>
                        <Typography variant="h4" color="white" fontWeight={600}>
                          {userData && userData.firstName && userData.lastName
                            ? `${userData.firstName} ${userData.lastName}`
                            : ""}
                        </Typography>
                      </Grid>
                      <Grid item marginLeft={2}>
                        <img
                          src={linkedinPng}
                          alt="linkedin-png"
                          style={{
                            padding: 15,
                            borderRadius: "100%",
                            background: "white",
                          }}
                        />
                      </Grid>
                      {userData?.socialLinks?.map((item, key) => {})}
                    </Grid>
                  </Grid>

                  {/* --- Coach Schedule Inteview Section --- */}
                  <Grid item md={3} p={3}>
                    <Button variant="contained" startIcon={<DateRange />}>
                      schedule interview
                    </Button>
                  </Grid>
                </Grid>
              </Grid>

              {/* --- Coach Highlights Upper Section --- */}
              <Grid item p={3}>
                <Grid container direction="row">
                  <Grid
                    item
                    marginRight={3}
                    border={1}
                    borderColor="white"
                    borderRadius={5}
                    paddingY={1}
                    paddingX={2}
                  >
                    <Typography
                      variant="subtitle2"
                      color="white"
                      fontWeight={700}
                      textTransform="capitalize"
                    >
                      corporate / organizational
                    </Typography>
                  </Grid>
                </Grid>
              </Grid>
            </Grid>
          </Grid>
        </Grid>

        <Grid
          container
          direction="column"
          justifyContent="center"
          alignItems="center"
          sx={{
            display: { xs: "flex", md: "none" },
            background: "#5e1de1",
            mt: 8,
            pt: 14,
            pb: 4,
            px: 3,
            borderRadius: 5,
          }}
        >
          {/* --- Coach Image --- */}
          <Grid
            item
            width="100%"
            sx={{
              display: "inline-flex",
              justifyContent: "center",
            }}
          >
            <img
              src={servaneDP}
              style={{
                position: "absolute",
                // top: 180,
                top: 100,
                borderRadius: "50%",
                border: "2px solid #fff",
                width: "35%",
              }}
            />
          </Grid>
          {/* --- Coach Name & Highlights --- */}
          <Grid item>
            <Typography
              variant="h4"
              sx={{
                color: "white",
                fontWeight: 600,
                textTransform: "capitalize",
              }}
            >
              {userData && userData.firstName && userData.lastName
                ? `${userData.firstName} ${userData.lastName}`
                : ""}
            </Typography>
          </Grid>
          {/* --- Coach Highlights & Social Link --- */}
          {/* --- Coach Highlights --- */}
          <Grid item mt={2}>
            <Grid
              container
              direction="row"
              // justifyContent="flex-start"
              justifyContent="flex-start"
              alignItems="center"
              sx={{
                color: "white",
                fontWeight: 600,
                textTransform: "capitalize",
              }}
            >
              {sliceHighlights.map((item) => (
                <Grid item mt={1}>
                  <Typography
                    variant="body2"
                    sx={{
                      border: 1,
                      borderRadius: 15,
                      py: 1,
                      px: 2,
                      ml: 1,
                    }}
                  >
                    {item}
                  </Typography>
                </Grid>
              ))}
            </Grid>
          </Grid>

          <Grid item mt={4}>
            <Button
              startIcon={<DateRange />}
              sx={{ px: 3, color: "white", border: 2, borderRadius: 2 }}
            >
              schedule interview
            </Button>
          </Grid>
          <Grid item sx={{ my: 3, width: "100%", color: "white" }}>
            <Divider
              variant="middle"
              sx={{
                px: 3,
                bgcolor: "white",
                // "&::before, &::after": {
                //   borderColor: "white",
                // },
              }}
            >
              {/* <Typography>OR</Typography> */}
            </Divider>
          </Grid>

          <Grid item>
            <Grid
              container
              direction="row"
              justifyContent="center"
              alignItems="center"
              sx={{ color: "white" }}
              spacing={4}
            >
              <Grid item>
                <Typography onClick="" sx={{ cursors: "pointer" }}>
                  <LinkedIn />
                </Typography>
              </Grid>
              <Grid item>
                <Typography onClick="" sx={{ cursors: "pointer" }}>
                  <Facebook />
                </Typography>
              </Grid>
              <Grid item>
                <Typography onClick="" sx={{ cursors: "pointer" }}>
                  <Twitter />
                </Typography>
              </Grid>
              <Grid item>
                <Typography onClick="" sx={{ cursors: "pointer" }}>
                  <Instagram />
                </Typography>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Box>
    </>
  );
};

export default ProfileCover;
