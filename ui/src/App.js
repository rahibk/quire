import React from 'react';
import logo from './logo.svg';
import './App.css';
import { createMuiTheme, ThemeProvider } from "@material-ui/core/styles";
import Landing from "./Components/Landing"

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
        <Landing/>
      </ThemeProvider>
    </div>
  );
}

export default App;
