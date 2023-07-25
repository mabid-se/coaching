import React from "react";
import {
  Box,
  FormControl,
  InputAdornment,
  Link,
  TextField,
  Typography,
  Button,
  Grid,
} from "@mui/material";
import { Lock, MailOutline } from "@mui/icons-material";
import axios from "axios";
import config from "../../config";
import { useNavigate } from "react-router-dom";

const SigninDetails = () => {
  const navigate = useNavigate();

  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");
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

    // checking if any value is empty
    if (email === "" || password === "" || !emailRegex.test(email)) {
      if (email === "") setEmailError(true);
      if (email !== "" && !emailRegex.test(email)) {
        setEmailErrorMessage("Invalid email");
        setEmailError(true);
      }
      if (password === "") setPasswordError(true);
    } else {
      return true;
    }
  };

  // Api request
  const submit = () => {
    if (validator()) {
      const data = {};
      data.email = email;
      data.password = password;
      axios
        .post(`${config.base_url}/api/v1/auth/coaches/login`, data)
        .then((res) => {
          if (res.data.success) navigate("/");
        })
        .catch((error) => {
          if (error.code === "ERR_NETWORK") alert(error.message);
          if (error.response.data.error) alert(error.response.data.error);
        });
    }
  };

  return (
    <>
      <Box paddingY={1} sx={{ margin: "20px auto" }}>
        <FormControl fullWidth>
          <TextField
            error={emailError}
            id="user-email"
            value={email}
            type="email"
            autoComplete={false}
            onChange={(e) => handleChange(e, setEmail, setEmailError)}
            placeholder="your@example.com"
            helperText={emailError ? emailErrorMessage : ""}
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <MailOutline />
                </InputAdornment>
              ),
            }}
            size="small"
          />

          <TextField
            id="user-password"
            error={passwordError}
            value={password}
            onChange={(e) => handleChange(e, setPassword, setPasswordError)}
            placeholder="Password"
            type="password"
            autoComplete={false}
            helperText={passwordError ? "Field is required" : ""}
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <Lock />
                </InputAdornment>
              ),
            }}
            size="small"
            sx={{
              mt: 2,
            }}
          />
          <Link onClick={() => navigate("/")} sx={{ textDecoration: "none" }}>
            <Typography
              variant="subtitle1"
              sx={{
                mt: 2,
                textAlign: "right",
              }}
            >
              <Link
                onClick={""}
                sx={{
                  color: "#007bad",
                  // fontWeight: 600,
                  textAlign: "right",

                  textDecoration: "none",
                  cursor: "pointer",
                  "&:hover": { textDecoration: "underline" },
                }}
              >
                Forgot Password?
              </Link>
            </Typography>
          </Link>
          <Grid item marginTop={2}>
            <FormControl fullWidth>
              <Button
                onClick={submit}
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
                Sign In
              </Button>
            </FormControl>
          </Grid>
        </FormControl>
      </Box>
    </>
  );
};

export default SigninDetails;
