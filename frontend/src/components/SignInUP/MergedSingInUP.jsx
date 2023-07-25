import React, { useState } from "react";
import { Box, Tab, Tabs, Grid, Typography, Link, Paper } from "@mui/material";
import PropTypes from "prop-types";
import SigninDetails from "./SigninDetails";
import SignupDetails from "./SignupDetails";
import coachLogo from "../../assets/images/coaching-logo.png";
import { useNavigate } from "react-router-dom";

const TabPanel = (props) => {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && <Box>{children}</Box>}
    </div>
  );
};

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    "aria-controls": `simple-tabpanel-${index}`,
  };
}

const MergedSingInUP = () => {
  const navigate = useNavigate();
  const [value, setValue] = useState(0);
  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <>
      <Paper
        sx={{ px: 3, backgroundColor: "white" }}
        borderRadius={5}
        elevation={16}
      >
        <Grid
          container
          direction="column"
          justifyContent="center"
          sx={{
            py: { xs: 3, md: 4 },
            px: { xs: 3, md: 6 },
            minWidth: "350px",
            border: { xs: 2, md: 0 },
            borderRadius: 2,
            borderColor: { xs: "#752eef" },
          }}
        >
          <Grid item marginTop={2} xs={12}>
            <Link onClick={() => navigate("/")} sx={{ cursor: "pointer" }}>
              <img
                src={coachLogo}
                alt="coaching - logo"
                style={{ width: "50%" }}
              />
            </Link>
          </Grid>
          <Grid item marginTop={2}>
            <Typography variant="subtitle1" color="#333333" fontWeight={600}>
              {value === 0 ? "Welcome Back!" : "Sign Up First!"}
            </Typography>
          </Grid>
          <Grid item marginTop={2}>
            <Tabs
              value={value}
              onChange={handleChange}
              aria-label="merged sign in/sign up tabs"
              TabIndicatorProps={{
                sx: {
                  backgroundColor: "#752eef",
                },
              }}
              variant="fullWidth"
              sx={{
                "& .MuiTab-root.Mui-selected": {
                  color: "#752eef",
                  fontWeight: 700,
                },
              }}
            >
              <Tab
                label="Sign In"
                {...a11yProps(0)}
                sx={{
                  ".css-1ujykiq-MuiButtonBase-root-MuiTab-root.Mui-selected": {
                    color: "#752eef",
                  },
                }}
              />
              <Tab label="Sign Up" {...a11yProps(1)} />
            </Tabs>

            <TabPanel value={value} index={0}>
              <SigninDetails />
            </TabPanel>
            <TabPanel value={value} index={1}>
              <SignupDetails />
            </TabPanel>
          </Grid>
          <Grid item>
            <Typography variant="body2" color="#0000008a">
              {value === 0 ? "By signing in" : "By signing up"}, you agree
              to&nbsp;
              <Link sx={{ textDecoration: "none", color: "#000000de" }}>
                terms of service
              </Link>
              &nbsp;and&nbsp;
              <Link sx={{ textDecoration: "none", color: "#000000de" }}>
                privacy policy
              </Link>
              .
            </Typography>
          </Grid>
        </Grid>
      </Paper>
    </>
  );
};

export default MergedSingInUP;
