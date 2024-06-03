import React from 'react';

//Libararies and Modules:
import { Route, Routes, Navigate } from 'react-router-dom';

//Components:
import Login from '/src/components/Login';

const App = () => {
  return (
    <Routes>
      <Route path='/login' element={<Login />} />
      <Route path="/*" element={<Navigate to="/login" replace />} />
    </Routes>
  );
};

export default App;