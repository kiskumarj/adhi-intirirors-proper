import React, { useEffect, useState } from 'react'
import { NavLink } from 'react-router-dom'
import './navbar.css'
import { LuSofa } from 'react-icons/lu'
import { BiBed } from 'react-icons/bi'
import { PiOfficeChair } from 'react-icons/pi'
import { TbBellSchool } from 'react-icons/tb'
import { MdOutlineHotel } from 'react-icons/md'
import { PiChair } from 'react-icons/pi'
import { MdOutlineTableRestaurant } from 'react-icons/md'
import { LuContact } from 'react-icons/lu'
import logonav from '../mycon/logonav.png'

function Navbar() {
  const [isNavbarFixed, setIsNavbarFixed] = useState(false);
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setIsNavbarFixed(true);
      } else {
        setIsNavbarFixed(false);
      }
    };

    window.addEventListener('scroll', handleScroll);


    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div className={`navbar ${isNavbarFixed ? 'navbar-fixed' : ''}`}>
      
           
      <nav>
        <ul>
          <li>
          <div className='logo-can'>
            <NavLink to={"/"}>
              <img src={logonav} className='logo-png'></img>
            </NavLink>
           </div>
          </li>
          <li>
            <NavLink to={"/sofa"}><LuSofa></LuSofa>SOFA</NavLink>

          </li>
          <li>
            <NavLink to={"/homefurniture"}><BiBed></BiBed>HOME FURNITURE</NavLink>
          </li>
          <li>
            <NavLink to={"/Office"}><PiOfficeChair></PiOfficeChair>OFFICE</NavLink>
          </li>
          <li>
            <NavLink to={"/educational"}><TbBellSchool></TbBellSchool>EDUCATIONAL</NavLink>
          </li>
          <li>
            <NavLink to={"/hotel"}><MdOutlineHotel></MdOutlineHotel>HOTEL</NavLink>
          </li>
          <li>
            <NavLink to={"/outdoor"}><PiChair></PiChair>OUTDOOR</NavLink>
          </li>
          <li>
            <NavLink to={"/metaltable"}><MdOutlineTableRestaurant></MdOutlineTableRestaurant>METAL TABLES</NavLink>
          </li>
          <li>
            <NavLink to={"/about"}><LuContact></LuContact>ABOUT</NavLink>
          </li>
        </ul>
      </nav>
    </div>
  )
}

export default Navbar