import React from "react";
import DialogTitle from "@material-ui/core/DialogTitle";
import Dialog from "@material-ui/core/Dialog";
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import FlashOnIcon from "@material-ui/icons/FlashOn";
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import EmailIcon from '@material-ui/icons/Email';

const UserSignIn = ({ onClose, selectedValue, open }) => {
  return (
    <Dialog  onClose={onClose} open={open}>
      <DialogTitle
        align="center"
        style={{ color: "#FFF" }}
        id="simple-dialog-title"
      >
        <div>
          <FlashOnIcon fontSize="large" style={{ color: "#F2C94C"}} />
          <Typography variant="h6">Welcome to Quired.fm</Typography>
          <Button fullWidth="true" variant="contained" color="primary">
            <LinkedInIcon style={{marginRight: "3px"}}/>Connect with LinkedIn
          </Button>
          <br/>
          <Button fullWidth="true" variant="contained" color="primary">
            <EmailIcon style={{marginRight: "3px"}}/> Sign up with email
          </Button>
          </div>
          </DialogTitle>
         <DialogContent>
          <DialogContentText>
            To subscribe to this website, please enter your email address here. We will send updates
            occasionally.
          </DialogContentText>
          </DialogContent>
    </Dialog>
  );
};

export default UserSignIn;
