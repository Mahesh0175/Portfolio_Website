import { Container, Typography } from '@mui/material';
import { makeStyles } from '@mui/styles';

const useStyles = makeStyles({
  root: {
    padding: '20px',
  },
});

const Home = () => {
  const classes = useStyles();

  return (
    <Container className={classes.root}>
      <Typography variant="h4" gutterBottom>
        Home
      </Typography>
      <Typography variant="body1">
        Welcome to the home page.
      </Typography>
    </Container>
  );
};

export default Home;
