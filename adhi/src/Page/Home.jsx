import React, { useState } from 'react'
import Navbar from './Navbar';
import Slider from '../Slider';
import sofain1 from '../mycon/sofain1.png'
import dininigtable from '../mycon/dininigtable.png'
import chair from '../mycon/chair.png'
import metaltable from '../mycon/metaltable.png'
import carproso from '../mycon/carproso.png'
import bedcard from '../mycon/bedcard.png'
import studantproduct from '../mycon/studantproduct.png'
import back from '../mycon/back.svg'
import tv from '../mycon/tv.png'
import int from '../mycon/int2.png'
import work1 from '../mycon/work1.jpg'
import work2 from '../mycon/work2.jpg'
import work3 from '../mycon/work3.jpg'
import wschair from "../mycon/wschair.png"
import workstation from "../mycon/workstation.png"
import brand from "../mycon/brand.png"
import G03 from "../mycon/G03.png"
import store from "../mycon/store.png"
import meet from "../mycon/meet.jpg"
import loby from "../mycon/loby.jpg"
import cabin from "../mycon/cabin.jpg"
import { VscWorkspaceTrusted } from "react-icons/vsc";
import { LuFacebook, LuInstagram, LuThumbsUp, LuYoutube } from "react-icons/lu";
import { HiOutlineTruck } from "react-icons/hi";
import { GoTools } from "react-icons/go";
import { RiBillLine } from "react-icons/ri";
import { Link, NavLink } from 'react-router-dom';
import axios from 'axios';
function Home() {
  const [ask, setask] = useState({
    name: '',
    phone: '',
    gmail: '',
  })
  const [formData, setFormData] = useState({
    name: '',
    phoneNumber: '',
    city: '',
    email: '',
    description: ''
  });
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };
  const handleChange = (e) => {
    const { name, value } = e.target;
    setask({ ...ask, [name]: value });
  };
  const handlebuzzer = async (a) => {
    a.preventDefault()
    axios.post('https://api.adhiinteriors.com/postask', ask)
      .then((response) => {
        console.log('respone success', response.data);
        alert('response sent succesfully...')
        setask({
          name: '',
          phone: '',
          gmail: '',
        });
      })
      .catch((error) => {
        console.error(error);
      });
  }
  const handleFormSubmit = async (e) => {
    e.preventDefault();

    try {
      // Send a POST request with form data
      const response = await axios.post('https://api.adhiinteriors.com/bookings', formData);

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
    <div>
      <Navbar></Navbar>
      <Slider></Slider>
      <div className="hero min-h-screen bg-base-200 relative">
        <div className='absolute inset-0 bg-gradient-to-r from-gray-200 via-slate-200 to-slate-400 w-full h-full saturate-50 blur-md animate-pulse'></div>
        <div className="hero-content text-center flex flex-col items-center justify-center">
          <div className="max-w-md px-4">
            <h1 className="text-4xl md:text-5xl font-bold text-black">We Aadhiinteriors</h1>
            <p className="py-6 text-black">Aadhi Interiors is a premier interior design firm dedicated to transforming spaces into stunning environments
              that reflect our clients' tastes, preferences, and lifestyles. With a team of experienced designers and craftsmen,
              we specialize in creating elegant and functional interiors for residential, commercial, and hospitality projects.</p>
            <button className="btn btn-outline rounded-badge px-6 py-2 "  onClick={() => document.getElementById('my_modal_5').showModal()}>Let's Ask</button>
          </div>
        </div>
      </div>



      <div className='flex flex-wrap items-center justify-center font-bold'>

        <NavLink to={"/sofa"} className="w-full sm:w-1/2 lg:w-1/4  lg:relative top-24">
          <img src={sofain1} height={400} width={400} className='sofa-png transform transition-transform duration-300 hover:scale-125 ' title='click here to explore' />
        </NavLink>
        <p className='w-full sm:w-1/2 lg:w-1/6 text-center sm:text-left text-sm mt-4 sm:mt-0'>
          When it comes to home furnishings, few pieces can rival the timeless charm, comfort, and durability of a leather sofa. At adhi furniture,
          we take pride in offering a handpicked selection of premium leather sofas that effortlessly blend luxury and functionality
        </p>
        <NavLink to={'/hotel'} className="w-full sm:w-1/2 lg:w-1/4 lg:relative top-24">
          <img src={dininigtable} height={400} width={400} className='ttable sofa-png transform transition-transform duration-300 hover:scale-125' title='click here to explore'></img>
        </NavLink>
        <p className='w-full sm:w-1/2 lg:w-1/6 text-center sm:text-left text-sm mt-4 sm:mt-0'>
          Discover the art of fine craftsmanship with our dining furniture. Each piece is a masterpiece of design and durability, meticulously crafted to stand the test of time while adding a touch of elegance to your space.
        </p>
        <NavLink to={'/office'} className="w-full sm:w-1/2 lg:w-1/4 lg:relative top-24">
          <img src={chair} className='chair sofa-png transform transition-transform duration-300 hover:scale-125' title='click here to explore'></img>
        </NavLink>
        <p className='w-full sm:w-1/2 lg:w-1/6 text-center sm:text-left text-sm mt-4 sm:mt-0'>
          Add a touch of flair to your living space with our exquisite collection of accent chairs. These stylish and versatile seating options are designed to bring character and charm to any room.
        </p>
        <NavLink to={'/metaltable'} className="w-full sm:w-1/2 lg:w-1/4 lg:relative top-24">
          <img src={metaltable} className='metaltable sofa-png transform transition-transform duration-300 hover:scale-125' title='click here to explore'></img>
        </NavLink>
        <p className='w-full sm:w-1/2 lg:w-1/6 text-center sm:text-left text-sm mt-4 sm:mt-0'>
          The sleek and contemporary design of our premium metal table adds a touch of modern luxury to any space. Its clean lines and minimalist aesthetic make it a versatile addition to your home, blending seamlessly with various decor styles.
        </p>
      </div>
      <div className="container mx-auto px-4 md:px-8">
        <div className="mt-8 md:mt-12">
          <h2 className="text-xl md:text-2xl font-bold text-left">OUR PRODUCTS</h2>
          <p className="text-sm md:text-base text-left mt-2">more than 1000+ designs</p>
        </div>

        <div className="mt-8 md:mt-12 flex flex-wrap justify-center items-center">
          <div className="text-center mr-8 mb-8">
            <VscWorkspaceTrusted className="mx-auto" size={60} />
            <p>Trusted</p>
          </div>
          <div className="text-center mr-8 mb-8">
            <LuThumbsUp className="mx-auto" size={60} />
            <p>Quality</p>
          </div>
          <div className="text-center mr-8 mb-8">
            <HiOutlineTruck className="mx-auto" size={60} />
            <p>On-time delivery</p>
          </div>
          <div className="text-center mb-8 md:clear-both">
            <GoTools className="mx-auto" size={60} />
            <p>Customizable</p>
          </div>
        </div>

        <div className="text-center mt-8 md:mt-12">
          <h2 className="text-xl md:text-2xl font-bold">Warranty!</h2>
          <p className="text-sm md:text-base mt-2">12 months+ warranty for every product</p>
        </div>
      </div><br></br>
      <div className='w-full h-fit'>
        <h2 className='font-bold text-2xl text lg:ml-5 sm:ml-0 '>Most Selling Home products</h2>
        <p className='lg:ml-5 sm:ml-0'>click and explore oru most selling product</p><br></br>
        <div className="flex flex-warp lg:flex-row lg:flex-wrap justify-evenly lg:ml-5 sm:ml-0">
          <div class='w-1/2 lg:w-52  h-44 p-2 lg:bg-gray-300 rounded-lg'>
            <a href='/most-selling/sofa'>
              <img src={carproso} class='w-24 h-24 mx-auto block rounded-full hover:scale-150 transition duration-300'></img>
            </a>
            <p class='text-center font-semibold skeleton'>Premium sofa</p>
          </div>
          <div class='w-1/2 lg:w-52 h-44 p-2 lg:bg-gray-300 rounded-lg'>
            <a href='/most-selling/bed'>
              <img src={bedcard} class='w-24 h-24 mx-auto block rounded-full hover:scale-150 transition duration-300'></img>
            </a>
            <p class='text-center font-semibold skeleton'>Premium bed</p>
          </div>
          <div class='w-1/2 lg:w-52 h-44 p-2 lg:bg-gray-300 rounded-lg'>
            <a href='/most-selling/tv'>
              <img src={tv} class='w-24 h-24 mx-auto block rounded-full hover:scale-150 transition duration-300'></img>
            </a>
            <p class='text-center font-semibold skeleton'>Premium tv</p>
          </div>
          <div class='w-1/2 lg:w-52 h-44 p-2 lg:bg-gray-300 rounded-lg'>
            <a href='/most-selling/student'>
              <img src={studantproduct} class='w-24 h-24 mx-auto block rounded-full hover:scale-150 transition duration-300'></img>
            </a>
            <p class='text-center font-semibold skeleton'>student product</p>
          </div>
        </div><br></br>
        <h2 className='font-bold text-2xl text lg:ml-5 sm:ml-0 '>Most Selling Office products</h2>
        <p className='lg:ml-5 sm:ml-0'>click and explore oru most selling product</p><br></br>
        <div className="flex flex-warp lg:flex-row lg:flex-wrap justify-evenly lg:ml-5 sm:ml-0">
          <div class='w-1/2 lg:w-52 h-44 p-2 lg:bg-gray-300 rounded-lg'>
            <a href='/most-selling/prechair'>
              <img src={wschair} class='w-24 h-24 mx-auto block rounded-full hover:scale-150 transition duration-300'></img>
            </a>
            <p class='text-center font-semibold skeleton'>Premium chair</p>
          </div>
          <div class='w-1/2 lg:w-52 h-44 p-2 lg:bg-gray-300 rounded-lg'>
            <a href='/most-selling/workstation'>
              <img src={workstation} class='w-24 h-24 mx-auto block rounded-full hover:scale-150 transition duration-300'></img>
            </a>
            <p class='text-center font-semibold skeleton'>Work Station</p>
          </div>
          <div class='w-1/2 lg:w-52 h-44 p-2 lg:bg-gray-300 rounded-lg'>
            <a href='/most-selling/mst'>
              <img src={G03} class='w-24 h-24 mx-auto block rounded-full hover:scale-150 transition duration-300'></img>
            </a>
            <p class='text-center font-semibold skeleton'>Table</p>
          </div>
          <div class='w-1/2 lg:w-52 h-44 p-2 lg:bg-gray-300 rounded-lg'>
            <a href='/most-selling/storeage'>
              <img src={store} class='w-24 h-24 mx-auto block rounded-full hover:scale-150 transition duration-300'></img>
            </a>
            <p class='text-center font-semibold skeleton'>storeage unit</p>
          </div>
        </div>
      </div><br></br><br></br>
      <div className='w-full h-fit flex flex-col lg:flex-row items-center'>
        {/* Image on the left */}
        <img src={back} alt="Background" className="h-auto lg:h-full w-full lg:w-auto object-cover lg:object-contain lg:max-w-md" />
        {/* Form on the right */}
        <div className="lg:ml-6 flex flex-col justify-center items-center lg:items-start">
          <h1 className='text-center lg:text-left text-2xl font-bold'>Book a Consultant!</h1>
          <p className="text-center lg:text-left px-4 lg:px-0 lg:w-96 mb-4">Our team of skilled and experienced interior
            consultants is here to turn your vision into reality</p>
          <form className="mt-4 flex flex-col lg:w-96" onSubmit={handlebuzzer} >
            <input type="text" placeholder="Name" className="border-b-2 border-gray-500 rounded-none px-4 py-2 mb-2 focus:outline-none focus:border-pink-700"
              id="name" name="name" value={ask.name} onChange={handleChange} required />
            <input type="email" placeholder="Email" className="border-b-2 border-gray-500 rounded-none px-4 py-2 mb-2 focus:outline-none focus:border-pink-700"
              id="gmail" name="gmail" value={ask.gmail} onChange={handleChange} required />
            <input type="tel" placeholder="what'sapp" className="border-b-2 border-gray-500 rounded-none px-4 py-2 mb-2 focus:outline-none focus:border-pink-700"
              id="phone" name="phone" value={ask.phone} onChange={handleChange} maxLength={10} required />
            <button type="submit" className=" btn btn-outline bg-pink-500  rounded-badged  hover:translate-y-3 transition duration-300">Ask</button>
          </form>
        </div>
      </div><br></br>
      <div className='w-full h-fit lg:h-96 flex flex-col lg:flex-row items-center'>
        {/* Image on the left */}
        <div className='w-full lg:w-auto h-auto lg:h-96 flex flex-col lg:flex-row items-center justify-center lg:justify-start lg:ml-24'>
          <div className="lg:ml-0 lg:mr-10 flex flex-col justify-center items-center lg:items-start">
            <h1 className='text-center lg:text-left text-2xl font-bold mb-4 lg:mb-2'>Book Interiors</h1>
            <p className='text-center lg:text-left px-4 lg:px-0 lg:w-72 mb-4 lg:mb-2 font-medium'>
              Interiors booking is the process of securing professional assistance and services to design, decorate,
              or renovate interior spaces such as homes, offices, or commercial establishments.
            </p>
            <button className="btn bg-pink-500 rounded-badge px-4 py-2 hover:translate-y-4" onClick={() => document.getElementById('my_modal_5').showModal()}>Book!</button>
            <dialog id="my_modal_5" className="modal modal-bottom sm:modal-middle">
              <div className="modal-box">
                <h3 className="font-bold text-lg">Book!</h3>
                <div className="modal-action">
                  <form method="dialog" onSubmit={handleFormSubmit}>
                    <input type="text" placeholder="Name" className="border-b-2 border-gray-500 rounded-none px-4 py-2 mb-2 focus:outline-none focus:border-pink-700"
                      id="name" name="name" value={formData.name} onChange={handleInputChange} />
                    <input type="text" placeholder="city" className="border-b-2 border-gray-500 rounded-none px-4 py-2 mb-2 focus:outline-none focus:border-pink-700"
                      id="city" name="city" value={formData.city} onChange={handleInputChange} />
                    <input type="email" placeholder="Email" className="border-b-2 border-gray-500 rounded-none px-4 py-2 mb-2 focus:outline-none focus:border-pink-700"
                      id="email" name="email" value={formData.email} onChange={handleInputChange} />
                    <input type="tel" placeholder="what'sapp" className="border-b-2 border-gray-500 rounded-none px-4 py-2 mb-2 focus:outline-none focus:border-pink-700"
                      id="phoneNumber" name="phoneNumber" value={formData.phoneNumber} onChange={handleInputChange} maxLength={10} />
                    <input
                      type='text'
                      name='description'
                      placeholder='description'
                      value={formData.description}
                      onChange={handleInputChange}
                      id='description'

                    /><br></br>
                    <button type="submit" className=" btn btn-outline bg-pink-500  rounded-badged  hover:translate-y-3 transition duration-300 ">Ask</button>

                    <button className="btn">Close</button>
                  </form>
                </div>
              </div>
            </dialog>
          </div><br></br>
          <div className="flex justify-center lg:justify-start overflow-x-auto snap-x">
            <img src={work2} className='w-48 lg:w-72 h-auto lg:h-96 rounded-2xl shadow-black mr-4'></img>
            <img src={work1} className='w-48 lg:w-72 h-auto lg:h-96 rounded-2xl mb-4 lg:mb-0 mr-4'></img>
            <img src={work3} className='w-48 lg:w-72 h-auto lg:h-96 rounded-2xl shadow-black'></img>
          </div>
        </div>
      </div>
      <div className="w-full h-fit flex-wrap ">
        <img src={brand} className='w-full md:w-1/2 h-auto md:h-1/2 md:float-right '></img>
        <h1 className='font-bold text-center text-2xl lg:mt-10'>Office special products</h1>
        <p className='font-light text-center text-2xl'>oru premium&Eligent office product</p><br></br>
        <div className='flex justify-center lg:justify-start overflow-x-auto snap-mandatory lg:ml-4 '>
          <img src={meet} className='w-72 h-72 rounded-xl mr-4 snap-start'></img>
          <img src={cabin} className='w-96 h-72 rounded-xl mr-4'></img>
          <img src={loby} className='w-64 h-72 rounded-xl'></img>
        </div>
      </div><br></br>
      <div className="flex justify-center">
      <button className="btn bg-pink-500 rounded-badge px-4 py-2 hover:translate-y-4 flex" onClick={() => document.getElementById('my_modal_5').showModal()}>Book!</button>
      </div><br></br><br></br>
      <div className='mt-10'>
      <footer className="footer p-10 bg-base-300 text-base-content">
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
    </div>
  )
}

export default Home