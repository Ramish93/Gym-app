import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { Box } from "@mui/material";

import { fetchData, exerciseOptions } from "../utils/fetchData";
import ExerciseVideos from "../components/ExerciseVideos";
import Details from "../components/Details";
import SimilarExercises from "../components/SimilarExercises";

const ExerciseDetail = () => {
  return (
    <Box>
      <Details />
      <ExerciseVideos />
      <SimilarExercises />
    </Box>
  );
};

export default ExerciseDetail;
