import React, { useState } from 'react';
import axios from 'axios';
import './book.css'
import bookint from '../mycon/bookint.jpg'
function Bookmodel() {
  // State to manage form inputs
  const [formData, setFormData] = useState({
    name: '',
    phoneNumber: '',
    city: '',
    email: '',
    description: ''
  });

  // Update form data on input change
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  // Handle form submission
  const handleFormSubmit = async (e) => {
    e.preventDefault();

    try {
      // Send a POST request with form data
      const response = await axios.post('http://localhost:5000/bookings', formData);

      // Handle the response as needed (e.g., show a success message)
      console.log('Booking successful!', response.data);

      // Clear form data after successful submission if needed
      setFormData({
        name: '',
        phoneNumber: '',
        city: '',
        email: '',
        description: ''
      });
    } catch (error) {
      console.error('Error booking:', error);
      // Handle errors (e.g., show an error message)
    }
  };

  return (
    <div className='book-div'>
      <h1>Book For Interior</h1>
      <img src={bookint} className='book-jpg'></img>
      <div className='req-form'>
        <form onSubmit={handleFormSubmit}>
          <input
            type='text'
            name='name'
            placeholder='name'
            value={formData.name}
            onChange={handleInputChange}
            id='name'
            required
          /><br></br>
          <input
            type='tel'
            name='phoneNumber'
            placeholder='phonenumer'
            value={formData.phoneNumber}
            onChange={handleInputChange}
            id='phone'
            required
          /><br></br>
          <input
            type='text'
            name='city'
            placeholder='city'
            value={formData.city}
            onChange={handleInputChange}
            id='city'
            required
          /><br></br>
          <input
            type='email'
            name='email'
            placeholder='gmailhere'
            value={formData.email}
            onChange={handleInputChange}
            id='gmail'
            required
          /><br></br>
          <input
            type='text'
            name='description'
            placeholder='description'
            value={formData.description}
            onChange={handleInputChange}
            id='description'
            required
          /><br></br>
          <button type='submit' id='askbt'>Book</button>
        </form>
      </div>
    </div>
  );
}

export default Bookmodel;
