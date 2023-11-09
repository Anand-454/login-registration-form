import React, { useState } from 'react';
import "./LRForm.css";

import user_icon from "./Assets/person.png";
import email_icon from "./Assets/email.png";
import password_icon from "./Assets/password.png";
import confirm_icon from "./Assets/password.png";

const RegistrationForm = () => {
  const [action, setAction] = useState("Login");

  const handleToggleAction = () => {
    // Toggle between "Login" and "Register"
    setAction(prevAction => (prevAction === "Login" ? "Register" : "Login"));
  };

  const handleSubmit = (e) => {
    e.preventDefault(); // Prevent the form from reloading the page
    // Add logic to handle form submission here, such as API requests or validation
  };

  return (
    <div className="container">
      <h2>{action}</h2>
      <form onSubmit={handleSubmit}>
        
          {action==="Login"?<div></div>:<div className="form-group"><img src={user_icon} alt='icon'/><input type="text" name="name" className="form-control" placeholder="Name" /></div>}
        
        <div className="form-group">
        <img src={email_icon} alt='icon'/>
          <input type="email" name="email" className="form-control" placeholder="Email"  />
        </div>
        <div className="form-group">
        <img src={password_icon} alt='icon'/>
          <input type="password" name="password" className="form-control" placeholder="Password" />
        </div>

        {action==="Login"?<div></div>:<div className="form-group">
        <img src={confirm_icon} alt='icon'/>
          <input type="password" name="confirmPassword" className="form-control" placeholder="Confirm Password" />
        </div>}
        
        {action==="Register"?<div></div>:<p className="forgot-password">Forgot Password?</p>}
        
        <div className='button'>
            <button type="submit" className={action==="Login"?"btn grey":"btn"} onClick={handleToggleAction}>Register</button>
            <button type="submit" className={action==="Register"?"btn grey":"btn"} onClick={handleToggleAction}>Login</button>
        </div>
      </form>
    </div>
  );
};

export default RegistrationForm;


//turnery operator