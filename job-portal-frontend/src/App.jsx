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
import AddCompany from '/src/components/AddCompany';
import JobDetailsPage from '/src/components/JobDetailsPage';
import MyApplicationsPage from '/src/components/MyApplicationsPage';
import JobDetailsApplicants from '/src/components/JobDetailsApplicants';
import AboutUs from '/src/components/AboutUs';
import AnswerJobApplications from '/src/components/AnswerJobApplications';
import MyMessages from '/src/components/MyMessages';
import Message from '/src/components/Message';
import CompanyDetails from '/src/components/CompanyDetails';
import UpdateJob from '/src/components/UpdateJob';
import MyCompany from '/src/components/MyCompany';
import UpdateCompany from '/src/components/UpdateCompany';

import ProtectedRoute from '/src/ProtectedRoute';
import AdminLogin from '/src/components/Admins/AdminLogin';
import AdminReports from './components/Admins/AdminReports';

const App = () => {
  return (
    <Routes>
      <Route path='/home' element={<JobsList />} />
      <Route path='/login' element={<Login />} />
      <Route path='/signup' element={<Signup />} />
      <Route path='/add-job' element={<ProtectedRoute element={<AddJob />} />} />
      <Route path='/profile' element={<ProtectedRoute element={<Profile />} />} />
      <Route path='/update-user-info' element={<ProtectedRoute element={<UpdateUserInfo />} />} />
      <Route path='/update-resume' element={<ProtectedRoute element={<UpdateResume />} />} />
      <Route path='/jobs-uploaded' element={<ProtectedRoute element={<JobsUploaded />} />} />
      <Route path='/jobs-uploaded/:id' element={<ProtectedRoute element={<JobDetailsApplicants />} />} />
      <Route path='/add-company' element={<ProtectedRoute element={<AddCompany />} />} />
      <Route path='/job/:id' element={<JobDetailsPage />} />
      <Route path='/my-applications' element={<ProtectedRoute element={<MyApplicationsPage />} />} />
      <Route path='/answer-applications/:id' element={<ProtectedRoute element={<AnswerJobApplications />} />} />
      <Route path='/my-messages' element={<ProtectedRoute element={<MyMessages />} />} />
      <Route path='/message/:id' element={<ProtectedRoute element={<Message />} />} />
      <Route path='/company/:id' element={<CompanyDetails />} />
      <Route path='/update-job/:id' element={<ProtectedRoute element={<UpdateJob />} />} />
      <Route path='/my-company' element={<ProtectedRoute element={<MyCompany />} />} />
      <Route path='/update-company/:id' element={<ProtectedRoute element={<UpdateCompany />} />} /> 
      <Route path='/about-us' element={<AboutUs />} />

      {/* Admins Routes */}
      <Route path='/admin/login' element={<AdminLogin />} />
      <Route path='/admin/reports' element={<AdminReports />} />
 
      <Route path="/*" element={<Navigate to="/home" replace />} />
    </Routes>
  );
};

export default App;