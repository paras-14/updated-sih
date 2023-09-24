import React, { useState } from 'react';
import "./CreateClassroom.scss"
import StickyHeader from "./Header";
import { useDispatch } from 'react-redux';
import {createStudent} from '../../redux/slices/studentSlice'

const CreateClassroom = () => {
  const dispatch = useDispatch();
  const [classValue, setClassValue] = useState('');
  const [Range, setRange] = useState({ start: 0, end: 0 });
  const [submitted, setSubmitted] = useState(false);
  const [rangeSubmitted, setRangeSubmitted] = useState(false);
  const [startValue, setStartValue] = useState(0); 
  const [endValue, setEndValue] = useState(0); 
  const [req, setReq] = useState({ batch: '', range: { start: 0, end: 0 }, courses: [] });
  const [subjects, setSubjects] = useState([]);
  const [newSubject, setNewSubject] = useState('');

  const handleInputChange = (e) => {
    const value = e.target.value;

    if (value === '' || value > 0 || e.keyCode === 8) {
      setClassValue(value);
    } else {
      alert('Please provide a proper value');
    }
  }

  const handleRangeSubmit = (e) => {
    e.preventDefault();
    if (parseInt(startValue) > 0 && parseInt(endValue) > 0 && parseInt(startValue) < parseInt(endValue)) {
      setRange({ start: parseInt(startValue), end: parseInt(endValue) });
      setRangeSubmitted(true);

      setReq(prevReq => ({ ...prevReq, range: { start: startValue, end: endValue } }));
    }
    else {
      alert('Please provide proper values');

      setStartValue(0);
      setEndValue(0);
    }
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    if (classValue) {
      setSubmitted(true);

      setReq(prevReq => ({ ...prevReq, batch: classValue }));
    }
    else {
      alert('Please provide input');
    }
  }

  const handleAddSubject = (e) => {
    e.preventDefault();
    if (newSubject) {
      setSubjects([...subjects, newSubject]);
      setNewSubject('');
    }
  }

  const handleRemoveSubject = (index) => {
    const updatedSubjects = [...subjects];
    updatedSubjects.splice(index, 1);
    setSubjects(updatedSubjects);
  }

  const handleSubmitCourses = () => {
    setReq(prevReq => ({ ...prevReq, courses: subjects, school_name: "hdfdsh" }));
    console.log(req);
    dispatch(createStudent(req));
  }

  return (
    <div className='CreateClassroom'>
      <StickyHeader/>

      {rangeSubmitted ? (
        <div className='forrr'>
          <h1>Enter Courses</h1>
          <form onSubmit={handleAddSubject} className='forr'>
            <input
              type="text"
              value={newSubject}
              onChange={(e) => setNewSubject(e.target.value)}
              placeholder="Enter subject"
              required
              style={{ fontSize: '20px' ,width:'150px'}}
            />
            <button style={{height:'50px'}} type="submit">Add Subject</button>
          </form>
          <ul>
            {subjects.map((subject, index) => (
              <li style={{ fontSize: '20px', marginBottom: '10px' }} key={index}>
                <label>{subject}</label> 
                <button style={{ height: '32px', marginLeft: '10px' }} onClick={() => handleRemoveSubject(index)}>Remove</button>
              </li>
            ))}
          </ul>
          <button style={{ height: '50px' }} onClick={handleSubmitCourses}>Submit Courses</button>
        </div>
      ) : submitted ? (
        <div>
          <h1>Enter Student range</h1>
          <form onSubmit={handleRangeSubmit}>
            <label style={{fontSize:'40px'}}>
              Start:
              <input
                type='number'
                value={startValue}
                style={{fontSize:'40px',width:'50px'}}
                onChange={(e) => setStartValue(e.target.value)}
              />
            </label>
            <br />
            <label style={{fontSize:'40px'}}>
              End:
              <input
                type='number'
                value={endValue}
                style={{fontSize:'40px',width:'50px'}}
                onChange={(e) => setEndValue(e.target.value)}
              />
            </label>
            <br />
            <button type="submit">Submit Range</button>
          </form>
        </div>
      ) : (
        <div style={{display:'flex',alignItems:'center',justifyContent:'center',flexDirection:'column'}}>
          <h1>Enter the class and other details</h1>
          <form className='forr' onSubmit={handleSubmit}>
            <h1>Class</h1>
            <input
              type="number"
              value={classValue}
              onChange={handleInputChange}
              style={{ fontSize: '30px' }}
              readOnly={submitted}
            />
            <br />
            <button type="submit">Submit</button>
          </form>
        </div>
      )}
    </div>
  )
}

export default CreateClassroom;
