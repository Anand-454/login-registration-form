import React, { useState } from 'react';
import "./LRForm.css";

const LoginForm = () => {
  const [formData, setFormData] = useState({
    email: '',
    password: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <div className="container">
      <h2>Login</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <input type="email" name="email" className="form-control" placeholder="Email" value={formData.email} onChange={handleChange} />
        </div>
        <div className="form-group">
          <input type="password" name="password" className="form-control" placeholder="Password" value={formData.password} onChange={handleChange} />
        </div>
        <a className="forgot-password" href="./RegistrationForm.js">Forgot Password?</a><br/>
        <button type="submit" className="btn">Login</button>
      </form>
    </div>
  );
};

export default LoginForm;

