import React from 'react';
import styles from '../styles/components/Time.module.css';
import FormGroup from '@material-ui/core/FormGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox, { CheckboxProps } from '@material-ui/core/Checkbox';

const Time: React.FC = () => {

  const [state, setState] = React.useState({
    fullTime: false,
  })

  function handleChange( event: React.ChangeEvent<HTMLInputElement> ) {
    setState({
      ...state, [event.target.name]: event.target.checked
    });
  };

  return (
    <div>
      <FormGroup row>
        <FormControlLabel
          className={styles.checkbox}
          control={
            <Checkbox
              color="primary"
              checked={state.fullTime}
              onChange={handleChange}
              name="fullTime"
            />
          }
          label="Full time"
        />
      </FormGroup>
    </div>
  );
}

export default Time;
