import * as React from 'react';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import Card from './Card';

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: theme.palette.text.secondary,
}));

export default function Achievements() {
  return (
    <Grid container spacing={2} justifyContent="space-evenly">
      <Grid container xs={4} justifyContent="center">
        <Card big />
      </Grid>
      <Grid container xs={4}>
        <Card big />
      </Grid>
    </Grid>
  );
}
