import React from "react";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import CssBaseline from "@material-ui/core/CssBaseline";
import UserNavBar from "./UserNavBar";
import Footer from "./Footer";


const useStyles = makeStyles((theme) => ({
  
}));


export default function MentorProfile() {
  const classes = useStyles();

  return (
    <React.Fragment>
      <CssBaseline />
      <UserNavBar/>
      <main>
        
      </main>
      <Footer/>
    </React.Fragment>
  );
}
