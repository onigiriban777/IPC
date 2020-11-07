import React from 'react';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
      },
      contactButon: {
        backgroundColor: 'black',
        color: 'white',
        width: '200px',
        height: '80px',
        margin: '30px',
        marginLeft: '0',
        border: 'none',
        '&:hover': {
          backgroundColor: 'white',
          color: 'black',
          border: 'none'
        }
      }
    }));


export default function FormDialog() {
  const [open, setOpen] = React.useState(false);
  const classes = useStyles();

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div className={classes.root}>
    <div>
      <Button variant="outlined" color="primary" onClick={handleClickOpen} className={classes.contactButon}>
        Contacto
      </Button>
      <Dialog open={open} onClose={handleClose} aria-labelledby="form-dialog-title">
        <DialogTitle id="form-dialog-title">Formulario de contacto</DialogTitle>
        <DialogContent>
          <DialogContentText>
            Envianos tu consulta, y un representante se contactará a la brevedad
          </DialogContentText>
          <TextField
            autoFocus
            margin="dense"
            id="name"
            label="Nombre y Apellido"
            type="text"
            fullWidth
            required
          />
          <TextField
            autoFocus
            margin="dense"
            id="email"
            label="Email"
            type="email"
            fullWidth
            required
          />
          <TextField
            autoFocus
            margin="dense"
            id="tel"
            label="Teléfono"
            type="tel"
            required
          />
          <TextField
            autoFocus
            margin="dense"
            id="residente"
            label="Nombre del Potencial Residente"
            type="text"
            fullWidth
            required
          />
          <TextField
            autoFocus
            margin="dense"
            id="obsocial"
            label="Obra Social"
            type="text"
            fullWidth
            required
          />
        <TextField
            autoFocus
            margin="dense"
            id="mensaje"
            label="Mensaje"
            type="text"
            multiline
            fullWidth
            rows={4}
            required
          />           
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} color="primary">
            Cancel
          </Button>
          <Button onClick={handleClose} color="primary">
            Enviar
          </Button>
        </DialogActions>
      </Dialog>
    </div>
    </div>
  );
}
