import * as React from "react";
import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";
import Card from "./Card";

import image from "./img/sample.webp";

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: "center",
  color: theme.palette.text.secondary,
}));

export default function MediaCoverage() {
  const header = "Transformative education",
    content =
      "UChicago students develop the habits of mind and intellectual skills needed to confront complex challenges.";
  return (
    <Box sx={{ flexGrow: 1 }}>
      <Grid container spacing={2} justifyContent="space-evenly">
        <Grid container item xs={4} justifyContent="center">
          <Card header={header} content={content} img={image} />
        </Grid>
        <Grid container item xs={4} justifyContent="center">
          <Card header={header} content={content} img={image} />
        </Grid>
        <Grid container item xs={4} justifyContent="center">
          <Card header={header} content={content} img={image} />
        </Grid>
      </Grid>
    </Box>
  );
}
