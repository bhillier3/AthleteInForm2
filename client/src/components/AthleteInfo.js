import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

const AthleteInfo = (props) => {
  const [athlete, setAthlete] = useState({});
  // const [formList, setFormList] = useState([]);

  useEffect(() => {
    axios
      .get('http://localhost:3000/api/athletes/' + props.match.params.id)
      .then(res => setAthlete(res.data))
      .catch(err => console.log('Error in AthleteInfo'));
  }, []);

  // let formList;
  // if (athlete.forms.length == 0) {
  //   formList = 'No forms available.'
  // } else {
  //   formList = athlete.forms.map((form, key) => (
  //     <div key={key}>Form id: </div>
  //   ));
  // };

  return(
    <div>
      <h2>{athlete.firstname} {athlete.lastname}</h2>
      <h3>Email: {athlete.email}</h3>
      {/* <div>{formList}</div> */}
    </div>
  );
};

export default AthleteInfo;