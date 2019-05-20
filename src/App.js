import React from 'react';
//import Routes from './routes';

import './styles.css';

import Header from './components/Header';
import Profile from './components/Profile';
import Language from './components/Language';
import Skill from './components/Skill';
import Experience from './components/Experience';
import Education from './components/Education';
import Course from './components/Course';

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
