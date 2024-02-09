import React, { useState, useEffect } from 'react';
import { ClipLoader } from 'react-spinners';
import axios from 'axios';
import { Navigate, Outlet } from 'react-router-dom';
import { css } from '@emotion/react'; 

const PrivateRoute = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const checkAuthStatus = async () => {
      try {
        const token = localStorage.getItem('accessToken');

        if (!token) {
          setIsAuthenticated(false);
          setLoading(false);
          return;
        }

        const response = await axios.get('http://localhost:5000/protected', {
          headers: {
            Accept: 'application/json, text/plain',
            authorization: token,
          },
        });

        if (response.status === 200) {
          setIsAuthenticated(true);
        } else {
          setIsAuthenticated(false);
        }
      } catch (error) {
        console.error('Error checking authentication status:', error);
        setIsAuthenticated(false);
      } finally {
        setLoading(false);
      }
    };

    const interval = setInterval(() => {
      checkAuthStatus();
    }, 5000); 

    // Clear interval on component unmount
    return () => clearInterval(interval);
  }, []);

  const override = css`
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 0 auto;
    border-color: red;
  `;

  return loading ? (
    <div className="d-flex justify-content-center align-items-center" style={{ height: '90vh' }}>
      <ClipLoader color="#36D7B7" loading={loading} css={override} size={50} />
    </div>
  ) : (
    isAuthenticated ? <Outlet /> : <Navigate to="/" />
  );
};

export default PrivateRoute;



