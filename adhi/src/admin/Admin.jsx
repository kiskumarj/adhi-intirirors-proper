import React, { useEffect, useState } from 'react'
import Sidenav from './Sidenav'
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
function Admin() {
    const [count, setCount] = useState(0);
  const [ocount, setoCount] = useState(0);
  const [acount, setaCount] = useState(0);
  const [bcount, setbCount] = useState(0);
  const out = useNavigate()

  useEffect(() => {
    const fetchProductCount = async () => {
      try {
        const response = await axios.get('https://api.adhiinteriors.com/productCount');
        setCount(response.data.count);
      } catch (error) {
        console.error(error);
      }
    };

    const fetchOrderCount = async () => {
      try {
        const response = await axios.get('https://api.adhiinteriors.com/orderCount');
        setoCount(response.data.count);
      } catch (error) {
        console.error(error);
      }
    };

    const fetchAskCount = async () => {
      try {
        const response = await axios.get('https://api.adhiinteriors.com/askCount');
        setaCount(response.data.count);
      } catch (error) {
        console.error(error);
      }
    };

    const fetchBookCount = async () => {
      try {
        const response = await axios.get('https://api.adhiinteriors.com/bookCount');
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
  
      const response = await axios.post('https://api.adhiinteriors.com/logout', null, {
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
        <div className="admin-container flex flex-col md:flex-row">
        {/* Sidenav */}
        <header>
            <Sidenav />
        </header>
        
        {/* Dashboard Content */}
        <div className="flex flex-col justify-center md:ml-8">
            <h1 className="dashboard-title text-xl md:text-3xl mb-4 flex items-center">
                Dashboard
                <button onClick={handleLogout} className="btn bg-pink-500 rounded-badge px-4 py-2  hover:translate-y-4">Logout</button>
            </h1>
    
            <div className="count-wrapper flex flex-col md:flex-row justify-between">
                <div className="count-box bg-blue-200 rounded-md lg:w-72 lg:h-32 p-4 mb-4 md:mb-0 md:mr-4">
                    <p className="count-category text-gray-700 font-semibold">Total Products:</p>
                    <p className="count text-2xl">{count}</p>
                </div>
                <div className="count-box bg-green-200 rounded-md p-4 mb-4 md:mb-0 md:mr-4">
                    <p className="count-category text-gray-700 font-semibold">Total Orders:</p>
                    <p className="count text-2xl">{ocount}</p>
                </div>
                <div className="count-box bg-yellow-200 rounded-md p-4 mb-4 md:mb-0 md:mr-4">
                    <p className="count-category text-gray-700 font-semibold">Total Asks:</p>
                    <p className="count text-2xl">{acount}</p>
                </div>
                <div className="count-box bg-purple-200 rounded-md p-4">
                    <p className="count-category text-gray-700 font-semibold">Total Bookings:</p>
                    <p className="count text-2xl">{bcount}</p>
                </div>
            </div>
        </div>
    </div>
    )
}

export default Admin