import React from 'react'
import { Route,Routes } from 'react-router-dom'

import Landing from '../pages/Landing/Landing.jsx'
import Login from '../pages/Login/Login'
import Signup from '../pages/Signup/Signup'
import AssignTeacher from '../pages/AssignTeacher/AssignTeacher.jsx'
import ViewStudent from '../pages/ViewStudent/ViewStudent.jsx'
import ViewTeacher from '../pages/ViewTeacher/ViewTeacher.jsx'
import CreateClassroom from '../pages/CreateClassroom.jsx/CreateClassroom.jsx'
import AssignStudents from '../pages/AssignStudents/AssignStudents.jsx'
import AssignPeriod from '../pages/AssignPeriods/AssignPeriod.jsx'
import Registrationfreelancer from '../pages/freelancer/freelancer.jsx'
import DashboardPage from '../pages/Landing/DashBoard.jsx'
import Accout from '../pages/Landing/Account.jsx'
const Home = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Landing/>}/>
        <Route path="/login" element={<Login/>}/>
        <Route path="/signup" element={<Signup/>}/>
        <Route path="/account" element={<Accout/>}/>
        <Route path="/freelancer" element={<Registrationfreelancer/>}/>
        <Route path="/dashboard" element={<DashboardPage/>}/>
        <Route path="/AssignTeacher" element={<AssignTeacher/>}/>
        <Route path="/ViewStudent" element={<ViewStudent/>}/>
        <Route path="/ViewTeachers" element={<ViewTeacher/>}/>
        <Route path="/CreateClassroom" element={<CreateClassroom/>}/>
        <Route path="/AssignStudent" element={<AssignStudents/>}/>
        <Route path="/AssignPeriod" element={<AssignPeriod/>}/>
      </Routes>
    </>
  )
}

export default Home
