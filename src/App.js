import React from "react";

import "./styles.css";

import Course from "./components/Course";
import Education from "./components/Education";
import Experience from "./components/Experience";
import Header from "./components/Header";
import Language from "./components/Language";
import Profile from "./components/Profile";
import Skill from "./components/Skill";

const App = () => (
  <div className="App container">
    <Header />

    <div className="row">
      <div className="col-sm-4 mt-5">
        <Profile />
        <Language />
        <Skill />
      </div>

      <div className="col-sm-8 mt-5">
        <div className="row">
          <div className="col-sm">
            <Experience />
          </div>
        </div>

        <div className="row mt-5">
          <div className="col-sm">
            <Education />
          </div>
        </div>

        <div className="row mt-5">
          <div className="col-sm">
            <Course />
          </div>
        </div>
      </div>
    </div>
  </div>
);
//<Routes />
export default App;
