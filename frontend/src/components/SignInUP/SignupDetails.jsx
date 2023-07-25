import React from "react";
import {
  Box,
  FormControl,
  FormControlLabel,
  FormLabel,
  InputAdornment,
  Radio,
  RadioGroup,
  TextField,
  Typography,
  Grid,
  Button,
} from "@mui/material";
import { Dialpad, Flag, MailOutline, Person } from "@mui/icons-material";
import axios from "axios";
import config from "../../config";

const formControlLabelStyle = {
  "& .MuiFormControlLabel-label": {
    fontSize: "13px",
  },
};

const SignupDetails = () => {
  // States
  const [firstName, setFirstName] = React.useState("");
  const [lastName, setLastName] = React.useState("");
  const [gender, setGender] = React.useState("male");
  const [email, setEmail] = React.useState("");
  const [country, setCountry] = React.useState("");
  const [contact, setContact] = React.useState("");
  const [firstNameError, setFirstNameError] = React.useState("");
  const [lastNameError, setLastNameError] = React.useState("");
  const [genderError, setGenderError] = React.useState("");
  const [countryError, setCountryError] = React.useState("");
  const [contactError, setContactError] = React.useState("");
  const [emailError, setEmailError] = React.useState(false);
  const [passwordError, setPasswordError] = React.useState(false);
  const [emailErrorMessage, setEmailErrorMessage] =
    React.useState("Field is required");

  // Gloabl function to handle field value cha
  const handleChange = (e, func, funcErro) => {
    func(e.target.value);
    funcErro(false);
  };

  // checking validations
  const validator = () => {
    // Regexes
    const emailRegex =
      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

    // cehcking if any value is empty
    if (
      firstName === "" ||
      lastName === "" ||
      email === "" ||
      !emailRegex.test(email) ||
      country === "" ||
      contact === ""
    ) {
      if (firstName === "") setFirstNameError(true);
      if (lastName === "") setLastNameError(true);
      if (email === "") setEmailError(true);
      if (email !== "" && !emailRegex.test(email)) {
        setEmailErrorMessage("Invalid email");
        setEmailError(true);
      }
      if (country === "") setCountryError(true);
      if (contact === "") setContactError(true);
    } else {
      return true;
    }
  };

  // Api request
  const submit = () => {
    if (validator()) {
      const data = {};
      data.firstName = firstName;
      data.lastName = lastName;
      data.gender = gender;
      data.email = email;
      data.country = country;
      data.phone = contact;
      data.createdBy = "self";
      axios
        .post(`${config.base_url}/api/v1/auth/coaches/signup`, data)
        .then((res) => {
          if (res.data.success) alert(res.data.message);
        })
        .catch((error) => {
          console.log("Error occued possible cause ", error);
          if (error.code === "ERR_NETWORK") alert(error.message);
          if (error.response.data.error) alert(error.response.data.error);
        });
    }
  };

  return (
    <>
      <Box paddingY={1}>
        <FormControl fullWidth>
          <Typography
            variant="subtitle1"
            sx={{ mt: 1, color: "#007bad", fontWeight: 600, textAlign: "left" }}
          >
            General Information
          </Typography>
          <Grid
            container
            direction="row"
            justifyContent="center"
            alignItems="center"
            spacing={2}
            mb={1}
          >
            <Grid item xs={6}>
              <TextField
                id="first-name"
                error={firstNameError}
                value={firstName}
                onChange={(e) =>
                  handleChange(e, setFirstName, setFirstNameError)
                }
                placeholder="First Name"
                type="text"
                helperText={firstNameError ? "field is required" : ""}
                InputProps={{
                  startAdornment: (
                    <InputAdornment position="start">
                      <Person />
                    </InputAdornment>
                  ),
                }}
                size="small"
                sx={{ mt: 2 }}
              />
            </Grid>
            <Grid item xs={6}>
              <TextField
                id="last-name"
                placeholder="Last Name"
                type="text"
                error={lastNameError}
                value={lastName}
                onChange={(e) => handleChange(e, setLastName, setLastNameError)}
                helperText={lastNameError ? "field is required" : ""}
                InputProps={{
                  startAdornment: (
                    <InputAdornment position="start">
                      <Person />
                    </InputAdornment>
                  ),
                }}
                size="small"
                sx={{ mt: 2 }}
              />
            </Grid>
          </Grid>
          <Grid
            container
            direction="row"
            justifyContent="flex-start"
            alignItems="center"
            spacing={4}
          >
            <Grid item>
              <Typography variant="body1" color="#333333" fontWeight={600}>
                Gender
              </Typography>
            </Grid>
            <Grid item>
              <RadioGroup name="gender-radio" size="small">
                <Grid
                  container
                  direction="row"
                  justifyContent="flex-start"
                  alignItems="center"
                >
                  <Grid item>
                    <FormControlLabel
                      value="female"
                      control={<Radio />}
                      onClick={() => setGender("female")}
                      label="Female"
                      sx={{
                        ...formControlLabelStyle,
                      }}
                    />
                  </Grid>
                  <Grid item>
                    <FormControlLabel
                      value="male"
                      control={<Radio />}
                      label="Male"
                      onClick={() => setGender("male")}
                      sx={{ ...formControlLabelStyle }}
                    />
                  </Grid>
                </Grid>
              </RadioGroup>
            </Grid>
          </Grid>

          <Typography
            variant="subtitle1"
            color="#007bad"
            fontWeight={700}
            textAlign="left"
            mt={3}
          >
            Contact Details
          </Typography>
          <TextField
            id="user-email"
            placeholder="your@example.com"
            error={emailError}
            type="email"
            value={email}
            onChange={(e) => handleChange(e, setEmail, setEmailError)}
            helperText={emailError ? emailErrorMessage : ""}
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <MailOutline />
                </InputAdornment>
              ),
            }}
            size="small"
            sx={{ mt: 2 }}
          />
          <TextField
            id="user-country"
            placeholder="Country"
            type="text"
            error={countryError}
            value={country}
            onChange={(e) => handleChange(e, setCountry, setCountryError)}
            helperText={countryError ? "field is required" : ""}
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <Flag />
                </InputAdornment>
              ),
            }}
            size="small"
            sx={{ mt: 2 }}
          />
          <TextField
            id="user-number"
            placeholder="Contact Number"
            type="text"
            error={contactError}
            value={contact}
            onChange={(e) => handleChange(e, setContact, setContactError)}
            helperText={contactError ? "field is required" : ""}
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <Dialpad />
                </InputAdornment>
              ),
            }}
            size="small"
            sx={{ mt: 2 }}
          />
          <Grid onClick={submit} item mt={2} mb={1}>
            <FormControl fullWidth>
              <Button
                sx={{
                  color: "#752eef",
                  border: 2,
                  "&:hover": {
                    color: "white",
                    borderColor: "#752eef",
                    background: "#752eef",
                    fontWeight: 600,
                  },
                }}
              >
                Sign Up
              </Button>
            </FormControl>
          </Grid>
        </FormControl>
      </Box>
    </>
  );
};

export default SignupDetails;
