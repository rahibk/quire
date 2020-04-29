import React from "react";
import { useState } from "react";
import TextField from "@material-ui/core/TextField";
import DialogTitle from "@material-ui/core/DialogTitle";
import Dialog from "@material-ui/core/Dialog";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import Typography from "@material-ui/core/Typography";
import InputAdornment from "@material-ui/core/InputAdornment";
import { makeStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import FlashOnIcon from "@material-ui/icons/FlashOn";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import EmailIcon from "@material-ui/icons/Email";
import "../Styles/UserSignIn.scss";
import { authenticate } from "../Clients/AuthClient";

const UserSignIn = ({ onClose, selectedValue, open }) => {
  const [page, setPage] = useState(selectedValue);
  const [newUser, setNewUser] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(false);

  const isSubmitable = () => {
    return email.length !== 0 && password.length !== 0;
  };

  const handleAuth = (e) => {
    e.preventDefault();
    authenticate(email, password)
      .then((data) => {
        localStorage.setItem("AUTH_TOKEN", data.access_token);
        window.location.reload(true);
      })
      .catch(() => setError(true));
  };

  return (
    <div>
      {page === "1" ? (
        newUser ? (
          <Dialog
            PaperProps={{
              style: {
                backgroundColor: "#32314E",
              },
            }}
            className="dialog-main"
            onClose={onClose}
            open={open}
          >
            <DialogTitle
              align="center"
              style={{ color: "#FFF" }}
              id="simple-dialog-title"
            >
              <div className="dialog-header">
                <Typography variant="h6">Create an account</Typography>
                <form className="login-form" noValidate autoComplete="off">
                  <TextField fullWidth id="name" label="Full Name" />
                  <br />
                  <TextField fullWidth id="email" label="Email" />
                  <br />
                  <TextField
                    fullWidth
                    id="password"
                    type="password"
                    label="Password"
                  />
                  <br />
                </form>
                <Button
                  className="login-button"
                  fullWidth="true"
                  variant="contained"
                  color="primary"
                >
                  Continue
                </Button>
              </div>
            </DialogTitle>
            <DialogContent className="dialog-text">
              <DialogContentText align="center">
                <Typography variant="caption">
                  By signing up, you agree to Quired.fm’s Terms of Service and
                  Privacy Policy
                </Typography>
                <br />
                <Typography variant="caption">
                  Have an account?{" "}
                  <a
                    style={{ color: "#FFF", textDecoration: "underline" }}
                    onClick={() => setPage("2")}
                  >
                    Log In
                  </a>
                </Typography>
              </DialogContentText>
            </DialogContent>
          </Dialog>
        ) : (
          <Dialog
            PaperProps={{
              style: {
                backgroundColor: "#32314E",
              },
            }}
            className="dialog-main"
            onClose={onClose}
            open={open}
          >
            <DialogTitle
              align="center"
              style={{ color: "#FFF" }}
              id="simple-dialog-title"
            >
              <div className="dialog-header">
                <FlashOnIcon fontSize="large" style={{ color: "#F2C94C" }} />
                <Typography variant="h6">Welcome to Quired.fm</Typography>
                <br />
                <Button
                  className="linkedin-signup-button"
                  fullWidth="true"
                  variant="contained"
                  color="primary"
                >
                  <LinkedInIcon
                    style={{ marginRight: "3px", color: "#0072b1" }}
                  />
                  Connect with LinkedIn
                </Button>
                <br />
                <Button
                  className="email-signup-button"
                  fullWidth="true"
                  variant="contained"
                  color="primary"
                  onClick={() => setNewUser(true)}
                >
                  <EmailIcon style={{ marginRight: "3px" }} /> Sign up with
                  email
                </Button>
              </div>
            </DialogTitle>
            <DialogContent className="dialog-text">
              <DialogContentText align="center">
                <Typography variant="caption">
                  To subscribe to this website, please enter your email address
                  here. We will send updates occasionally.
                </Typography>
                <br />
                <Typography variant="caption">
                  Have an account?{" "}
                  <a
                    style={{ color: "#FFF", textDecoration: "underline" }}
                    onClick={() => setPage("2")}
                  >
                    Log In
                  </a>
                </Typography>
              </DialogContentText>
            </DialogContent>
          </Dialog>
        ) // Login
      ) : (
        <Dialog
          PaperProps={{
            style: {
              backgroundColor: "#32314E",
            },
          }}
          className="dialog-main"
          onClose={onClose}
          open={open}
        >
          <DialogTitle
            align="center"
            style={{ color: "#FFF" }}
            id="simple-dialog-title"
          >
            <div className="dialog-header">
              <Typography variant="h6">Login</Typography>
              <form
                className="login-form"
                noValidate
                autoComplete="off"
                onSubmit={handleAuth}
              >
                <TextField
                  fullWidth
                  onChange={(e) => setEmail(e.target.value)}
                  id="email"
                  label="Email"
                  error={error}
                  helperText={error}
                  InputProps={{
                    endAdornment: (
                      <InputAdornment position="end">
                        {error && <Typography color="error">!</Typography>}
                      </InputAdornment>
                    ),
                  }}
                />
                <br />
                <TextField
                  fullWidth
                  onChange={(e) => setPassword(e.target.value)}
                  id="password"
                  type="password"
                  label="Password"
                  error={error}
                  helperText={error}
                  InputProps={{
                    endAdornment: (
                      <InputAdornment position="end">
                        {error && <Typography color="error">!</Typography>}
                      </InputAdornment>
                    ),
                  }}
                />
                <br />
                <Button
                  className="login-button"
                  fullWidth="true"
                  variant="contained"
                  color="primary"
                  type="submit"
                  disabled={!isSubmitable()}
                >
                  Log in with email
                </Button>
              </form>
            </div>
          </DialogTitle>
          <DialogContent className="dialog-text">
            <DialogContentText align="center">
              <Typography variant="caption">
                Forgot your{" "}
                <a style={{ color: "#FFF", textDecoration: "underline" }}>
                  password?
                </a>
              </Typography>
            </DialogContentText>
          </DialogContent>
        </Dialog>
      )}
    </div>
  );
};

export default UserSignIn;
