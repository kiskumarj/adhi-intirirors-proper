import axios from 'axios';
import React, { useEffect, useState } from 'react'
import Navbar from './Navbar';
import Footer from './Footer';
import "./home.css"
import Slider from '../Slider';
import sofain1 from '../mycon/sofain1.png'
import dininigtable from '../mycon/dininigtable.png'
import chair from '../mycon/chair.png'
import metaltable from '../mycon/metaltable.png'
import carproso from '../mycon/carproso.png'
import bedcard from '../mycon/bedcard.png'
import studantproduct from '../mycon/studantproduct.png'
import tv from '../mycon/tv.png'
import int from '../mycon/int2.png'
import work1 from '../mycon/work1.jpg'
import work2 from '../mycon/work2.jpg'
import work3 from '../mycon/work3.jpg'
import wschair from "../mycon/wschair.png"
import workstation from "../mycon/workstation.png"
import G03 from "../mycon/G03.png"
import store from "../mycon/store.png"
import { VscWorkspaceTrusted } from "react-icons/vsc";
import { LuFacebook, LuInstagram, LuThumbsUp, LuYoutube } from "react-icons/lu";
import { HiOutlineTruck } from "react-icons/hi";
import { GoTools } from "react-icons/go";
import { RiBillLine } from "react-icons/ri";
import { Link, NavLink } from 'react-router-dom';

function Home() {
  document.body.style.background = '#fefcff'
  const [ask, setask] = useState({
    name: '',
    phone: '',
    gmail: '',
  })
  const handleChange = (e) => {
    const { name, value } = e.target;
    setask({ ...ask, [name]: value });
  };
  const handlebuzzer = async (a) => {
    a.preventDefault()
    axios.post('http://localhost:5000/postask', ask)
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
  return (
    <div>
      <header className='navbar'><Navbar></Navbar></header>
      <div className='show'>
        <Slider></Slider>
      </div>
      <p className='sofa-intro'>AN OVERVIEW</p>
      <div className='circle-ani'>
        <NavLink to={"/sofa"}>
          <img src={sofain1} height={400} width={400} className='sofa-png' title='click here to explore' />
        </NavLink>
        <p className='aboutprod'>
          When it comes to home furnishings, few pieces can rival the timeless charm, comfort, and durability of a leather sofa.
          At adhi furniture,
          we take pride in offering a handpicked selection of premium leather
          sofas that effortlessly blend luxury and functionality

        </p>
        <NavLink to={'/hotel'}>
          <img src={dininigtable} height={400} width={400} className='ttable' title='click here to explore'></img>
        </NavLink>
        <p className='ttable-intro'>
          Discover the art of fine craftsmanship with our dining furniture.
          Each piece is a masterpiece of design and durability,
          meticulously crafted to stand the test of time while adding a touch of elegance to your space. </p>
        <NavLink to={'/office'}>
          <img src={chair} className='chair' title='click here to explore'></img>
        </NavLink>
        <p className='aboutchair'>
          Add a touch of flair to your living space with our exquisite collection of accent chairs.
          These stylish and versatile seating options are designed to bring character and charm to any room.
          Each accent chair in our selection is a work of art, boasting distinctive
          designs that can instantly transform the look and feel of your space. Whether you prefer
        </p>
        <NavLink to={'/metaltable'}>
          <img src={metaltable} className='metaltable' title='click here to explore'></img>
        </NavLink>
        <p className='aboutmetal'>
          The sleek and contemporary design of our premium metal table adds a touch of modern luxury to any space.
          Its clean lines and minimalist aesthetic make it a versatile addition to your home,
          blending seamlessly with various decor styles.
        </p>

      </div><br></br>

      <div className='ask'>

      </div><br></br>
      <h2 className='book'>OUR PRODUCTS</h2>
      <p className='subbook'>more then 1000+ of desgine</p>
      <div className='interior-req'>
        <h2>why us?</h2>
        <ul className='whyusli'>
          <li><VscWorkspaceTrusted size={60} ></VscWorkspaceTrusted><br></br> Trusted</li>
          <li><LuThumbsUp size={60}></LuThumbsUp><br></br>Quality</li>
          <li><HiOutlineTruck size={60}></HiOutlineTruck> <br></br>Ontime delevery</li>
          <li><GoTools size={60}></GoTools><br></br>Custamizable</li>

        </ul><br></br>
        <div className='card-pro'>
          <p className='promise'>
            Welcome to AdhiInteriors, where your satisfaction is our top priority! With over 7 years of extensive experience and a satisfied clientele of over 100 customers,
            we take pride in our commitment to delivering unparalleled quality and trust.
            At AdhiInteriors, we don't just create spaces; we craft experiences that exceed your expectations. Trust us to transform your vision into reality, as we blend expertise with a promise of excellence.
            Your journey to impeccable interiors begins with us – where Quality, Trust, and Customer Satisfaction are more than promises;
            they are our guiding principles. Discover the difference with AdhiInteriors, where your dream space is our ultimate masterpiece!
          </p>

        </div>
        <h2> <RiBillLine size={60}></RiBillLine>
          warranty!</h2>
        <p className='warranty'>12 months+ warranty for every products</p>
      </div><br></br>
      <div className='product-spc'>

      </div><br></br>
      <div className='most-selling'>
        <h2 className='most-head1'>Most Selling Home furniture</h2>
        <p className='sopr'>with best price</p>
        <div className='flexdir'>
          <div className='sofa-card'>
            <NavLink to={'/most-selling/sofa'}>
              <img src={carproso} height={90} width={90} className='sofacat'></img>
            </NavLink>
            <p className='name-card-sofa'>Premium sofa</p>
          </div>
          <div className='bed-card'>
            <NavLink to={"/most-selling/bed"}>
              <img src={bedcard} height={90} width={90} className='sofacat'></img>
            </NavLink>
            <p className='name-card-sofa'>Premium bed</p>
          </div>
          <div className='tv-card'>
            <NavLink to={"/most-selling/tv"}>
              <img src={tv} height={95} width={95} className='sofacat'></img>
            </NavLink>
            <p className='name-card-sofa'>tv case</p>
          </div>
          <div className='tv-card'>
            <NavLink to={"/most-selling/student"}>
              <img src={studantproduct} height={95} width={95} className='sofacat'></img>
            </NavLink>
            <p className='name-card-sofa'>studant product</p>
          </div>

        </div>
        <h2 className='most-head1'>Most Selling office furniture</h2>
        <p className='sopr'>with best price</p>
        <div className='flexdir'>
          <div className='sofa-card'>
            <NavLink to={"/most-selling/prechair"}>
              <img src={wschair} height={90} width={90} className='sofacat'></img>
            </NavLink>
            <p className='name-card-sofa'>Premium chair</p>
          </div>
          <div className='bed-card'>
            <NavLink to={"/most-selling/workstation"}>
              <img src={workstation} height={90} width={90} className='sofacat'></img>
            </NavLink>
            <p className='name-card-sofa'>Work station</p>
          </div>
          <div className='tv-card'>
            <NavLink to={"/most-selling/mst"}>
              <img src={G03} height={95} width={95} className='sofacat'></img>
            </NavLink>
            <p className='name-card-sofa'>Table</p>
          </div>
          <div className='tv-card'>
            <NavLink to={"/most-selling/storeage"}>
              <img src={store} height={95} width={95} className='sofacat'></img>
            </NavLink>
            <p className='name-card-sofa'>Storeage unit</p>
          </div>
        </div>
        <div className='req-int'>
          <h2 className='req-title'>Book a consaltant!</h2>
          <p className='consalt-intro'>
            Our team of skilled and experienced interior consultants is <br></br>
            here to turn your vision into reality
          </p>
          <img src={int} height={600} width={700} className='int-poster'></img>
          <div className='req-form'>
            <form onSubmit={handlebuzzer} id='quest'>
              <h2>Ask the team!</h2>
              <input type='text' placeholder='name' required id='name' name='name' value={ask.name} onChange={handleChange} ></input><br></br>
              <input type='tel' placeholder='whats app number' required id='phone' name='phone' value={ask.phone} onChange={handleChange} maxLength={10}></input><br></br>
              <input type='email' placeholder='e-mail address' id='gmail' required name='gmail' value={ask.gmail} onChange={handleChange}></input><br></br>
              <button id='askbt' type='submit'>Ask</button>
            </form>
          </div>
          <div className='portfolio'>
            <h2>Interior works</h2>
            <img src={work1} alt="" height={500} width={500} className='work1' />
            <img src={work2} alt="" height={500} width={500} className='work2' />
            <img src={work3} alt="" height={500} width={500} className='work3' />
            <p className='consalt-book'>Book for interior work</p>
           <Link to={'/book-interior'}>
            <button className='book-but'>Book!</button><br></br>
            </Link>

            <div className='social'>
              <h2 className='heads'>Social media!</h2>
              <LuInstagram size={60} className='insta'></LuInstagram>
              <LuYoutube size={60} className='you'></LuYoutube>
              <LuFacebook size={60} className='face'></LuFacebook>
            </div>
            <Footer></Footer>
          </div>

        </div>

      </div>

    </div>

  )
}

export default Home
