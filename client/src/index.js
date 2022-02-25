import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import App from './App';
import CreateForm from './components/CreateForm';
import ShowAthleteList from './components/ShowAthleteList';
import ShowFormList from './components/ShowFormList';
import FormInfo from './components/FormInfo';
import AddAthlete from './components/AddAthlete'

const rootElement = document.getElementById('root');

ReactDOM.render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<App />}>
        {/* <Route index element={<ShowFormList />} /> */}
        <Route path="forms" element={<ShowFormList />}>
          <Route path=":formId" element={<FormInfo/>} />
        </Route>
        <Route path="create-form" element={<CreateForm />} />
        {/* <Route path="add-athlete" element={<AddAthlete />} /> */}
      </Route>
    </Routes>
  </BrowserRouter>,
  rootElement
);