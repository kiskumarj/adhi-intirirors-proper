import axios from 'axios';
import React, { useState } from 'react'

function Sginup() {
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
    
        const data = axios.post('https://api.adhiinteriors.com/signup', formData)
          .then((response) => {
            // Handle the successful response here
            console.log(response.data);
          })
          .catch((error) => {
    
            console.error(error);
          });
    
      };
  return (
    <div className="flex justify-center items-center h-screen">
  <form onSubmit={handleSubmit} className="bg-white shadow-md rounded px-8 pt-6 pb-8 w-full max-w-xs">
    <h2 className="text-2xl font-bold mb-4">Signup</h2>
    <div className="mb-4">
      <input
        type="text"
        name="username"
        placeholder="Username"
        value={formData.username}
        onChange={handleChange}
        required
        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
      />
    </div>
    <div className="mb-4">
      <input
        type="email"
        name="email"
        placeholder="Email"
        value={formData.email}
        onChange={handleChange}
        required
        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
      />
    </div>
    <div className="mb-4">
      <input
        type="password"
        name="password"
        placeholder="Password"
        value={formData.password}
        onChange={handleChange}
        required
        minLength={1}
        maxLength={8}
        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
      />
    </div>
    <div className="mb-4">
      <input
        type="password"
        name="conformpassword"
        placeholder="Confirm Password"
        value={formData.conformpassword}
        onChange={handleChange}
        required
        minLength={1}
        maxLength={8}
        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
      />
    </div>
    <div className="flex items-center justify-between">
      <button type="submit" id="clicksign" className="btn bg-pink-500 rounded-md mb-2 mt-2 px-4 py-2">Sign Up</button>
      <a href="/login" className="already text-sm text-blue-500 hover:text-blue-700">Already have an account</a>
    </div>
  </form>
</div>

  )
}

export default Sginup