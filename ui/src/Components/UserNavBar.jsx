import React from "react";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Button from "@material-ui/core/Button";
import SearchIcon from "@material-ui/icons/Search";
import AccountCircleIcon from "@material-ui/icons/AccountCircle";
import DefaultAvatar from "../Images/avatar.webp"
import InputBase from "@material-ui/core/InputBase";
import Typography from "@material-ui/core/Typography";
import { fade, makeStyles } from "@material-ui/core/styles";
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import Link from '@material-ui/core/Link';

const useStyles = makeStyles((theme) => ({
  cardContent: {
    flexGrow: 1,
  },
  paper: {
    position: "absolute",
    width: 400,
    backgroundColor: theme.palette.background.paper,
    border: "2px solid #000",
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 3),
  },
  appbar: {
    flexGrow: 1,
    textAlign: "left",
  },
  title: {
    flexGrow: 1,
  },
  search: {
    position: "relative",
    borderRadius: theme.shape.borderRadius,
    backgroundColor: fade(theme.palette.common.white, 0.15),
    "&:hover": {
      backgroundColor: fade(theme.palette.common.white, 0.25),
    },
    marginLeft: 0,
    marginRight: "5px",
    width: "100%",
    [theme.breakpoints.up("sm")]: {
      marginLeft: theme.spacing(1),
      width: "auto",
    },
  },
  searchIcon: {
    padding: theme.spacing(0, 2),
    height: "100%",
    position: "absolute",
    pointerEvents: "none",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  inputRoot: {
    color: "inherit",
  },
  inputInput: {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)}px)`,
    transition: theme.transitions.create("width"),
    width: "100%",
    [theme.breakpoints.up("sm")]: {
      width: "12ch",
      "&:focus": {
        width: "20ch",
      },
    },
  },
  profileIcon: {
    width: "30px",
    borderRadius: "50%",
  },
  profileMenu: {
    color: "#FFFFFF",
  },
}));

export default function UserNavBar() {
  const classes = useStyles();
  const [anchorEl, setAnchorEl] = React.useState(null);

  const imgUrl =  JSON.parse(localStorage.getItem("user")).photoURL;
  console.log(imgUrl);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <div className={classes.appbar}>
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6" className={classes.title}>
            quired.fm
          </Typography>
          <div className={classes.search}>
            <div className={classes.searchIcon}>
              <SearchIcon />
            </div>
            <InputBase
              placeholder="Search…"
              classes={{
                root: classes.inputRoot,
                input: classes.inputInput,
              }}
            />
          </div>
          <Button href="/messages" color="inherit">Messages</Button>
          <Button onClick={handleClick}><img src={imgUrl ? imgUrl : DefaultAvatar} className={classes.profileIcon}/></Button>
          <Menu
            id="simple-menu"
            anchorEl={anchorEl}
            keepMounted
            open={Boolean(anchorEl)}
            onClose={handleClose}
          >
            <MenuItem className={classes.profileMenu} onClick={handleClose}>Profile</MenuItem>
            <MenuItem className={classes.profileMenu}  
            onClick={() => {
              handleClose();
              localStorage.clear();
              window.location.reload(true);
            }}>Logout</MenuItem>
          </Menu>
        </Toolbar>
      </AppBar>
    </div>
  );
}
