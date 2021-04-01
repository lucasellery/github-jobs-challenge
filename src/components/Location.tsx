import React from 'react';
import { TextField, Typography, withStyles } from '@material-ui/core';
import InputAdornment from '@material-ui/core/InputAdornment';
import PublicIcon from '@material-ui/icons/Public';
import Radio, { RadioProps } from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormControl from '@material-ui/core/FormControl';
import FormLabel from '@material-ui/core/FormLabel';

import styles from '../styles/components/Location.module.css';

const CustomRadio = withStyles({
  root: {
    fontFamily: 'Poppins',
    fontSize: '14px',
    fontWeight: 500,
    lineHeight: '21px',
    color: '#334680',
    '&$checked': {
      color: '#1E86FF',
    }
  },
  checked: {},
})((props: RadioProps) => <Radio color="default" {...props} />);

const Location: React.FC = () => {

  const [value, setValue] = React.useState('');

  function handleChangeRadio(event: React.ChangeEvent<HTMLInputElement>) {
    setValue((event.target as HTMLInputElement).value);
  }

  return (
    <div className={styles.container} >
      <Typography className={styles.locationTitle}>Location</Typography>

      <form noValidate autoComplete="off" className={styles.form}>
        <TextField
          className={styles.textField}
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

      <FormControl component="fieldset" className={styles.formControl}>
        <RadioGroup
          aria-label="city"
          name="city"
          value={value}
          onChange={handleChangeRadio}
        >
          <FormControlLabel value="london" control={<Radio color="primary" size="small" />} label="London" />
          <FormControlLabel value="amnsterdan" control={<Radio color="primary" size="small" />} label="Amnsterdan" />
          <FormControlLabel value="newYork" control={<Radio color="primary" size="small" />} label="New York" />
          <FormControlLabel value="berlin" control={<Radio color="primary" size="small" />} label="Berlin" />
        </RadioGroup>
      </FormControl>
    </div>
  );
}

export default Location;
