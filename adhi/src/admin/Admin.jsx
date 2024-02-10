import React, { useEffect, useState } from 'react';
import './admin.css'; // Import your custom CSS file
import Sidenav from './Sidenav';
import axios from 'axios';
import { Navigate, useNavigate } from 'react-router-dom';

function Admin() {
  document.body.style.display = 'flex';
  const [count, setCount] = useState(0);
  const [ocount, setoCount] = useState(0);
  const [acount, setaCount] = useState(0);
  const [bcount, setbCount] = useState(0);
  const out = useNavigate()

  useEffect(() => {
    const fetchProductCount = async () => {
      try {
        const response = await axios.get('http://localhost:5000/productCount');
        setCount(response.data.count);
      } catch (error) {
        console.error(error);
      }
    };

    const fetchOrderCount = async () => {
      try {
        const response = await axios.get('http://localhost:5000/orderCount');
        setoCount(response.data.count);
      } catch (error) {
        console.error(error);
      }
    };

    const fetchAskCount = async () => {
      try {
        const response = await axios.get('http://localhost:5000/askCount');
        setaCount(response.data.count);
      } catch (error) {
        console.error(error);
      }
    };

    const fetchBookCount = async () => {
      try {
        const response = await axios.get('http://localhost:5000/bookCount');
        setbCount(response.data.count);
      } catch (error) {
        console.error(error);
      }
    };

    fetchBookCount();
    fetchAskCount();
    fetchProductCount();
    fetchOrderCount();
  }, []);
  const handleLogout = async () => {
    try {
      const token = localStorage.getItem('accessToken');
      console.log(token)
      if (!token) {
        console.error('No token found. User may not be logged in.');
        return;
      }
  
      const response = await axios.post('http://localhost:5000/logout', null, {
        headers: {
          Accept: 'application/json, text/plain',
          authorization: token,
        },
      });
  
      if (response.status === 200) {
        // Clear the token from local storage
         localStorage.removeItem('accessToken');
        // Navigate to the login page
        out('/login');
        alert('You are logged out.');
      } else {
        console.error('Logout failed. Server responded with:', response);
      }
    } catch (error) {
      console.error('Error logging out:', error);
    }
  };
  return (
    <div className='admin-container'>
      <header>
        <Sidenav />
      </header>
      <h1 className='dashboard-title'>Dashboard
      <button onClick={handleLogout} className='logoutbt'>Logout</button>
      </h1>
      <div className='count-wrapper'>
        <div className='count-box'>
          <p className='count-category'>Total Products:</p>
          <p className='count'>{count}</p>
        </div>
        <div className='count-box'>
          <p className='count-category'>Total Orders:</p>
          <p className='count'>{ocount}</p>
        </div>
        <div className='count-box'>
          <p className='count-category'>Total Asks:</p>
          <p className='count'>{acount}</p>
        </div>
        <div className='count-box'>
          <p className='count-category'>Total Bookings:</p>
          <p className='count'>{bcount}</p>
        </div>
      </div>
    </div>
  );
}

export default Admin;
