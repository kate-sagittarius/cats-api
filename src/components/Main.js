import React from 'react';
import {makeStyles} from '@material-ui/styles';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import PetsIcon from '@material-ui/icons/Pets';

const useStyles = makeStyles({
    main: {
        margin: '24px',
        minHeight: 'calc(96vh - 341px)',
        boxSizing: 'border-box',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
    },
    mainMesaage: {
        maxWidth: '800px',
        minHeight: '212px',
        boxSizing: 'border-box',
        padding: '16px',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-around',
    },
    mainTypography: {
        fontFamily: '"Poppins", sans-serif',
    },
    buttonWrapper: {
        display: 'flex',
        justifyContent: 'flex-end',
    },
    button: {
        fontWeight: '600',
        display: 'flex',
        alignItems: 'center',
    },
    buttonIcon: {
        marginLeft: '8px',
        width: '18px',
    }
})

const Main = () => {
    const classes = useStyles();

    return (
        <div className={classes.main}>
            <Paper className={classes.mainMesaage}>
                <Typography variant="h5" component="h3" className={classes.mainTypography}>
                    {'Would you like to find out more about cats?'}
                </Typography>
                <Typography component="p" className={classes.mainTypography}>
                    {`Cats are amazing creatures enhanced with extreme cuteness and beauty.
                    Using the purr power they can heal humans and bring joy.`}
                </Typography>
                <div className={classes.buttonWrapper}>
                    <Button variant="contained" color="secondary" className={classes.button}>
                        {'Learn more'}
                        <PetsIcon className={classes.buttonIcon} />
                    </Button>
                </div>
            </Paper>
         </div> 
    )
}

export default Main;

