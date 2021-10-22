import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

const AddAthlete = (props) => {
  const [firstname, setFirstname] = useState('');
  const [lastname, setLastname] = useState('');
  const [email, setEmail] = useState('');

  const handleFnameChange = e => { setFirstname(e.target.value) };
  const handleLnameChange = e => { setLastname(e.target.value) };
  const handleEmailChange = e => { setEmail(e.target.value) };


  const handleSubmit = e => {
    e.preventDefault();

    const data = {
      firstname: firstname,
      lastname: lastname,
      email: email,
      forms: []
    };

    axios
      .post('http://localhost:3000/api/athletes', data)
      .then(res => {
        setFirstname('');
        setLastname('');
        setEmail('');
        props.history.push('/');
      })
      .catch(err => console.log('Error in AddAthlete'));
  }

  return(
    <div className="AddAthlete">
      <div>
        <Link to="/">Go Back to Show Athletes</Link>
      </div>
      <div>
        <h2>Add User</h2>
        <form noValidate onSubmit={handleSubmit}>
          <div className="form-group">
            <input
              type="text"
              placeholder="Athlete first name"
              name="firstname"
              className="form-control"
              value={firstname}
              onChange={handleFnameChange}
            />
          </div>
          <div className="form-group">
            <input
              type="text"
              placeholder="Athlete last name"
              name="lastname"
              className="form-control"
              value={lastname}
              onChange={handleLnameChange}
            />
          </div>
          <div className="form-group">
            <input
              type="text"
              placeholder="Athlete email"
              name="email"
              className="form-control"
              value={email}
              onChange={handleEmailChange}
            />
          </div>

          <input type="submit" className="btn user-submit"/>
        </form>
      </div>
    </div>
  );
};

export default AddAthlete;