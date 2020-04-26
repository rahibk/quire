import React from "react";
import DialogTitle from '@material-ui/core/DialogTitle';
import Dialog from '@material-ui/core/Dialog';
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import LightningIcon from "../Images/flash_on_24px.svg"


const UserSignIn = ({onClose, selectedValue, open}) => {
  return (
    <Dialog onClose={onClose} open={open}>
        <DialogTitle  style={{color: "#FFF"}} id="simple-dialog-title">
           Welcome to Quired.fm
           <Button>

           </Button>
        </DialogTitle>
    </Dialog>
  );
};

export default UserSignIn;
