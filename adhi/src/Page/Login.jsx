import axios from 'axios'
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
function Login() {
  const [auth,setauth]= useState({
    username: '',
    password: ''
  })
  const pass = useNavigate()
  const handleinputchanges = (e)=>{
    const {name, value}= e.target
    setauth({...auth,[name]: value})
  }
  const handlelogin = async (e)=>{
    e.preventDefault()
    try{
      const response = await axios.post('https://api.adhiinteriors.com/login', auth)

      if (response.status === 200) {
        pass('/admin')
        const data = await response.data
        const accessToken = data.token
        console.log(accessToken)
        localStorage.setItem('accessToken', accessToken);
        console.log('Login successful');
      }
    } catch (error) {
      console.error('Login failed', error);
    }
  }
  return (
    <div className="flex flex-col items-center justify-center min-h-screen">
  <h1 className="text-4xl font-bold mb-6">
    LO<br class="md:hidden"></br>
    GO
  </h1>
  <form className="bg-gray-100 shadow-md rounded px-8 pt-6 pb-8 mb-4 w-full max-w-xs" onSubmit={handlelogin}>
    <div className="mb-4">
      <label htmlFor="username" className="block text-gray-700 text-sm font-bold mb-2">Username</label>
      <input
        type="text"
        placeholder="Username"
        name="username"
        value={auth.username}
        onChange={handleinputchanges}
        required
        id="username"
        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
      />
    </div>
    <div className="mb-6">
      <label htmlFor="password" className="block text-gray-700 text-sm font-bold mb-2">Password</label>
      <input
        type="password"
        placeholder="Password"
        name="password"
        value={auth.password}
        onChange={handleinputchanges}
        required
        id="password"
        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
      />
    </div>
    <div className="flex items-center justify-between">
      <button
        type="submit"
        id="click"
        className="btn bg-pink-500 rounded-md mb-2 mt-2 px-4 py-2"
      >
        Login
      </button>
      <a href="/signup" className="createnewone text-sm text-blue-500 hover:text-blue-700">Create new account</a>
    </div>
  </form>
</div>

  )
}

export default Login