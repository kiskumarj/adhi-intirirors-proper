import axios from 'axios';
import React, { useState } from 'react'
import Navbar from '../Page/Navbar';
import { useLocation } from 'react-router-dom';
import truck from '../mycon/truck.svg'
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
      const response = await axios.post('https://api.adhiinteriors.com/submit-inquiry', {
        modelNumber,
        subcategory,
        customerDetails,
      });

      if (response.status === 200) {
        console.log('Inquiry submitted successfully');
        alert('form submitted successfully ')
        setCustomerDetails({
            name: '',
            email: '',
            phone: '',
            inquiry: '',
        })
      } else {
        console.error('Error submitting inquiry');
       
      }
    } catch (error) {
      console.error('Error submitting inquiry:', error);
    }
  };

  return (
    <div className="div">
        <header>
            <Navbar></Navbar>
        </header><br></br>
    <div className='w-full h-fit flex flex-col lg:flex-row lg:justify-center items-center mt-20 relative lg:right-12'>
    {/* Image on the left */}
    <img src={truck} alt="Background" className="h-auto lg:h-full w-full lg:w-auto object-cover lg:object-contain lg:max-w-md" />
    {/* Form on the right */}
    <div className="lg:ml-6 flex flex-col  items-center lg:items-start">
      <h1 className='text-center lg:text-left text-2xl font-bold'>Product Inquiry!</h1>
      <p className="text-center lg:text-left px-4 lg:px-0 lg:w-96 mb-4 font-semibold">Product name: <span className='font-light text-xl'>{subcategory}</span><br></br>Model number:<span className='font-light text-xl'> {modelNumber}</span></p>
      <form className="mt-4 flex flex-col lg:w-96" onSubmit={handleSubmit} >
        <input type="text" placeholder="Name" className="border-b-2 border-gray-500 rounded-none px-4 py-2 mb-2 focus:outline-none focus:border-pink-700"
          id="name" name="name" value={customerDetails.name} onChange={handleChange} required />
        <input type="email" placeholder="Email" className="border-b-2 border-gray-500 rounded-none px-4 py-2 mb-2 focus:outline-none focus:border-pink-700"
          id="gmail" name="email" value={customerDetails.email} onChange={handleChange} required />
        <input type="tel" placeholder="what'sapp" className="border-b-2 border-gray-500 rounded-none px-4 py-2 mb-2 focus:outline-none focus:border-pink-700"
          id="phone" name="phone" value={customerDetails.phone} onChange={handleChange} maxLength={10} required />
          <input  type='text'
                      name='inquiry'
                      placeholder='description'
                      value={customerDetails.inquiry}
                      onChange={handleChange}
                      id='inquiry'
                      className='border-b-2 border-gray-500 rounded-none px-4 py-2 mb-2 focus:outline-none focus:border-pink-700'
                       ></input>
        <button type="submit" className=" btn btn-outline bg-pink-500  rounded-badged  hover:translate-y-3 transition duration-300">Ask</button>
      </form>
    </div>
  </div><br></br>
  <footer className="footer p-10 bg-base-300 text-base-content lg:h-80">
  <nav>
    <h6 className="footer-title">Services</h6> 
    <a className="link link-hover">Branding</a>
    <a className="link link-hover">Design</a>
    <a className="link link-hover">Marketing</a>
    <a className="link link-hover">Advertisement</a>
  </nav> 
  <nav>
    <h6 className="footer-title">Company</h6> 
    <a className="link link-hover">About us</a>
    <a className="link link-hover">Contact</a>
    <a className="link link-hover">Jobs</a>
    <a className="link link-hover">Press kit</a>
  </nav> 
  <nav>
    <h6 className="footer-title">Social</h6> 
    <div className="grid grid-flow-col gap-4">
      <a><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" className="fill-current"><path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"></path></svg></a>
      <a><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" className="fill-current"><path d="M19.615 3.184c-3.604-.246-11.631-.245-15.23 0-3.897.266-4.356 2.62-4.385 8.816.029 6.185.484 8.549 4.385 8.816 3.6.245 11.626.246 15.23 0 3.897-.266 4.356-2.62 4.385-8.816-.029-6.185-.484-8.549-4.385-8.816zm-10.615 12.816v-8l8 3.993-8 4.007z"></path></svg></a>
      <a><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" className="fill-current"><path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z"></path></svg></a>
    </div>
  </nav>
</footer>
  </div>
  )
}

export default Orderform