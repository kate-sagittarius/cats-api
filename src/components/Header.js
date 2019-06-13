import React from 'react';
import {makeStyles} from '@material-ui/styles';
import {Link} from 'react-router-dom';

import HeaderImg from '../images/header.png';

const useStyles = makeStyles({
  header: {
    background: `#ffffff url('${HeaderImg}')`,
    minHeight: '168px',
    backgroundPositionX: 'right',
    backgroundPositionY: 'bottom',
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'contain',
    padding: '20px 40px',
    display: 'flex',
    alignItems: 'flex-end',
  },
  h1Link: {
    textDecoration: 'none',
  },
  h1: {
    fontFamily: '"Fredericka the Great", cursive',
    fontSize: '80px',
    fontWeight: '400',
    backgroundColor: 'rgba(255, 255, 255, 0.3)',
    borderRadius: '16px',
    color: '#000',
  },
});

const Header = () => {
    const classes = useStyles();

    return (
        <header className={classes.header}>
            <Link to="/" className={classes.h1Link}><h1 className={classes.h1}>{"Cats Universe"}</h1></Link>
        </header>
    )
}

export default Header;