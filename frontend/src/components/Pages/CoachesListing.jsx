import { Box, Container, Grid, Link, Typography } from "@mui/material";
import React, { useEffect, useState } from "react";
import CoachesList from "../coaches-page/CoachesList";
import MainFooter from "../MainFooter";
import MainNavbar from "../MainNavbar";
import axios from "axios";
import config from "../../config";

const CoachesListing = () => {
  const [data, setData] = useState([]);
  const [dataLen, setDataLen] = useState(0);

  // Get all coaches
  const getCoaches = () => {
    axios
      .get(`${config.base_url}/api/v1/coaches`)
      .then((res) => {
        setData(res.data.data);
        setDataLen(res.data.count);
      })
      .catch((error) => {
        console.error("The error occured possible cause: ", error);
      });
  };

  useEffect(() => {
    getCoaches();
  }, []);

  return (
    <>
      <MainNavbar />

      <Container>
        <Box py={{ xs: 6, md: 8 }} px={3}>
          <Grid
            container
            direction="column"
            justifyContent="center"
            alignItems="stretch"
            spacing={2}
          >
            <Grid item>
              <Typography variant="h2" color="#0f0f3d" fontWeight={600}>
                Coaches Listing
              </Typography>
            </Grid>
            <Grid item>
              <Typography variant="body1">
                Independent Coaches {dataLen}
                &nbsp; (
                <Link
                  onClick=""
                  sx={{
                    color: "#0f0f3d",
                    textDecoration: "none",
                    "&:hover": {
                      color: "#752eef",
                      fontWeight: 600,
                      textDecoration: "underline",
                    },
                  }}
                >
                  view all
                </Link>
                )
              </Typography>
            </Grid>
            <Grid item>
              <CoachesList data={data} />
            </Grid>
          </Grid>
        </Box>
      </Container>

      <MainFooter />
    </>
  );
};

export default CoachesListing;
