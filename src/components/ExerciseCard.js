import React from "react";
import { Link } from "react-router-dom";
import { Button, Stack, Typography } from "@mui/material";

const ExerciseCard = ({ index, exercise }) => {
  console.log(exercise);
  return (
    <Link className="exercise-card" to={`/exercise/${exercise.id}`}>
      <img src={exercise.gifUrl} alt="exercise gif" loading="lazy" />
    </Link>
  );
};

export default ExerciseCard;
