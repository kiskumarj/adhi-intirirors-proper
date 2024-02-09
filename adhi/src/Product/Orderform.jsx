
import React, { useState } from 'react';
import axios from 'axios';
import { useLocation } from 'react-router-dom';
import "./book.css"
import orderim from '../mycon/orderim.jpg'
import { BsCartCheck } from "react-icons/bs";
import Navbar from '../Page/Navbar';
import Footer from '../Page/Footer';
function Orderform() {
  const location = useLocation();
  const modelNumber = new URLSearchParams(location.search).get('model');
  const subcategory = new URLSearchParams(location.search).get('subcategory');

  const [customerDetails, setCustomerDetails] = useState({
    name: '',
    email: '',
    phone: '',
    inquiry: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setCustomerDetails((prevDetails) => ({
      ...prevDetails,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post('http://localhost:5000/submit-inquiry', {
        modelNumber,
        subcategory,
        customerDetails,
      });

      if (response.status === 200) {
        console.log('Inquiry submitted successfully');
        alert('form submitted successfully ')
      } else {
        console.error('Error submitting inquiry');
       
      }
    } catch (error) {
      console.error('Error submitting inquiry:', error);
    }
  };

  return (
    <div className='book-div'>
         <header className='navbar'><Navbar></Navbar></header>
      <h2 >Product Inquiry Form</h2>
      <p className='order-di'>
      <BsCartCheck size={60} />
      </p>
      <p className='order-di'>Product name: {subcategory}/Model number: {modelNumber}</p>
      <img className='book-jpg' src={orderim}></img>
      <div className='req-form'>
      <form onSubmit={handleSubmit}>
        
        <label>
          
          <input
            type="text"
            name="name"
            value={customerDetails.name}
            onChange={handleChange}
            placeholder='name'
            id='name'
            required
          />
        </label>
        <br />
        <label>
          
          <input
            type="email"
            name="email"
            value={customerDetails.email}
            onChange={handleChange}
            id='gmail'
            placeholder='your-gmail'
            required
          />
        </label>
        <br />
        <label>
          
          <input
            type="tel"
            name="phone"
            placeholder='your-whatsapp-number'
            value={customerDetails.phone}
            onChange={handleChange}
            id='phone'
            required
          />
        </label>
        <br />
        <label>
         
          <textarea
            name="inquiry"
            value={customerDetails.inquiry}
            onChange={handleChange}
            placeholder='description'
            id='description'
            required
          />
        </label>
        <br />
        <button type="submit" id='askbt-2'>Submit Inquiry</button>
      </form>
      </div><br></br>
      <footer>
        <Footer></Footer>
      </footer>
    </div>
  );
}

export default Orderform;
