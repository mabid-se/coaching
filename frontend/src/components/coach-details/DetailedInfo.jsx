import React from "react";
import { Box, Chip, Typography } from "@mui/material";
import { LocationOn } from "@mui/icons-material";

const DetailedInfo = ({ data }) => {
  const userData = data[0];
  return (
    <>
      <Box
        mt={6}
        // paddingX={4}
      >
        <Chip
          label={
            userData?.country && userData?.state && userData?.city
              ? `${userData.state} ,  ${userData.country} ,  ${userData.city}`
              : ""
          }
          icon={<LocationOn />}
          sx={{
            py: 1,
            px: 2,
            fontSize: "20px",
            fontWeight: 500,
            color: "#74747e",
            textTransform: "capitalize",
          }}
        />

        <Typography
          variant="subtitle1"
          mt={3}
          textTransform="uppercase"
          color="#5e1de1"
          fontWeight={600}
        >
          about me
        </Typography>

        <Typography variant="body2" mt={2} color="#74747e" fontWeight={400}>
          {userData?.aboutMe ? userData.aboutMe : "No Data"}
        </Typography>
      </Box>
    </>
  );
};

export default DetailedInfo;
