import Home from "../Home";
import Navigation from "../Navigation";
import Annoucement from "../Annoucement";

import 'bootstrap/dist/css/bootstrap.min.css';

import './App.css';


function App() {
  return (
    <div className="App">
      <Navigation />
      <Home />
      <Annoucement />
    </div>
  );
}

export default App;
