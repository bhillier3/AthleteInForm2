import React, { useState, useEffect } from 'react';
import { Link, Outlet } from 'react-router-dom';
import axios from 'axios';

const ShowFormList = () => {
  const [formList, setFormList] = useState([]);

  useEffect(() => {
    axios
      .get('http://localhost:3000/api/forms')
      .then(res => setFormList(res.data))
      .catch(err => console.log('Error retrieving forms from API...'));
  }, []);

  return(
    <div>
      <ul>{formList && formList.map((form, key) => (
        <li key={key}>
          <Link to={form._id} key={key}>{form._id}</Link>
        </li>
      ))}</ul>
      
      <Outlet />
    </div>
  );
};

export default ShowFormList;