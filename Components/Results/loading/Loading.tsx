import React from "react";
import CardMedia from '@mui/material/CardMedia';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import { ShimmerPostItem } from "react-shimmer-effects";
import styles from '../../../styles/Results/cards.module.css';

const LoadingResults = () => {
  return (
    <Box p={0.5}>
      <Grid container spacing={5}>
        <Grid xs={12} sm={12} md={10} lg={5.5} xl={5.8}>
          <>
            <ShimmerPostItem card title text cta />
          </>
        </Grid>
        <Grid xs={12} sm={12} md={10} lg={5.5} xl={5.8}>
          <>
            <ShimmerPostItem card title text cta />
          </>
        </Grid>
        <Grid xs={12} sm={12} md={10} lg={5.5} xl={5.8}>
          <>
            <ShimmerPostItem card title text cta />
          </>
        </Grid>
        <Grid xs={12} sm={12} md={10} lg={5.5} xl={5.8}>
          <>
            <ShimmerPostItem  card title text cta />
          </>
        </Grid>
        <Grid xs={12} sm={12} md={10} lg={5.5} xl={5.8}>
          <>
            <ShimmerPostItem card title text cta />
          </>
        </Grid>
        <Grid xs={12} sm={12} md={10} lg={5.5} xl={5.8}>
          <>
            <ShimmerPostItem className={styles.shimCards} card title text cta />
          </>
        </Grid>
      </Grid>
    </Box>
  );
}

export default LoadingResults;
