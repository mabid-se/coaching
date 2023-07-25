import React from "react";
import { Box, Button, Grid, Typography } from "@mui/material";
import { ArrowForwardIos } from "@mui/icons-material";
import { useNavigate } from "react-router-dom";

const CoachPackages = ({ data }) => {
  const userData = data[0];
  const navigate = useNavigate();

  return (
    <>
      <Box mt={8}>
        <Typography variant="h4" color="#0f0f3d" fontWeight={600}>
          Packages
        </Typography>
        <Grid
          container
          direction="row"
          mt={3}
          py={{ xs: 3, md: 5 }}
          px={{ xs: 3, md: 4 }}
          border={1}
          borderRadius={2}
          borderColor="#5e1de1"
        >
          <Grid item md={10}>
            <Typography
              variant="h5"
              textTransform="capitalize"
              color="#0f0f3d"
              fontWeight={600}
            >
              coaching.com: conscious innovation: transform poeple's lives ..
              and your own
            </Typography>

            <Typography
              variant="subtitle2"
              textTransform="uppercase"
              color="#0f0f3d"
              fontWeight={600}
              mt={1}
            >
              £1,476.00 Fixed amount
            </Typography>

            <Typography
              variant="subtitle2"
              color="#74747e"
              fontWeight={400}
              mt={2}
            >
              Do you love to invest in social change and ignite positive impact?
            </Typography>

            <Typography
              variant="subtitle2"
              color="#74747e"
              fontWeight={400}
              mt={3}
            >
              Step into a 3-month Thinking Partnership programme where you can
              think independently for yourself and as yourself, without
              judgment, advice or "training"
            </Typography>
          </Grid>
          <Grid item md={2} mt={2} alignItems="center" justifyContent="center">
            <Button
              endIcon={<ArrowForwardIos />}
              onClick={() => navigate("/packDetails")}
              sx={{
                py: 1,
                px: 2,
                color: "#5e1de1",
                fontWeight: 600,
                border: 2,
                "&:hover": {
                  color: "white",
                  background: "#5e1de1",
                  border: 2,
                  borderColor: "#5e1de1",
                },
              }}
            >
              view details
            </Button>
          </Grid>
        </Grid>
      </Box>
    </>
  );
};

export default CoachPackages;
