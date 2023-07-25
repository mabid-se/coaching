import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import MainNavbar from "../MainNavbar";
import MainFooter from "../MainFooter";
import { Box, Container } from "@mui/material";
import ProfileCover from "../coach-details/ProfileCover";
import DetailedInfo from "../coach-details/DetailedInfo";
import CoachSkillItem from "../coach-details/CoachSkillItem";
import CoachPackages from "../coach-details/CoachPackages";
import axios from "axios";
import config from "../../config";

const CoachDetails = () => {
  const { state } = useLocation();
  const [data, setData] = useState([]);

  // Get a coach data
  const getCoachDetail = () => {
    if (state) {
      axios
        .get(`${config.base_url}/api/v1/coaches/${state}`)
        .then((res) => {
          setData(res.data.data);
        })
        .catch((error) => {
          console.error("The error occured possible cause: ", error);
        });
    }
  };

  useEffect(() => {
    getCoachDetail();
  }, []);

  return (
    <>
      <MainNavbar />
      <Container>
        <Box py={{ xs: 6, md: 8 }} px={3}>
          <ProfileCover data={data} />
          <DetailedInfo data={data} />
          <CoachSkillItem data={data} />
          <CoachPackages data={data} />
        </Box>
      </Container>
      <MainFooter />
    </>
  );
};

export default CoachDetails;
