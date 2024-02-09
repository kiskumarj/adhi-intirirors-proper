import axios from 'axios'
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import './login.css'
import styled from 'styled-components';
function Login() {
  document.body.style.display ='flex'
  document.body.style.background = ' linear-gradient(14deg, rgba(223,220,220,1) 16%, rgba(98,170,141,0.768032212885154) 71%'
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
      const response = await axios.post('http://localhost:5000/login', auth)

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
    
    <div className='login'>
        <form onSubmit={handlelogin}>
          <h1>
              LO<br></br>
              GO
          </h1>
            <input type="text" 
            placeholder='username'
            name='username'
            value={auth.username}
            onChange={handleinputchanges}
            required
            id='username'
            />
            <br></br>
            <input type='password'
            placeholder='password'
            name='password'
            value={auth.password}
            onChange={handleinputchanges}
            required
            id='password'
            ></input> 
            <br></br>  
            <button type='submit' id='click' >Login</button>
            <a href='/signup' className='createnewone'>create new account</a>
        </form>
    </div>
  )
}
export default Login   
