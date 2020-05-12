import React from "react";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import Link from "@material-ui/core/Link";

function Copyright() {
    return (
      <Typography variant="body2" color="#C4C4C4">
        {" © "} {new Date().getFullYear()}{" "}
        <Link color="inherit">Quired.fm, DBA Hole Strategy Inc.</Link>
      </Typography>
    );
  }

  const useStyles = makeStyles((theme) => ({
    paper: {
      position: "absolute",
      width: 400,
      backgroundColor: theme.palette.background.paper,
      border: "2px solid #000",
      boxShadow: theme.shadows[5],
      padding: theme.spacing(2, 4, 3),
    },
    footer: {
      backgroundColor: theme.palette.background.paper,
      color: "#FFFFFF",
      padding: theme.spacing(6),
      display: "flex",
      flexDirection: "row",
      alignItems: "stretch",
      borderTop: "1px solid #000000",
    },
    title: {
      flexGrow: 1,
    },
  }));

export default function Footer() {
  const classes = useStyles();
  return (
    <footer className={classes.footer}>
        <Typography
          variant="subtitle1"
          align="left"
          component="p"
          className={classes.title}
        >
          quired.fm
        </Typography>
        <Copyright />
      </footer>
  );
}
