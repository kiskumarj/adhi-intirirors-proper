import React from 'react'
import '../Product/book.css'
import { TbError404 } from "react-icons/tb";
import { NavLink } from 'react-router-dom';

function Error() {
  document.body.style.display = "flex"
  return (
    <div>
        <TbError404 size={100} />

        <h1>Error 404</h1>
        <NavLink to={'/'}>
        <button className='errorto'>got to home</button>
        </NavLink>
    </div>
  )
}

export default Error