import React from 'react';
import {
  BrowserRouter as Router,
  Route
} from 'react-router-dom';
import AddAthlete from './components/AddAthlete';
import ShowAthleteList from './components/ShowAthleteList';

function App() {
  return(
    <Router>
      <div className="app">
        <Route exact path="/" component={ShowAthleteList} />
        <Route path="/add-athlete" component={AddAthlete} />
      </div>
    </Router>
  );
};

export default App;