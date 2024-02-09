import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './sginup.css'
const Signup = () => {
  document.body.style.display = 'flex'
  document.body.style.background = ' linear-gradient(14deg, rgba(223,220,220,1) 16%, rgba(98,170,141,0.768032212885154) 71%'
  const [formData, setFormData] = useState({
    username: '',
    email: '',
    password: '',
    conformpassword: '',
  });                                          

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (d) => {
    d.preventDefault()

    const data = axios.post('http://localhost:5000/signup', formData)
      .then((response) => {
        // Handle the successful response here
        console.log(response.data);
      })
      .catch((error) => {

        console.error(error);
      });

  };
  

  return (
   
        
    <div>
      

      <form onSubmit={handleSubmit}
      >
        <h2>Signup</h2>
        <input
          type="text"
          name="username"
          placeholder="Username"
          value={formData.username}
          onChange={handleChange}
          required
          id='newuser'
        /><br></br>
        <input
          type="email"
          name="email"
          placeholder="Email"
          value={formData.email}
          onChange={handleChange}
          id='email'
          required
        /><br></br>
        <input
          type="password"
          name="password"
          placeholder="Password"
          value={formData.password}
          onChange={handleChange}
          required
          minLength={1}
          maxLength={8}
          id='newpassword'
        /><br></br>
        <input
          type="password"
          name="conformpassword"
          placeholder="Confirm Password"
          value={formData.conformpassword}
          onChange={handleChange}
          required
          minLength={1}
          maxLength={8}
          id='conformpassword'
        /><br></br>
        <button type="submit" id='clicksign'>Sign Up</button>
        <a href='/login' className='already'>already have account</a>
      </form>
    </div>
    
  );
};

export default Signup;
