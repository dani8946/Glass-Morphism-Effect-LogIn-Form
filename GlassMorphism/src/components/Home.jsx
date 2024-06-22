import React, { useState } from 'react';
import './Home.css';

function Home() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault(); // Prevents the default form submission behavior
    console.log('Email:', email);
    console.log('Password:', password);
  };

  return (
    <>
      <div className="MainContainer">
        <h2>Log In</h2>
        <div className="InputContainer">
          <input
            className="Input"
            type="email"
            placeholder="Email"
            value={email}
            onChange={handleEmailChange}
          />
          <input
            className="Input"
            type="password"
            placeholder="Password"
            value={password}
            onChange={handlePasswordChange}
          />
        </div>
        <div className="buttonContainer">
          <button className="button" onClick={handleSubmit}>
            Log In
          </button>
        </div>
        <a className="forgot" id="forgotpassword">Forgot Password?</a>
        <a className="signup">Didn't have an account?<span className="Sign" id="signup">Sign Up</span></a>
      </div>
    </>
  );
}

export default Home;
