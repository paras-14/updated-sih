import React, { useState, useEffect } from 'react';
import { principalArray } from './Principal';
import { supervisorArray } from './Supervisor';
import { teacherArray } from './Teacher';
import { studentArray } from './Student';
import './reqq.scss';

const PrincipalComponent = () => {
  const [require, setRequire] = useState([]);
  const role = 'admin'; // Assuming you have a way to determine the role

  useEffect(() => {
    if (role === 'admin') {
      setRequire(principalArray);
    }
    else if(role==='student'){
        setRequire(studentArray);
    }
    else if(role==='freelancer'){
setRequire([principalArray[1]]);
    }
    else if(role==='teacher'){
        setRequire(teacherArray);
    }
  }, [role]);
  return (
    <div className="card-container">
      {require.map((item, index) => (
        <div className="card" key={index}>
          <h3>{item.btnName}</h3>
          <a href={item.link}>
            <button>Go</button>
          </a>
        </div>
      ))}
    </div>
  );
}

export default PrincipalComponent;
