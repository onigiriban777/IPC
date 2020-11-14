import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import { Avatar, Typography, Button } from '@material-ui/core';
import ButtonBases from './sectionTwo';
import Carousel from 'react-bootstrap/Carousel';
import 'bootstrap/dist/css/bootstrap.min.css';
import FormDialog from './contact';
import Fade from 'react-bootstrap/Fade';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    width: 'fit-content',
    margin: '0'
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  },
  hero: {
    background: 'url(https://images.pexels.com/photos/127873/pexels-photo-127873.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940)',
    backgroundAttachment: 'fixed',
    backgroundSize: 'cover',
    minHeight: '90vh',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'flex-end',
    paddingLeft: '4%',
    paddingTop: '50px',
    width: '100%',
    marginRight: '0'
  },
  title: {
    fontSize: '8rem',
    fontWeight: '700',
    color: 'white',
    lineHeight: '1em'
  },
  heroPar: {
    marginBottom: '32px',
    width: '450px',
    lineHeight: '1.5',
    fontSize: '24px'
  },
  heroButton: {
    width: '150px',
    height: '50px',
    marginBottom: '50px'
  },
  titulosSecciones:{
    fontSize: '9vw'
  },
  aboutUs: {
    minHeight: '100vh',
    display: 'flex',
    flexDirection: 'column',
    paddingLeft: '4%',
    paddingTop: '80px',
    paddingRight: '4%',
    color: '#333333'
  },
  aboutTexto: {
    justifySelf: 'center',
    fontSize: '20px',
    marginTop: '20px',
    width: '100%',
    fontWeight:'100'
  },
  boton: {
    backgroundColor: 'black',
    color: 'white',
    width: '200px',
    height: '80px',
    margin: '30px',
    marginLeft:'0',
    border: 'none',
    '&:hover': {
      backgroundColor: '#A4DEED',
      color: 'black',
      border: 'none'
    }
  },
  sectionTwo: {
    display:'flex',
    flexWrap: 'wrap',
    minHeight: '100vh',
    alignItems: 'center'
},
servicios: {
  backgroundColor: 'pink',
  background: 'url(https://images.pexels.com/photos/271639/pexels-photo-271639.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940)',
  backgroundSize: 'cover'
},
tratamientos: {
  backgroundColor: 'lightgreen'
},
instalaciones: {
  textAlign: 'right',
  minHeight: '100vh',
  display: 'flex',
  flexDirection: 'column',
  paddingTop: '80px',
  paddingRight: '4%',
  color: '#333333'
},
instaTexto: {
  justifySelf: 'center',
  fontSize: '20px',
  marginTop: '20px',
  fontWeight:'100'
},
instaBoton: {
  backgroundColor: 'black',
  color: 'white',
  width: '200px',
  height: '80px',
  marginLeft: 'auto',
  marginTop: '30px',
  border: 'none',
  '&:hover': {
    backgroundColor: '#A4DEED',
    color: 'black',
    border: 'none'
  }
},
gallery: {
  display: 'flex',
  flexDirection: 'column',
  minHeight: '100vh',
  marginTop: '30px'
},
galBoton: {
  backgroundColor: 'black',
  color: 'white',
  width: '200px',
  height: '80px',
  margin: '30px auto',
  border: 'none',
  '&:hover': {
    backgroundColor: '#A4DEED',
    color: 'black',
    border: 'none'
  }
},
contacto: {
  minHeight: '100vh',
  display: 'flex',
  flexDirection: 'column',
  paddingLeft: '4%',
  paddingTop: '80px',
  paddingRight: '4%',
  backgroundColor:'#A4DEED',
  [theme.breakpoints.down('md')]: {
    minHeight: '60vh'
  },
},
contactTexto: {
  justifySelf: 'left',
  fontSize: '20px',
  marginTop: '20px',
  width: '90%',
  fontWeight:'100'
},
footer: {
  height: '60px',
  backgroundColor: 'black',
  color: 'white',
  textAlign: 'center',
  lineHeight: '60px'
}
}));

export default function CenteredGrid() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Grid container spacing={0}>
        <Grid item xs={12} className={classes.hero}>
            <Typography className={classes.title} align='left'>pretium</Typography>
            <Typography className={classes.title} align='left'>lectus</Typography>
        </Grid>
        <Grid item xs={12} className={classes.aboutUs}>
          <Typography variant='h2' className={classes.titulosSecciones}>semper risus in hendrerit gravida</Typography>
          <Typography variant='body1' className={classes.aboutTexto}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Aenean vel elit scelerisque mauris pellentesque pulvinar. Ullamcorper dignissim cras tincidunt lobortis feugiat vivamus at augue eget. Vulputate eu scelerisque felis imperdiet proin. Molestie a iaculis at erat pellentesque. Ultrices tincidunt arcu non sodales. Diam volutpat commodo sed egestas egestas fringilla. Venenatis tellus in metus vulputate eu scelerisque felis imperdiet. Purus gravida quis blandit turpis cursus in hac. Quis risus sed vulputate odio.</Typography>
          <Button  size='small' className={classes.boton}>Más Información</Button>
        </Grid>
        <Grid item xs={12} className={classes.sectionTwo}>
          <ButtonBases />
        </Grid>
        <Grid item xs={12} className={classes.instalaciones}>
        <Typography variant='h2' className={classes.titulosSecciones}>diam quis enim lobortis</Typography>
          <Typography variant='body1' className={classes.instaTexto}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Aenean vel elit scelerisque mauris pellentesque pulvinar. Ullamcorper dignissim cras tincidunt lobortis feugiat vivamus at augue eget. Vulputate eu scelerisque felis imperdiet proin. Molestie a iaculis at erat pellentesque. Ultrices tincidunt arcu non sodales. Diam volutpat commodo sed egestas egestas fringilla. Venenatis tellus in metus vulputate eu scelerisque felis imperdiet. Purus gravida quis blandit turpis cursus in hac. Quis risus sed vulputate odio.</Typography>
          <Button variant='outlined' size='small' className={classes.instaBoton} align='right'>Más Información</Button>
        </Grid>
        <Grid item xs={12} className={classes.gallery}>
        <Carousel>
          <Carousel.Item interval={1000}>
            <img
              className="d-block w-100"
              src="https://images.pexels.com/photos/164595/pexels-photo-164595.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
              height={550}
            />
            <Carousel.Caption>
              <h3>bibendum at varius</h3>
              <p>sit amet dictum sit amet justo donec</p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item interval={500}>
            <img
              className="d-block w-100"
              src="https://images.pexels.com/photos/1910472/pexels-photo-1910472.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
              height={550}
            />
            <Carousel.Caption>
              <h3>fames ac</h3>
              <p>amet porttitor eget dolor morbi non</p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src="https://images.pexels.com/photos/7294/garden.jpg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
              height={500}
            />
            <Carousel.Caption>
              <h3>aenean euismod elementum nisi</h3>
              <p>massa sed elementum tempus egestas sed sed risus pretium</p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src="https://images.pexels.com/photos/1080721/pexels-photo-1080721.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
              height={500}
            />
            <Carousel.Caption>
              <h3>cras pulvinar mattis</h3>
              <p>luctus venenatis lectus magna fringilla urna porttitor rhoncus dolor purus non enim</p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src="https://images.pexels.com/photos/1571459/pexels-photo-1571459.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
              height={500}
            />
            <Carousel.Caption>
              <h3>congue quisque egestas diam in</h3>
              <p>hendrerit gravida rutrum quisque non tellus orci ac</p>
            </Carousel.Caption>
          </Carousel.Item>
        </Carousel>
        <Button className={classes.galBoton} align='right'>Descubrí más</Button>
        </Grid>
        <Grid item xs={12} className={classes.contacto}>
          <Typography variant='h2' className={classes.titulosSecciones}>semper risus in hendrerit</Typography>
          <Typography variant='body1' className={classes.contactTexto}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Aenean vel elit scelerisque mauris pellentesque pulvinar. Ullamcorper dignissim cras tincidunt lobortis feugiat vivamus at augue eget.</Typography>
          <FormDialog />
        </Grid>
        <Grid item xs={12} className={classes.footer}>
          Developed by L.R.J.I
        </Grid>
      </Grid>
    </div>
  );
}
