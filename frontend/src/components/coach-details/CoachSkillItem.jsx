import React from "react";
import { Box, Grid, Typography } from "@mui/material";

const CoachSkillItem = ({ data }) => {
  const userData = data[0];

  return (
    <>
      <Box
      // paddingX={4}
      // mt={3}
      >
        <Typography
          variant="subtitle1"
          mt={3}
          textTransform="uppercase"
          color="#5e1de1"
          fontWeight={600}
        >
          {"Specialities"}
        </Typography>

        <Grid container direction="row">
          {userData?.Specialties.map((item) => (
            <Grid
              item
              sx={{
                mt: 2,
                mr: 3,
                py: 1,
                px: 2,
                border: 1,
                borderColor: "#5e1de1",
                borderRadius: 15,
              }}
            >
              <Typography
                variant="body2"
                fontWeight={600}
                textTransform="capitalize"
              >
                {item}
              </Typography>
            </Grid>
          ))}
        </Grid>

        <Typography
          variant="subtitle1"
          mt={3}
          textTransform="uppercase"
          color="#5e1de1"
          fontWeight={600}
        >
          {"Caoching Types"}
        </Typography>

        <Grid container direction="row">
          {userData?.coachingTypes.map((item) => (
            <Grid
              item
              sx={{
                mt: 2,
                mr: 3,
                py: 1,
                px: 2,
                border: 1,
                borderColor: "#5e1de1",
                borderRadius: 15,
              }}
            >
              <Typography
                variant="body2"
                fontWeight={600}
                textTransform="capitalize"
              >
                {item}
              </Typography>
            </Grid>
          ))}
        </Grid>

        <Typography
          variant="subtitle1"
          mt={3}
          textTransform="uppercase"
          color="#5e1de1"
          fontWeight={600}
        >
          {"Traget Audience"}
        </Typography>

        <Grid container direction="row">
          {userData?.targetAudience.map((item) => (
            <Grid
              item
              sx={{
                mt: 2,
                mr: 3,
                py: 1,
                px: 2,
                border: 1,
                borderColor: "#5e1de1",
                borderRadius: 15,
              }}
            >
              <Typography
                variant="body2"
                fontWeight={600}
                textTransform="capitalize"
              >
                {item}
              </Typography>
            </Grid>
          ))}
        </Grid>

        <Typography
          variant="subtitle1"
          mt={3}
          textTransform="uppercase"
          color="#5e1de1"
          fontWeight={600}
        >
          {"Languages"}
        </Typography>

        <Grid container direction="row">
          {userData?.language.map((item) => (
            <Grid
              item
              sx={{
                mt: 2,
                mr: 3,
                py: 1,
                px: 2,
                border: 1,
                borderColor: "#5e1de1",
                borderRadius: 15,
              }}
            >
              <Typography
                variant="body2"
                fontWeight={600}
                textTransform="capitalize"
              >
                {item}jh
              </Typography>
            </Grid>
          ))}
        </Grid>
      </Box>
    </>
  );
};

export default CoachSkillItem;
