import React from 'react';
import { Button, Grid, TextField, InputBase } from '@material-ui/core';
import WorkOutlineIcon from '@material-ui/icons/WorkOutline';
import styles from '../styles/components/SearchArea.module.css';

export function SearchArea() {
  return (
    <Grid
      container
      justify="center"
      alignItems="center"
      className={styles.container}
    >
      <Grid
        item
        container
        direction="row"
        wrap="nowrap"
        justify="space-between"
        alignItems="center"
        className={styles.inputArea}
      >
        <Grid
          item
          container
          alignItems="center"
          direction="row"
          wrap="nowrap"
          className={styles.inputSearch}
        >
          <Grid item className={styles.caseIcon}>
            <WorkOutlineIcon />
          </Grid>
          <Grid item>
            <InputBase
              placeholder="Title, companies, expertize"
              // value="lucas"
              inputProps={{ 'aria-label': 'naked' }}
              className={styles.inputBase}
            />
          </Grid>
        </Grid>

        <Grid item>
          <Button className={styles.buttonSearch}>
            <p>Search</p>
          </Button>
        </Grid>
      </Grid>
    </Grid>
  )
}
