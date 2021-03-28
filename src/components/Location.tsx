import React from 'react';
import { TextField, Typography } from '@material-ui/core';
import InputAdornment from '@material-ui/core/InputAdornment';
import PublicIcon from '@material-ui/icons/Public';
import styles from '../styles/components/Location.module.css';

const Location: React.FC = () => {
  return (
    <div className={styles.container} >
      <Typography className={styles.locationTitle}>Location</Typography>

      <form noValidate autoComplete="off" className={styles.form}>
        <TextField
          id="outlined-basic"
          placeholder="City, state, zip code or coutry"
          variant="outlined"
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <PublicIcon className={styles.icon} />
              </InputAdornment>
            )
          }}
        />
      </form>

    </div>
  );
}

export default Location;
