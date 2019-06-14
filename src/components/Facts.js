import React from 'react';
import axios from 'axios';

import {Link} from 'react-router-dom';

import {makeStyles} from '@material-ui/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import CircularProgress from '@material-ui/core/CircularProgress';

const useStyles = makeStyles({
    facts: {
        margin: '24px',
        minHeight: 'calc(96vh - 341px)',
        boxSizing: 'border-box',
        padding: '8px',
        display: 'flex',
        flexFlow: 'row wrap',
        justifyContent: 'space-around',
        alignItems: 'stretch'
    },
    card: {
        width: '200px',
        margin: '12px',
        position: 'relative',
        paddingBottom: '32px',
        backgroundColor: '#E5E5E5',

        '&:hover': {
            transform: 'rotate(4deg)',
        },
    },
    cardButtonWrapper: {
        position: 'absolute',
        bottom: '0',
    },
    cardButton: {
        color: '#A40E4C',
        fontFamily: '"Poppins", sans-serif',
        fontWeight: '600',
        letterSpacing: '1px',
    },
    factsTypography: {
        fontFamily: '"Poppins", sans-serif',
    },
    progress: {
      alignSelf: 'center',
    }
})

const factText = (fact) => {
  
  if (fact.length < 200) {
    return fact;
  } else {

    const factWords = fact.split(' ');

    let wordsLengthSum = 0;
    for (let i = 0; wordsLengthSum < 176 && i < factWords.length; i++) {
      wordsLengthSum += factWords[i].length + 1;
    }

    return `${fact.slice(0, wordsLengthSum - 1)}…`;
  }
}

const Facts = () => {
  const classes = useStyles();
  const [catFacts, setCatFacts] = React.useState([]);

  React.useEffect(() => {
    axios
      .get(`https://cors-anywhere.herokuapp.com/cat-fact.herokuapp.com/facts`)
      .then(response => {
        setCatFacts(response.data.all);
      });
  }, []);

  return (
    <div className={classes.facts}>
      {catFacts.length !== 0 ? (
        catFacts.slice(0, 50).map(catFact =>
          <Card className={classes.card} key={catFact._id}>
            <CardContent>
              <Typography variant="body2" component="p" className={classes.factsTypography}>
                {factText(catFact.text)}
              </Typography>
            </CardContent>
            <CardActions className={classes.cardButtonWrapper}>
              <Button size="small" className={classes.cardButton} component={Link} to={`/facts/${catFact._id}/`}>Learn More</Button>
            </CardActions>
          </Card>
        )
      ) : (
      <CircularProgress className={classes.progress} color="secondary" />
      )}
    </div>
  );   
}

export default Facts;
