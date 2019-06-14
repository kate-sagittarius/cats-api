import React from 'react';
import {Link} from 'react-router-dom';

import { makeStyles } from '@material-ui/core/styles';
import SnackbarContent from '@material-ui/core/SnackbarContent';
import Button from '@material-ui/core/Button';

import CatImg from '../images/cats.png'

const useStyles = makeStyles({
  mainNotFound: {
    minHeight: 'calc(100vh - 293px)',
    background: `url(${CatImg})`,
    backgroundPosition: 'center bottom',
    backgroundRepeatY: 'no-repeat',
  },
  snackbarWrapper: {
    maxWidth: 600,
    padding: '60px 20px',
    margin: '0 auto',
  },
  snackbar: {
    marginTop: '40px',
    whiteSpace: 'pre-line',
  },
});

const action = (
  <Button color="secondary" size="small" component={Link} to={'/facts'}>
    Go back to cat facts
  </Button>
);


 const NotFound = () => {
  const classes = useStyles();

   return (
    <div className={classes.mainNotFound}>
      <div className={classes.snackbarWrapper}>
        <SnackbarContent
          className={classes.snackbar}
          message={`Unfortunately, the page you are looking for can't be reached:( \n But we've got a lot of amazing cat facts for you!`}
          action={action}
        />
      </div>
    </div>
    
   );
 }

 export default NotFound;