import React, { useState } from 'react';
import "./Account.scss"

const Account = () => {
  const [isChangingPassword, setIsChangingPassword] = useState(false);
  
  const [newPassword, setNewPassword] = useState('');
  const [confirmNewPassword, setConfirmNewPassword] = useState('');
  const [isVerificationSuccessful, setIsVerificationSuccessful] = useState(false);

  const email = 'example@example.com';
  const school = 'Sample School';
  const uid = 'Student id';
  
  const [oldPassword, setOldPassword] = useState(uid);
  const [Password, setPassword] = useState(uid);
  const handleToggleChangePassword = () => {
    setIsChangingPassword(!isChangingPassword);
    setIsVerificationSuccessful(false);
  }

  const handleOldPasswordChange = (e) => {
    setOldPassword(e.target.value);
  }

  const handleNewPasswordChange = (e) => {
    setNewPassword(e.target.value);
  }

  const handleConfirmNewPasswordChange = (e) => {
    setConfirmNewPassword(e.target.value);
  }

  const handleVerifyPassword = () => {
    if (oldPassword === Password) {
      setIsVerificationSuccessful(true);
    } else {
      setIsVerificationSuccessful(false); 
      alert('Old password verification failed. Please try again.');
    }
  }

  const handleChangePassword = () => {
    if (newPassword === confirmNewPassword && isVerificationSuccessful) {
      setOldPassword(newPassword);
      setNewPassword('');
      setConfirmNewPassword('');
      setIsChangingPassword(false);
      setIsVerificationSuccessful(false);
      setPassword(newPassword);
      console.log(`Password changed to "${newPassword}"`);
    } else {
      alert('Password change failed. Please verify your inputs.');
    }
  }

  return (
    <div className="account-card">
      <div className="account-info">
        <h3>Email:</h3>
        <p>{email}</p>
        <h3>School Name:</h3>
        <p>{school}</p>
        <h3> User Id:</h3>
        <p>{uid}</p>
      </div>
      <div className="change-password">
        {isChangingPassword ? (
          isVerificationSuccessful ? (
            <>
              <input
                type="password"
                placeholder="New Password"
                value={newPassword}
                onChange={handleNewPasswordChange}
              />
              <input
                type="password"
                placeholder="Confirm New Password"
                value={confirmNewPassword}
                onChange={handleConfirmNewPasswordChange}
              />
              <button onClick={handleChangePassword}>Save Password</button>
            </>
          ) : (
            <>
              <input
                type="password"
                placeholder="Old Password"
                value={oldPassword}
                onChange={handleOldPasswordChange}
              />
              <button onClick={handleVerifyPassword}>Verify Password</button>
            </>
          )
        ) : (
          <button onClick={handleToggleChangePassword}>Change Password</button>
        )}
      </div>
    </div>
  );
}

export default Account;
