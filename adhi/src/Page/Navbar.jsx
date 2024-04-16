import React from 'react'
import { NavLink } from 'react-router-dom'
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
  return (
    <div className="navbar bg-base-100 fixed z-50">
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
          </div>
          <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
            <li >
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
        </div>
        <NavLink to={"/"}>
        <a className=""> <img src={logonav} className=' w-20 h-20 avatar rounded-md font-bold left-20 cursor-pointer'></img> </a>
        </NavLink>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1 font-bold ">
          <li>
            <NavLink to={"/sofa"} ><LuSofa></LuSofa>SOFA</NavLink>
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
      </div>
      <div className="navbar-end">

      </div>
    </div>
  )
}

export default Navbar