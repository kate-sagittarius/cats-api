import React from 'react';
import axios from 'axios';

import {makeStyles} from '@material-ui/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
import FavoriteIcon from '@material-ui/icons/Favorite';
import IconButton from '@material-ui/core/IconButton';
import CircularProgress from '@material-ui/core/CircularProgress';

import CatImg from '../images/cat.jpg';


const useStyles = makeStyles({
  cardWrapper: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    minHeight: 'calc(100vh - 293px)',
  },
  card: {
    maxWidth: 345,
    margin: '30px 0',
  },
  media: {
    maxHeight: 300,
  },
  cardActions: {
    justifyContent: 'flex-end',
  },
  progress: {
    marginTop: 20,
  },
})


const Fact = ({match}) => {
  const classes = useStyles();
  const [catFact, setCatFact] = React.useState(null);
  const [catImg, setCatImg] = React.useState(CatImg);

  React.useEffect(() => {
    axios
      .get(`https://cors-anywhere.herokuapp.com/cat-fact.herokuapp.com/facts/${match.params.id}`)
      .then(response => {
        setCatFact(response.data);
      });
  }, [match.params.id]);

  React.useEffect(() => {
    axios
      .get(`https://cors-anywhere.herokuapp.com/api.thecatapi.com/v1/images/search`)
      .then(response => {
        setCatImg(response.data[0].url);
      });
  }, [])

  return (
    <div className={classes.cardWrapper}>
      <Card className={classes.card}>
        <CardActionArea>
          <CardMedia
            className={classes.media}
            component="img"
            src={catImg}
            title="Amazing cat"
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="h2">
              Do you know?
            </Typography>
            <Typography variant="body2" color="textSecondary" component="p">
            { catFact === null ? (
              <CircularProgress className={classes.progress} color="secondary" />
            ) : (
              catFact.text
            )}
            </Typography>
          </CardContent>
        </CardActionArea>
        <CardActions className={classes.cardActions}>
        <IconButton aria-label="Add to favorites">
          <FavoriteIcon />
        </IconButton>
        </CardActions>
      </Card>
    </div>
  );
}

export default Fact;