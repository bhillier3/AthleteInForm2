import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

const ShowAthleteList = () => {
  const [athletes, setAthletes] = useState([]);

  useEffect(() => {
    axios
      .get('http://localhost:3000/api/athletes')
      .then(res => setAthletes(res.data) )
      .catch(err => console.log('Error from ShowAthleteList'));
  }, []);

  let athleteList;
  if (!athletes) {
    athleteList = 'No athletes on record.';
  } else {
    athleteList = athletes.map((athlete, key) => (
      <div key={key}>
        <p>Name: {athlete.firstname} {athlete.lastname}</p>
        <p>Email: {athlete.email}</p>
        <p>Forms: athlete forms listed here ...</p>
      </div>
    ));
  }

  return(
    <div>
      <div>
        <Link to="/add-athlete">Add Athlete</Link>
      </div>
      <div className="list">
        <h2>Athlete List</h2>
        <div>{athleteList}</div>
      </div>
    </div>
  );
};

export default ShowAthleteList;