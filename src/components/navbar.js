import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import FacebookIcon from '@material-ui/icons/Facebook';
import InstagramIcon from '@material-ui/icons/Instagram';
import { Link } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
    marginRight: '12px'
  },
  navBar: {
    backgroundColor: 'white',
    color: 'black',
    marginBottom: '0',
    [theme.breakpoints.down('md')]: {
      //
    },
  },
  seccionesNav: {
    [theme.breakpoints.down('md')]: {
      display: 'flex',
      flexDirection:'column'
    },
  },
  botones: {
    fontSize: '14px',
    width: '100%'
  },
  contacto: {
    borderRadius: '0',
    backgroundColor: '#A4DEED',
    border: 'none',
    marginLeft: '6px'
  },
  socialMenu: {
    display: 'flex',
    flexDirection: 'column',
    marginLeft: '12px',
    [theme.breakpoints.down('md')]: {
      flexDirection: 'row',
      marginBottom:'6px'
    },
  },
  redes: {
    color: 'black'
  },
  button: {
    backgroundColor: '#A4DEED',
    borderColor:  '#A4DEED',
    borderRadius: '0',
    padding: '12px',
    marginLeft: '4px',
    border: 'none',
    '&:hover': {
      backgroundColor: 'black',
      color: '#FFF'
  }
  }
}));

export default function ButtonAppBar() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <AppBar position="fixed" color='secondary' className={classes.navBar} >
        <Toolbar className={classes.seccionesNav}>
          <Typography variant="h6" className={classes.title}>
            LOGO
          </Typography>
          <div className={classes.botones}>
          <Button color="inherit" size='small'>Quienes somos</Button>
          <Button color="inherit" size='small'>Servicios</Button>
          <Button color="inherit" size='small'>Tratamientos</Button>
          <Button color="inherit" size='small'>Instalaciones</Button>
          <Button className={classes.button}>CONTACTO</Button>
          </div>
          <div className={classes.socialMenu}>
          <Link href='#' className={classes.redes} color='primary'><FacebookIcon /></Link>
          <Link href='#' className={classes.redes}><InstagramIcon /></Link>
          </div>
        </Toolbar>
      </AppBar>
    </div>
  );
}
