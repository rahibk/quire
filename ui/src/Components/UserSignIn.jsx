import React from "react";
import { useState } from "react";
import TextField from "@material-ui/core/TextField";
import DialogTitle from "@material-ui/core/DialogTitle";
import Dialog from "@material-ui/core/Dialog";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import Typography from "@material-ui/core/Typography";
import InputAdornment from "@material-ui/core/InputAdornment";
import Button from "@material-ui/core/Button";
import FlashOnIcon from "@material-ui/icons/FlashOn";
import GoogleIcon from "../Images/googleLogo.svg"
import EmailIcon from "@material-ui/icons/Email";
import "../Styles/UserSignIn.scss";
import * as firebase from "firebase";
// import StyledFirebaseAuth from "react-firebaseui/StyledFirebaseAuth";
import firebaseConfig from "../firebase.config";

firebase.initializeApp(firebaseConfig);

const UserSignIn = ({ onClose, selectedValue, open }) => {
  const [page, setPage] = useState(selectedValue);
  const [newUser, setNewUser] = useState(false);
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(false);

  const isSubmitable = () => {
    return email.length !== 0 && password.length !== 0;
  };

  const handleSignIn = (e) => {
    console.log("test")
    e.preventDefault();
    firebase
    .auth()
    .createUserWithEmailAndPassword(email, password)
    .then(res => {
      if (res.user) {
        var data = Object.assign({}, res.user);
        data.displayName = name;
        console.log(data);
        localStorage.setItem("user", JSON.stringify(data));
        window.location.reload(true);
      }
    })
    .catch(e => {
      setError(e.message);
    });
};

const handleAuth = (e) => {
  e.preventDefault();
  firebase
  .auth()
  .signInWithEmailAndPassword(email, password)
  .then(res => {
    if (res.user) {
      localStorage.setItem("user", res.user);
      window.location.reload(true);
    }
  })
  .catch(e => {
    setError(e.message);
  });
};

const handleGoogleLogin = () => {
  const provider = new firebase.auth.GoogleAuthProvider();
  firebase
      .auth()
      .signInWithPopup(provider)
      .then(result => {
        console.log(result.user.displayName)
        localStorage.setItem("user", JSON.stringify(result.user));
        window.location.reload(true);
      })
      .catch(e => setError(e.message))
    }

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
                <form className="login-form" noValidate autoComplete="off" onSubmit={handleSignIn}>
                  <TextField fullWidth id="name" label="Full Name" onChange={(e) => setName(e.target.value)} />
                  <br />
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
                  Continue
                </Button>
                </form>
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
                  onClick={handleGoogleLogin}
                >
                  <img src={GoogleIcon}
                    style={{ marginRight: "5px", width: "20px" }}
                  />
                 Sign up with Google
                </Button>
                <br />
                <Button
                  className="email-signup-button"
                  fullWidth="true"
                  variant="contained"
                  color="primary"
                  onClick={() => setNewUser(true)}
                >
                  <EmailIcon style={{ marginRight: "5px" }} /> Sign up with
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
