import { Box, Grid } from "@mui/material";
import React, { useEffect, useState } from "react";
import mahastiImg from "../../assets/images/mahasti-image.jpg";
import cecileImg from "../../assets/images/cecile-image.jpg";
import fitzsimmonsImg from "../../assets/images/Fitzsimmons-image.jpg";
import CoachCard from "./CoachCard";

const coachesDataList = [
  {
    coachId: 1,
    coachImg: mahastiImg,
    coachName: "Mahasti Mohammadi",
    coachLoc: "ch",
    coachExp: 14,
    coachHours: 4700,
    coachIntro: "executive (leadership development), health and wellness",
    coachDetails:
      "More than 4000 hours of coaching, I have a deep calling for empowering people getting unstuck, gain clarity and achieve their goals. Creating awareness and clarity of perspective enables soft inner transformation.As a Life and Executive coach, retreat leader and speaker, I work with high-performing and committed clients who want to improve their life experience, be it personal or",
    coachSpec: [],
    coachCost: 250.0,
  },
  {
    coachId: 2,
    coachImg: cecileImg,
    coachName: "cecile nocerino",
    coachLoc: "",
    coachExp: 13,
    coachHours: 1000,
    coachIntro: "corporate / organizational, cross-cultural",
    coachDetails:
      "More than 4000 hours of coaching, I have a deep calling for empowering people getting unstuck, gain clarity and achieve their goals. Creating awareness and clarity of perspective enables soft inner transformation.As a Life and Executive coach, retreat leader and speaker, I work with high-performing and committed clients who want to improve their life experience, be it personal or",
    coachSpec: [
      "Communication",
      "Coaching and Mentoring",
      "change management",
      "Conflict Resolution",
      "Emotional Intelligence",
      "Executive Presence",
      "facilitation",
      "Global Perspective",
      "Influence",
      "innovation",
      "Interpersonal Skills",
      "Leadership Development",
      "Managing People",
      "project management",
      "Team Effectiveness",
      "Time Management",
      "Stress Management",
      "engineering",
      "focus / concentration",
      "Management",
      "Planning / Organization",
    ],
    coachCost: 837.63,
  },

  {
    coachId: 3,
    coachImg: fitzsimmonsImg,
    coachName: "dr t fitzsimmons",
    coachLoc: "",
    coachExp: 11,
    coachHours: 1800,
    coachIntro:
      "corporate / organizational, career (onboarding, transition, outplacement)",
    coachDetails:
      "As an experienced leader and coach, I am your thought partner on whatever it is you need to think through, be it a decision you need to make, a goal you are working towards, or a problem you are trying to solve.  I engage with you as a whole person and have many tools and techniques to bring to the session, depending on the what is",
    coachSpec: [
      "Accountability",
      "Coaching and Mentoring",
      "change management",
      "Emotional Intelligence",
      "Executive Presence",
      "facilitation",
      "Interpersonal Skills",
      "Leadership Development",
      "Managing People",
      "project management",
      "Strategic Thinking",
      "Team Effectiveness",
      "Time Management",
      "Stress Management",
      "Vision and Direction",
      "government",
      "Planning / Organization",
    ],
    coachCost: 1800.0,
  },
];

const CoachesList = (props) => {
  const { data } = props;

  return (
    <>
      <Box mt={2}>
        <Grid container direction="column">
          {data?.map((item) => {
            return (
              <Grid item key={item._id} my={2}>
                <CoachCard coachData={item} />
              </Grid>
            );
          })}
        </Grid>
      </Box>
    </>
  );
};

export default CoachesList;
