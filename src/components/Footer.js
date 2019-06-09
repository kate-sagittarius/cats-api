import React from 'react';
import {makeStyles} from '@material-ui/styles';

const useStyles = makeStyles({
    footer: {
        padding: '28px 24px',
        backgroundColor: '#FCA311',
        bottom: '0',
        width: '100%',
        display: 'flex',
        justifyContent: 'flex-end',
        boxSizing: 'border-box',
    },
    footerHeading: {
        fontFamily: '"Fredericka the Great", cursive',
        fontWeight: '300',
        fontSize: '24px',
    },
})

const Footer = () => {
    const classes = useStyles();

    return (
        <footer className={classes.footer}>
            <h2 className={classes.footerHeading}>{'by Kate Sagittarius'}</h2>
        </footer>
    )
}

export default Footer;