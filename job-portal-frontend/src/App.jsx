import React from 'react';

//Libararies and Modules:
import { Route, Routes, Navigate } from 'react-router-dom';

//Components:
import Login from '/src/components/Login';
import Signup from '/src/components/Signup';
import JobsList from '/src/components/JobsList';
import AddJob from '/src/components/AddJob';
import Profile from '/src/components/Profile';
import UpdateUserInfo from '/src/components/UpdateUserInfo';
import UpdateResume from '/src/components/UpdateResume';
import JobsUploaded from '/src/components/JobsUploaded';
import Test from '/src/components/Test';
import AddCompany from '/src/components/AddCompany';

const App = () => {
  return (
    <Routes>
      <Route path='/home' element={<JobsList />} />
      <Route path='/login' element={<Login />} />
      <Route path='/signup' element={<Signup />} />
      <Route path='/add-job' element={<AddJob />} />
      <Route path='/profile' element={<Profile />} />
      <Route path='/update-user-info' element={<UpdateUserInfo />} />
      <Route path='/update-resume' element={<UpdateResume />} />
      <Route path='/jobs-uploaded' element={<JobsUploaded />} />
      <Route path="/add-company" element={<AddCompany />} />
      <Route path='/test' element={<Test />} />
      <Route path="/*" element={<Navigate to="/home" replace />} />
    </Routes>
  );
};

export default App;