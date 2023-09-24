import React, { useState } from 'react'
import "./Landing.scss"

// Import necessary components and data
import { principalArray } from './Principal'
import { studentArray } from './Student'
import { teacherArray } from './Teacher'
import { supervisorArray } from './Supervisor'
import PrincipalComponent from './PrincipalComp'
import Navbar from '../../components/Navbar/Navbar'
import RoleBtn from '../../components/RoleBtn/RoleBtn'

const Landing = () => {
  const [showDashboard, setShowDashboard] = useState(false); // State for toggling dashboard
  const curr = 1;
  const sclname = 'DAV Public School, Varnasi';
  const name = 'Sumit';
  const role = 'Student';

  
  return (
    <>
      <div className="sticky-header">
        <div className="logo">EduVators</div>
        <ul className="nav-links">
          {curr === 1 ? (
            <>
              <li><a href="/login"><div>About</div></a></li>
              <li><a href='/dashboard'><div>DashBoard</div></a></li>
              <li><a href='/account'><div>Account</div></a></li>
            </>
          ) : (
            <>
              <li><a href="/login"><div>Login</div></a></li>
              <li><a href="/signup"><div>Signup</div></a></li>
              <li><a href='/freelancer'><div>FreeLance</div></a></li>
            </>
          )}
        </ul>
      </div>
      {curr === 1 ? (
        <div>
          <div className='need'>
            <div className='rightMainLanding'>
              <h1>School :</h1>
              <h3>{sclname}</h3>
              <h1>Name:</h1>
              <h3>{name}</h3>
              <h1>Role:</h1>
              <h3>{role}</h3>
            </div>
            <div className="leftMainLanding">
            <PrincipalComponent />
            </div>
          </div>
        </div>
      ) : (
        <div>
          <div className='dum'>
            <h1>Hello! Please Log in / Sign Up to Continue</h1>
          </div>
        </div>
      )}
    </>
  )
}

export default Landing
