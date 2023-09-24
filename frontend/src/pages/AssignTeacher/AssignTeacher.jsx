import React from 'react';
import FormComponent from './FormComponenet'; // Make sure the path is correct
import StickyHeader from '../CreateClassroom.jsx/Header';
const AssignTeacher = () => {
  return (
    <div className='AssignTeacher'>
    <StickyHeader/>
      <FormComponent />
    </div>
  );
}

export default AssignTeacher;
