import React from 'react';

//Libararies and Modules:
import { Route, Routes, Navigate } from 'react-router-dom';

//Components:
import Login from '/src/components/Login';
import Signup from '/src/components/Signup';
import JobsList from '/src/components/JobsList';

const App = () => {
  return (
    <Routes>
      <Route path='/home' element={<JobsList />} />
      <Route path='/login' element={<Login />} />
      <Route path='/signup' element={<Signup />} />
      <Route path="/*" element={<Navigate to="/home" replace />} />
    </Routes>
  );
};

export default App;