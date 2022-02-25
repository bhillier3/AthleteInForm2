import React, { useState, useEffect } from 'react';
import { useForm } from 'react-hook-form';
import axios from 'axios';

const CreateForm = (props) => {
  const { register, handleSubmit, setValue, formState: { errors } } = useForm();
  const [athletes, setAthletes] = useState([]);
  const [treatmentReq, setTreatmentReq] = useState(false);

  useEffect(() => {
    axios
      .get('http://localhost:3000/api/athletes')
      .then(res => setAthletes(res.data))
      .catch(err => console.log('Error from ShowAthleteList'));
  }, []);

  // CHECKBOX GROUP ARRAYS
  const activities = ['workout', 'long run', 'cross train'];
  const recovExercises = [
    'foam roll', 'stretching', 'ice bath', 'compression boots',
    'theragun', 'ice cup/bag', 'other'
  ]

  // HANDLERS
  const handleTreatmentReqChange = () => {
    setTreatmentReq(!treatmentReq);
    setValue('treatment_want', '');
  }

  // HANDLE SUBMIT
  const onSubmit = data => {
    data.pain = parseInt(data.pain);
    data.status = 0;
    console.log(data);
    axios
      .post('http://localhost:3000/api/forms', data)
      .then(res => props.history.push('/'))
      .catch(err => console.log('error in adding forms in CreateForm'))
  };

  return(
    <div>
      <form onSubmit={handleSubmit(onSubmit)}>
        {/* CHOOSE ATHLETE FROM LIST OF ATHLETES DROPDOWN */}
        <select {...register('athlete')}>
          <option value="">Choose Athlete</option>
          {athletes.map((athlete, key) => (
            <option value={athlete._id} key={key}>
              {athlete.name}
            </option>
          ))}
        </select>
        {/* PAIN SCALE RADIO GROUP */}
        <div className="radio-group">
          <h4>Pain Scale</h4>
          <input {...register('pain')} type="radio" value={1}/>1
          <input {...register('pain')} type="radio" value={2}/>2
          <input {...register('pain')} type="radio" value={3}/>3
          <input {...register('pain')} type="radio" value={4}/>4
          <input {...register('pain')} type="radio" value={5}/>5
          <input {...register('pain')} type="radio" value={6}/>6
          <input {...register('pain')} type="radio" value={7}/>7
          <input {...register('pain')} type="radio" value={8}/>8
          <input {...register('pain')} type="radio" value={9}/>9
          <input {...register('pain')} type="radio" value={10}/>10
        </div>
        {/* ACTIVITIES CHECKBOX GROUP */}
        <div>
          <h4>Activites</h4>
          {
            activities.map((activity, idx) => (
              <label key={idx}>
                <input
                  type="checkbox"
                  value={activity}
                  {...register('activities')}
                /> {activity}
              </label>
            ))
          }
        </div>
        {/* RECOVERY EXERCISES CHECKBOX GROUP */}
        <div>
          <h4>Recovery Exercises Completed</h4>
          {
            recovExercises.map((recov, idx) => (
              <label key={idx}>
                <input
                  type="checkbox"
                  value={recov}
                  {...register('recovery')}
                /> {recov}
              </label>
            ))
          }
        </div>
        {/* Injury Notes TextArea */}
        <textarea
          {...register('inj_notes')}
          placeholder="Description of soreness or possible injury..."
          cols="100" rows="5"
        />
        {/* TREATMENT REQUEST */}
        <label>Would you like to request for treament?
          <input
            type="checkbox"
            {...register('treament_req')}
            onClick={handleTreatmentReqChange}
          />
        </label>
        {treatmentReq ? <textarea
          {...register('treatment_want')}
          placeholder="Describe what treatment you want..."
          cols="100" rows="5"
        /> : null}

        <input type="submit"/>
      </form>
    </div>
  );
};

export default CreateForm;