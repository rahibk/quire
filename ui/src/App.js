import React from 'react';
import './App.css';
import { createMuiTheme, ThemeProvider } from "@material-ui/core/styles";
import Home from "./Components/Home"
import {HashRouter, Redirect, Route, Switch} from "react-router-dom";
import AuthGate from "./Components/AuthGate";
import Profile from "./Components/Profile";
import Messages from "./Components/Messages";
import MentorProfile from "./Components/MentorProfile";

const theme = createMuiTheme({
  palette: {
    primary: {
      main: "#121521",
      contrastText: '#FFFFFF'
    },
    secondary: {
      main: "#121521",
      contrastText: '#FFFFFF'
    },
    text: {
      disabled: "#FFFFFF"
    },
    background: {
      paper: "#121521"
    }
  },
  shape: {
    borderRadius: 10
  },
  typography: {
    button: {
      textTransform: "none"
    },
    color: "#FFF",
    //fontFamily: "'Helvetica', 'Arial', sans-serif, 'Roboto'",
    fontFamily: "'Inter', sans-serif",
    subtitle2: {
      fontWeight: "bold"
    }
  }
});

function App() {
  return (
    <div className="App">
      <ThemeProvider theme={theme}>
        <AuthGate>
        <HashRouter>
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route exact path="/mentor">
            <MentorProfile />
          </Route>
          <Route exact path="/messages">
            <Messages />
          </Route>
          <Route exact path="/profile">
            <Profile />
          </Route>
          <Redirect to="/"/>
        </Switch>
      </HashRouter>
        </AuthGate>
      </ThemeProvider>
    </div>
  );
}

export default App;
