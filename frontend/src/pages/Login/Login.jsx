import React, {useState} from "react";
import "./Login.scss"
import StickyHeader from "../CreateClassroom.jsx/Header"
import { useDispatch } from 'react-redux';
import {} from '../../redux/slices/authSlice';
const Loginnew = () => {

    const dispatch = useDispatch();
    // useEffect(() => {
    //     function start() {
    //         gapi.client.init({
    //             clientId: "79474543031-tmjo35916ufn421ej3u1i2ljao2apr4s.apps.googleusercontent.com",
    //scope: ""
    //         })
    //     }
    //     gapi.load('client: auth2', start)
    // })

    const [popupStyle, showPopup] = useState("hide")

    const popup = () => {
        showPopup("login-popup");
        dispatch(loginUser())
    }

    const [inputVisible, setInputVisible] = useState(false);
      
        const toggleInput = () => {
          setInputVisible(!inputVisible);
        }


    return (
        <div className="cover" id='cover'>
        <StickyHeader/>
            <h1>Welcome Back!</h1>
            <input type="text" placeholder="username" />            
            <input type="password" placeholder="password" />

            <div className="login-btn" onClick={popup}>Login</div>
            <div className={popupStyle}>
                <div>Incorrect username or password</div>
            </div>
            <br/>
            <div>Forget Password? <a href="#" onClick={toggleInput}>Click Here</a></div>
            <br/>
            {inputVisible && (
                    <input type="text" placeholder="Enter your email" />
                )
            }

            
            
        </div>
    )
}

export default Loginnew