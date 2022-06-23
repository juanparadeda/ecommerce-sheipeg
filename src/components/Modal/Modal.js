// React imports
import * as React from 'react';
// MUI imports
import { Dialog, DialogContent } from '@mui/material';

const Modal = ({handleClose, open, children}) => {

  return(
    <Dialog onClose={handleClose} open={open}>
      <DialogContent>    
        {children}
      </DialogContent>
    </ Dialog>
  )
}

export default Modal;