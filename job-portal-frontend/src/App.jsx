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
      <Route path='/jobs-uploaded/:id' element={<JobDetailsApplicants />} />
      <Route path='/add-company' element={<AddCompany />} />
      <Route path='/job/:id' element={<JobDetailsPage />} />
      <Route path='/my-applications' element={<MyApplicationsPage />} />
      <Route path='/answer-applications/:id' element={<AnswerJobApplications />} />
      <Route path='/my-messages' element={<MyMessages />} />
      <Route path='/message/:id' element={<Message />} />
      <Route path='/company/:id' element={<CompanyDetails />} />
      <Route path='/update-job/:id' element={<UpdateJob />} />
      <Route path='/my-company' element={<MyCompany />} /> 
      <Route path='/about-us' element={<AboutUs />} />
      <Route path='/test' element={<Test />} />
      <Route path="/*" element={<Navigate to="/home" replace />} />
    </Routes>
  );
};

export default App;