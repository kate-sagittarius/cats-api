import React from 'react';
import {makeStyles} from '@material-ui/styles';

const useStyles = makeStyles({
  root: {
    backgroundColor: '#ffffff',
    minHeight: '96vh',
    boxShadow: '0 0 8px #ccc',
    margin: '12px',
    borderRadius: '16px',
    overflow: 'hidden',
    position: 'relative',
  },
});

const AppWrapper = (props) => {
  const classes = useStyles();

  return (
    <div className={classes.root} {...props} />
  );
}

export default AppWrapper;