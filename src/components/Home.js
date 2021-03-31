//import logo from './logo.svg';
import '../App.css';
import {Link} from "react-router-dom";
import Typography from '@material-ui/core/Typography'
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';
import {makeStyles} from '@material-ui/core/styles';

const useStyles = makeStyles({
  roboto : {
    fontFamily : 'roboto',
    //marginBottom : '10%'
  },
  largeBtn : {
    size : 'larger'
  }
})

function Home() {
  const classes = useStyles()

  return (
    <div className="App">
        <header className="App-header">
        <img src="./img/tiakBook.jpg" alt="logo" width='10%'/>
        
        <Typography variant='h1' className={classes.roboto} gutterBottom>Bienvenue sur Tiakbook</Typography>        
        <br/>
        <br/>
        <Grid container alignContent='center' justify='center' spacing={1}>
          <Grid item xs={4}>
            <Button variant = 'contained' className={classes.largeBtn} role='signup' color="default" size="large"><Link to='/signup'>S'inscrire</Link></Button>
          </Grid>
          <Grid item xs={4}>
            <Button variant = 'contained' className={classes.largeBtn} color="default" role='signin' size="large"><Link to='/signin'>Se connecter</Link></Button>
          </Grid>
        </Grid>      
      </header>
    </div>
      
    );
}

export default Home;
