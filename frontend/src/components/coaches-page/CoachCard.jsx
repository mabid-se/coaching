import { ArrowForwardIos, LocationOn, Person } from "@mui/icons-material";
import { Box, Button, Card, Chip, Grid, Typography } from "@mui/material";
import React from "react";
import mahastiImg from "../../assets/images/mahasti-image.jpg";
import { useNavigate } from "react-router-dom";

const CoachCard = (props) => {
  const { coachData } = props;

  const navigate = useNavigate();

  return (
    <>
      <Box>
        <Card elevation={5}>
          <Grid
            container
            direction="row"
            justifyContent="center"
            alignItems="stretch"
            py={2}
            display={{ xs: "none", md: "flex" }}
          >
            {/* --- Coach Image --- */}
            <Grid item md={2} p={{ md: 3 }}>
              <img
                src={mahastiImg}
                alt=""
                style={{ width: "132px", height: "132px", borderRadius: "50%" }}
              />
            </Grid>
            {/* --- Coach Details --- */}
            <Grid item md={7} p={3}>
              <Grid
                container
                direction="column"
                justifyContent="flex-start"
                alignItems="flex-start"
              >
                <Grid item>
                  <Typography
                    variant="h5"
                    sx={{
                      color: "#0f0f3d",
                      fontWeight: 600,
                      textTransform: "capitalize",
                    }}
                  >
                    {coachData.firstName && coachData.lastName
                      ? `${coachData.firstName}   ${coachData.lastName}`
                      : ""}
                  </Typography>
                </Grid>

                <Grid item marginTop={{ md: 1 }}>
                  <Grid container direction="row">
                    <Grid Item>
                      <Chip
                        icon={<LocationOn sx={{ fontSize: "18px" }} />}
                        label={
                          coachData.country && coachData.state && coachData.city
                            ? `${coachData.state} ,  ${coachData.country} ,  ${coachData.city}`
                            : ""
                        }
                        sx={{
                          fontWeight: 500,
                          textTransform: "uppercase",
                          color: "#74747e",
                        }}
                      />
                    </Grid>
                    <Grid Item marginLeft={3}>
                      <Chip
                        icon={<Person sx={{ fontSize: "18px" }} />}
                        label={12 + " years of experience"}
                        sx={{
                          fontWeight: 500,
                          textTransform: "capitalize",
                          color: "#74747e",
                        }}
                      />
                    </Grid>
                  </Grid>
                </Grid>
                <Grid item marginTop={{ md: 1 }}>
                  <Typography variant="body2" fontWeight={400} color="#74747e">
                    {coachData.aboutMe}
                  </Typography>
                </Grid>

                <Grid item marginTop={{ md: 2 }}>
                  <Grid container direction="row">
                    {coachData.Specialties?.map((specItem) => (
                      <Grid item marginRight={3}>
                        <Typography fontWeight={700} color="#74747e">
                          {specItem}
                        </Typography>
                      </Grid>
                    ))}
                  </Grid>
                </Grid>
              </Grid>
            </Grid>
            {/* --- Coach Cost Details --- */}
            <Grid item md={3} p={{ md: 3 }} display="flex">
              <Grid
                container
                direction="column"
                justifyContent="space-between"
                alignItems="flex-end"
              >
                <Grid item>
                  <Typography
                    variant="h5"
                    color="#0f0f3d"
                    fontWeight={600}
                    textAlign="right"
                  >
                    $ {2000}
                  </Typography>
                  <Typography
                    variant="body2"
                    fontWeight={400}
                    color="#74747e"
                    textAlign="right"
                  >
                    + (dynamic) more
                  </Typography>
                </Grid>

                <Grid item>
                  <Button
                    sx={{
                      py: 1,
                      px: 2,
                      color: "#752eef",
                      fontWeight: 600,
                      textAlign: "right",
                      border: 2,
                      borderRadius: 2,
                      "&:hover": {
                        color: "white",
                        backgroundColor: "#752eef",
                        borderColor: "#752eef",
                      },
                    }}
                    onClick={() =>
                      navigate("/coachDetail", { state: coachData?._id })
                    }
                    size="small"
                    endIcon={<ArrowForwardIos style={{ fontSize: "15px" }} />}
                  >
                    view profile
                  </Button>
                </Grid>
              </Grid>
            </Grid>
          </Grid>

          <Grid
            container
            direction="column"
            justifyContent="center"
            alignItems="flex-start"
            display={{ xs: "flex", md: "none" }}
            px={3}
            py={5}
          >
            {/* --- Coach Image --- */}
            <Grid item mx="auto">
              <img
                src={mahastiImg}
                alt=""
                style={{ width: "132px", height: "132px", borderRadius: "50%" }}
              />
            </Grid>
            {/* --- Coach Details --- */}
            <Grid item mt={3} mx="auto">
              <Typography
                variant="h5"
                sx={{
                  color: "#0f0f3d",
                  fontWeight: 600,
                  textTransform: "capitalize",
                  textAlign: "center",
                }}
              >
                {coachData.firstName && coachData.lastName
                  ? `${coachData.firstName}   ${coachData.lastName}`
                  : ""}
              </Typography>
            </Grid>
            <Grid item mt={2} textAlign="left">
              <Chip
                icon={<LocationOn sx={{ fontSize: "18px" }} />}
                label={
                  coachData.country && coachData.state && coachData.city
                    ? `${coachData.state} ,  ${coachData.country} ,  ${coachData.city}`
                    : ""
                }
                sx={{
                  fontWeight: 500,
                  textTransform: "uppercase",
                  color: "#74747e",
                }}
              />
            </Grid>
            <Grid item mt={1}>
              <Chip
                icon={<Person sx={{ fontSize: "18px" }} />}
                label={12 + " years of experience"}
                sx={{
                  fontWeight: 500,
                  textTransform: "capitalize",
                  color: "#74747e",
                }}
              />
            </Grid>
            <Grid item mt={2}>
              <Typography variant="body2" fontWeight={400} color="#74747e">
                {coachData.aboutMe}
              </Typography>
            </Grid>
            <Grid item mt={2}>
              <Grid container direction="row">
                {coachData.Specialties?.map((specItem) => (
                  <Grid item marginRight={3}>
                    <Typography
                      sx={{
                        color: "#74747e",
                        fontWeight: 600,
                        textTransform: "capitalize",
                      }}
                    >
                      {specItem}
                    </Typography>
                  </Grid>
                ))}
              </Grid>
            </Grid>

            {/* --- Coach Cost Details --- */}
            <Grid item mt={3}>
              <Grid
                container
                direction="row"
                justifyContent="flex-start"
                alignItems="center"
              >
                <Grid item xs={10} sm={11}>
                  <Typography variant="h5" color="#0f0f3d" fontWeight={600}>
                    $ {2000}
                  </Typography>
                  <Typography variant="body2" fontWeight={400} color="#74747e">
                    + (no.) more
                  </Typography>
                </Grid>

                <Grid item xs={2} sm={1}>
                  <Button
                    sx={{
                      color: "#5e1de1",
                      fontWeight: 600,
                      border: 2,
                      borderRadius: 15,
                      px: 2,
                    }}
                    onClick={() =>
                      navigate("/coachDetail", { state: coachData?._id })
                    }
                    size="small"
                    endIcon={<ArrowForwardIos style={{ fontSize: "15px" }} />}
                  >
                    profile
                  </Button>
                </Grid>
              </Grid>
            </Grid>
          </Grid>
        </Card>
      </Box>
    </>
  );
};

export default CoachCard;
