import React, { useState, useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';
import axios from 'axios';

const FormInfo = (props) => {
  const { formId } = useParams();
  console.log(formId);
  // const [form, setForm] = useState(null);

  useEffect(() => {
    axios
      .get('http://localhost:3000/api/forms/' + formId)
      .then(res => setForm(res.data))
      .catch(err => console.log('Error getting FormInfo'));
  }, []);

  return(
    <div>
      <h1>Form ID: {formId}</h1>
      <Link to="/">Go Home</Link>
    </div>
  );
};

export default FormInfo;