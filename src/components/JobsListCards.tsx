import { Grid } from '@material-ui/core';
import React from 'react';
import styles from '../styles/components/JobsListCards.module.css';

const JobsListCards: React.FC = () => {
  return (
    <Grid container direction="row" wrap="nowrap" className={styles.container}>
      <Grid
        item
        container
        direction="row"
        wrap="nowrap"
        justify="space-between"
      >
        <Grid
          item
          container
          justify="center"
          alignItems="center"
          className={styles.photoContainer}
        >
          Photo
        </Grid>

        <Grid item container direction="column" justify="space-between">
          <Grid item>
            <p>Kasisto</p>
          </Grid>
          <Grid item>
            <p>Front-end Software Engineer</p>
          </Grid>
          <Grid item>Full time</Grid>
        </Grid>
      </Grid>

      <Grid
        item
        container
        direction="row"
        wrap="nowrap"
        justify="space-between"
        alignItems="flex-end"
      >
        <Grid item>
          icon
          <p>New York</p>
        </Grid>

        <Grid item>
          clock
          <p>5 days ago</p>
        </Grid>
      </Grid>
    </Grid>
  )
}

export default JobsListCards;
