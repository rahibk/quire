import React from "react";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import CssBaseline from "@material-ui/core/CssBaseline";
import UserNavBar from "./UserNavBar";
import Footer from "./Footer";
import '../Styles/Massages.scss'; 


const useStyles = makeStyles((theme) => ({
  
}));


export default function Messages() {
  const classes = useStyles();

  return (
    <React.Fragment>
      <CssBaseline />
      <UserNavBar/>
      <main>
        <div className="massagesHolder">
          <div className="container">
            <h2>🙌 Your messages, Serina.</h2>
            <div className="twoColumns">
                <div className="sidebar">
                  <ul className="sideList">
                    <li className="active">
                      <div className="imgHolder">
                        <img src="https://source.unsplash.com/random"></img>
                      </div>
                      <div className="txt">
                        <strong className="title">Jennifer Tindal</strong>
                        <p>"Lorem ipsum dolor sit amet, cons ectetur adipiscing elit trofld,...”</p>
                      </div>
                    </li>
                     <li>
                      <div className="imgHolder">
                        <img src="https://source.unsplash.com/random"></img>
                      </div>
                      <div className="txt">
                        <strong className="title">Jennifer Tindal</strong>
                        <p>"Lorem ipsum dolor sit amet, cons ectetur adipiscing elit trofld,...”</p>
                      </div>
                    </li>
                     <li>
                      <div className="imgHolder">
                        <img src="https://source.unsplash.com/random"></img>
                      </div>
                      <div className="txt">
                        <strong className="title">Jennifer Tindal</strong>
                        <p>"Lorem ipsum dolor sit amet, cons ectetur adipiscing elit trofld,...”</p>
                      </div>
                    </li>
                     <li>
                      <div className="imgHolder">
                        <img src="https://source.unsplash.com/random"></img>
                      </div>
                      <div className="txt">
                        <strong className="title">Jennifer Tindal</strong>
                        <p>"Lorem ipsum dolor sit amet, cons ectetur adipiscing elit trofld,...”</p>
                      </div>
                    </li>
                     <li>
                      <div className="imgHolder">
                        <img src="https://source.unsplash.com/random"></img>
                      </div>
                      <div className="txt">
                        <strong className="title">Jennifer Tindal</strong>
                        <p>"Lorem ipsum dolor sit amet, cons ectetur adipiscing elit trofld,...”</p>
                      </div>
                    </li>
                     <li>
                      <div className="imgHolder">
                        <img src="https://source.unsplash.com/random"></img>
                      </div>
                      <div className="txt">
                        <strong className="title">Jennifer Tindal</strong>
                        <p>"Lorem ipsum dolor sit amet, cons ectetur adipiscing elit trofld,...”</p>
                      </div>
                    </li>
                  </ul>
                </div>
                <div className="content">
                  <div className="topBar">
                    <div className="btnsHolder">
                      <a href="#" className="btn btnGreen">Entrepreneur</a>
                      <a href="#" className="btn btnBlue">Technology</a>
                    </div>
                    <div className="time">3 days ago</div>
                  </div>
                  <div className="textBlock">
                    <header className="head">
                      <h3 className="headig">
                        <span className="re">re</span>
                        <span className="headTxt">What do you think about my start up idea?</span>
                      </h3>
                    </header>
                    <div className="contentSection">
                      <p>"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                      <p>Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.”"Lorem ipsum dolor sit amet, consectetur</p>
                      <p>"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magnais nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.”"Lorem ipsum dolor sit amet, co aliqua.Ut enim ad minim veniam, qunsectetur</p>
                      <p>Quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.”</p>
                    </div>
                  </div>

                  <div className="textBlock">
                    <header className="head">
                      <h3 className="headig">
                        <span className="headTxt">What do you think about my start up idea?</span>
                      </h3>
                      <div className="time">3 days ago</div>
                    </header>
                    <div className="contentSection">
                      <p>"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                      <p>Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.”"Lorem ipsum dolor sit amet, consectetur</p>
                      <p>"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magnais nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.”"Lorem ipsum dolor sit amet, co aliqua.Ut enim ad minim veniam, qunsectetur</p>
                      <p>Quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.”</p>
                    </div>
                  </div>

                </div>
            </div>
          </div>
        </div>
      </main>
      <Footer/>
    </React.Fragment>
  );
}
