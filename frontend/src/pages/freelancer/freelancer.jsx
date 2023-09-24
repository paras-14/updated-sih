import './freelancer.scss';
// import './loginnew.css'
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import {createUser} from "../../redux/slices/authSlice"

function Registrationfreelancer() {

  const dispatch = useDispatch();

  const [formData, setFormData] = useState({
    role: 'freelancer',
    // username: 'default',
    // email: 'default@gmail.com',
    // address: 'default',
    // occupation: 'student',
    // gender: 'male',
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

  const onSubmitHandler = (event) => {
    event.preventDefault()
    console.log(formData)
    dispatch(createUser(formData));
  }
  return (
    <div className="App" id='App'>
      <form onSubmit={onSubmitHandler}>
        
        <div className="form-group">
          <label htmlFor="name" className="form-label">Name</label>
          <input className="form-control" type='text' name="name" placeholder='Enter Your Name' onChange={onChangeHandler} value={formData.name} />
        </div>

        <div className="form-group">
          <label htmlFor="email" className="form-label">Email</label>
          <input className="form-control" type='email' name="email" placeholder='Enter Your Email Id' onChange={onChangeHandler} value={formData.email} />
        </div>

        <div className="form-group">
          <label htmlFor="address" className="form-label">Address</label>
          <input className="form-control" type='text' name="address" placeholder='Enter Your Address' onChange={onChangeHandler} value={formData.address} />
        </div>

        <div className="form-group">
          <label htmlFor="phone" className="form-label">Contacts</label>
          <input className="form-control" type='number' name="phone" placeholder='Enter Your Contact' onChange={onChangeHandler} value={formData.phone} />
        </div>

        {/* <div className="form-group">
          <label htmlFor="schoolfile" className="form-label">Upload School Document</label>
          <input className="form-control" type='file' name="schoolfile" placeholder='' onChange={onChangeHandler}  value={formData.schoolfile} />
        </div> */}
        
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

        <div className="form-group">
          <label htmlFor="password" className="form-label">Password</label>
          <input className="form-control" type='password' name="password" placeholder='Enter Your Password' onChange={onChangeHandler} value={formData.password} />
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

        
        
        <div className="form-group">
          <button className="btn" type="submit" >Submit</button>
        </div>

        <div type='text' name="role" value={formData.role} ></div>
      </form>
    </div>
  );
}

export default Registrationfreelancer;
