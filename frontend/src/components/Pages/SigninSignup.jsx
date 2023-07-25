import React from "react";
import { Box, Grid } from "@mui/material";
import MergedSingInUP from "../SignInUP/MergedSingInUP";

const SigninSignup = () => {
  return (
    <>
      <div
        style={{
          position: "absolute",
          left: "50%",
          top: "50%",
          "-webkit-transform": " translate(-50%, -50%)",
          transform: "translate(-50%, -50%)",
        }}
      >
        <Grid
          container
          justifyContent="center"
          textAlign="center"
          sx={{
            backgroundRepeat: "no-repeat",
          }}
        >
          <Grid item md={9}>
            <MergedSingInUP />
          </Grid>
        </Grid>
        {/* marginy auto 455 s s 234 s */}
        {/* <MergedSingInUP /> */}
        {/* s */}
      </div>
    </>
  );
};

export default SigninSignup;
