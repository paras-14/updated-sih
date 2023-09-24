import './Signup.scss';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import StickyHeader from "../CreateClassroom.jsx/Header";
import {createUser} from "../../redux/slices/authSlice";

function Signup() {

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    role: "admin",
    // username: 'default',
    // email: 'default@gmail.com',
    // address: 'default',
    // occupation: 'student',
    // gender: 'male',k
    // languages: ['html'],
  })

  const onChangeHandler = (event) => {

    console.log(event)
    if (event.target.name === 'languages') {

      let copy = { ...formData }

      if (event.target.checked) {
        copy.languages.push(event.target.value)
      } else {
        copy.languages = copy.languages.filter(el => el !== event.target.value)
      }

      setFormData(copy)

    } else {
      setFormData(() => ({
        ...formData,
        [event.target.name]: event.target.value
      }))
    }
  }

  const onSubmitHandler = async(event) => {
    event.preventDefault()

    console.log("Formmm  ",formData)
    dispatch(createUser(formData));
    navigate('/login');
  }
  return (
    <div className="App">
    <StickyHeader/>
      <form onSubmit={onSubmitHandler}>
        <div className="form-group">
          <label htmlFor="school_name" className="form-label">School Name</label>
          <input className="form-control" type='text' name="school_name" placeholder='Enter Your School Name' onChange={onChangeHandler} value={formData.schoolname} />
        </div>
        <div className="form-group">
          <label htmlFor="sid" className="form-label">School Id</label>
          <input className="form-control" type='text' name="sid" placeholder='Enter Your School Id' onChange={onChangeHandler} value={formData.schoolid} />
        </div>
        <div className="form-group">
          <label htmlFor="email" className="form-label">School Email</label>
          <input className="form-control" type='email' name="email" placeholder='Enter Your Email Id' onChange={onChangeHandler} value={formData.email} />
        </div>
        <div className="form-group">
          <label htmlFor="address" className="form-label">Address</label>
          <input className="form-control" type='text' name="address" placeholder='Enter Your Address' onChange={onChangeHandler} value={formData.address} />
        </div>

        {/* <div className="form-group">
          <label htmlFor="files" className="form-label">Upload School Document</label>
          <input className="form-control" type='file' name="files" placeholder='' onChange={onChangeHandler}  value={formData.schoolfile} />
        </div> */}
        <div className="form-group">
          <label htmlFor="name" className="form-label">Name</label>
          <input className="form-control" type='text' name="name" placeholder='Enter Your Address' onChange={onChangeHandler} value={formData.name} />
        </div>
        <div className="form-group">
          <label htmlFor="phno" className="form-label">Phone No.</label>
          <input className="form-control" type='text' name="phno" placeholder='Enter Your Address' onChange={onChangeHandler} value={formData.phno} />
        </div>
        <div className="form-group">
          <label htmlFor="password" className="form-label">Password</label>
          <input className="form-control" type='text' name="password" placeholder='Enter Your Address' onChange={onChangeHandler} value={formData.password} />
        </div>
        <div className="form-group">
          <label htmlFor="gender" className="form-label">Select Your Gender</label>
          <div id=''>
            <div>
              <input type="radio" name="gender" value="male" onChange={onChangeHandler} checked={formData.gender === 'male'} />
              <label htmlFor="male">Male</label>
            </div>
            <div>
              <input type="radio" name="gender" value="female" onChange={onChangeHandler} checked={formData.gender === 'female'} />
              <label htmlFor="female">Female</label>
            </div>
            <div>
              <input type="radio" name="gender" value="other" onChange={onChangeHandler} checked={formData.gender === 'other'} />
              <label htmlFor="other">Other</label>
            </div>
          </div>
        </div>

        {/* <div className="form-group">
          <label htmlFor="occupation" className="form-label">Occupation</label>
          <select id='occupation' className="form-select" name="occupation" placeholder='' onChange={onChangeHandler} value={formData.occupation}>
          <option value="none">None</option>
            <option value="principal">Principal</option>
            <option value="administrator">Administrator</option>
          </select>
          {formData.occupation === 'principal' && (
          <div className="form-group">
            <label htmlFor="id" className="form-label">School Id</label>
            <input className="form-control" type='number' name="id" placeholder='Id' onChange={onChangeHandler} value={formData.id} />
          </div>)}
          {formData.occupation === 'administrator' && (
          <div className="form-group">
            <label htmlFor="name" className="form-label">Full Name</label>
            <input className="form-control" type='text' name="name" placeholder='Type Your Name' onChange={onChangeHandler} value={formData.name} />
          </div>
          )}
          {formData.occupation === 'administrator' && (
          <div className="form-group">
              <label htmlFor="password" className="form-label">Password</label>
              <input className="form-control" type='password' name="password" placeholder='Enter Your Password' onChange={onChangeHandler} value={formData.name} />
          </div>)}
        </div> */}

        {/* <div className="form-group">
          <label htmlFor="file" className="form-label">Upload Your Document</label>
          <input className="form-control" type='file' name="file" placeholder='' onChange={onChangeHandler}  value={formData.file} />
        </div> */}
        
        <div className="form-group">
          <button className="btn" type="submit" >Submit</button>
        </div>
      </form>
    </div>
  );
}

export default Signup;
