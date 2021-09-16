import {Route, Switch}  from 'react-router-dom';

import Home from "../Home";
import Navigation from "../Navigation";
import Annoucement from "../Annoucement";
import Anciens from "../Manager/Anciens";
import Comity from "../Manager/Comity";
import Official from "../Manager/Official";
import Pastor from "../Manager/Pastor";
import Diary from "../Church/Diary";
import Liturgy from '../Church/Liturgy';
import Project from '../Church/Project';
import Rules from '../Church/Rules';
import Men from '../Sections/Men';
import Women from '../Sections/Women';
import School from '../Sections/School';
import Young from '../Sections/Young';
import Edito from "../Edito";
import Pericope from '../Pericope';
import Reflexion from "../Reflexion";
import Footer from '../Footer';

import 'bootstrap/dist/css/bootstrap.min.css';

import './App.css';


function App() {
  return (
    <div className="App">
      <Navigation />

      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route  path="/Manager/Anciens">
          <Anciens />
        </Route>
        <Route  path="/Manager/Comity">
          <Comity />
        </Route>
        <Route  path="/Manager/Official">
          <Official />
        </Route>
        <Route  path="/Manager/Pastor">
          <Pastor />
        </Route>
        <Route  path="/Church/Diary">
          <Diary />
        </Route>
        <Route  path="/Church/Liturgy">
          <Liturgy />
        </Route>
        <Route  path="/Church/Project">
          <Project />
        </Route>
        <Route  path="/Church/Rules">
          <Rules />
        </Route>
        <Route  path="/Sections/Men">
          <Men />
        </Route>
        <Route  path="/Sections/Women">
          <Women />
        </Route>
        <Route  path="/Sections/School">
          <School />
        </Route>
        <Route  path="/Sections/Young">
          <Young />
        </Route>
        <Route  path="/Edito">
          <Edito />
        </Route>
        <Route  path="/Reflexion">
          <Reflexion />
        </Route>
        <Route  path="/Pericope">
          <Pericope />
        </Route>
      </Switch>
      <Footer />
      <Annoucement />
    </div>
  );
}

export default App;
