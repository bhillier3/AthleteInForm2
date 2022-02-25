import React, { useState, useEffect } from 'react';
import { Link, Outlet } from 'react-router-dom';
import axios from 'axios';

const App = () => {
  const [athleteList, setAthleteList] = useState([]);

  useEffect(() => {
    axios
      .get('http://localhost:3000/api/athletes')
      .then(res => setAthleteList(res.data))
      .catch(err => console.log('Error retrieving athletes from API'));
  }, []);

  return(
    <div className="app">
      <h1>React App</h1>

      <Link to="forms">Show List of Forms</Link>
      <Link to="create-form">Create New Form</Link>
      {/* <Link to="add-athlete">Add Athlete</Link> */}

      <select>
        <option value="">View All Forms</option>
        {athleteList && athleteList.map((athlete, key) => (
          <option value={athlete._id} key={key}>
            {athlete.name}
          </option>
        ))}
      </select>

      <Outlet />
    </div>
  );
};

export default App;