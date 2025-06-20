import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Home from './Pages/Home/homePage';
import Authorization from './Pages/AuthorizationRegistration/authoriz_regPage';
import PersonalAccount from './Pages/PersonalAccount/personal_account';
import AdminPanel from './Pages/Admin/AdminPanel';
import TeacherPanel from './Pages/TeacherPanel/Teacher_page';
import Students from './Pages/Student/studentPage';
import Teachers from './Pages/Teacher/teacherPage';
import Rating from './Pages/Rating/ratingPage';
import './styles/config.css';

const App = () => {
  return (
    <Router>
      <div>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/student" element={<Students />} />
          <Route path="/teacher" element={<Teachers />} />
          <Route path="/rating" element={<Rating />} />
          <Route path="/authorization" element={<Authorization />} />
          <Route path="/personal_account/*" element={<PersonalAccount />} />
          <Route path="/admin_dashboard/*" element={<AdminPanel />} />
          <Route path="/teacher_dashboard/*" element={<TeacherPanel />} />
        </Routes>
        <ToastContainer />
      </div>
    </Router>
  );
};

export default App;