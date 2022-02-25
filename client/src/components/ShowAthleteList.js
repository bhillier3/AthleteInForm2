import React, { useState, useEffect } from 'react';
import { Link, Outlet } from 'react-router-dom';
import axios from 'axios';

const ShowAthleteList = () => {
  // const [athletes, setAthletes] = useState([]);
  const [athleteList, setAthleteList] = useState([]);

  useEffect(() => {
    axios
      .get('http://localhost:3000/api/athletes')
      .then(res => {
        // setAthletes(res.data);
        const athletes = res.data;
        if (athletes.length == 0) setAthleteList('No athletes on list...')
        else setAthleteList(athletes.map((athlete, key) => (
          <Link to={`/athlete-info/${athlete._id}`} key={key}>
            <button>{athlete.firstname} {athlete.lastname}</button>
          </Link>
        )));
      })
      .catch(err => {
        console.log('Error from ShowAthleteList');
        setAthleteList(<p style={{color: 'red'}}>Error loading athletes...</p>);
      });
  }, []);

  // let athleteList;
  // if (!athletes) {
  //   athleteList = 'No athletes on list...';
  //   console.log('no athletes')
  // } else {
  //   athleteList = athletes.map((athlete, key) => (
  //     <Link to={`/athlete-info/${athlete._id}`} key={key}>
  //       <button>{athlete.firstname} {athlete.lastname}</button>
  //     </Link>
  //   ));
  // }

  return(
    <div>
      {/* <div>
        <Link to="/add-athlete">Add Athlete</Link>
        <Link to="/create-form">Create New Form</Link>
      </div> */}
      <div className="list">
        <h2>Athlete List</h2>
        <div>{athleteList}</div>
      </div>

      <Outlet />
    </div>
  );
};

export default ShowAthleteList;