import React from 'react'
import { TbError404 } from "react-icons/tb";
import { NavLink } from 'react-router-dom';
function Error() {
  return (
    <div className="flex flex-col items-center justify-center h-screen">
  <TbError404 size={100} className="mb-4" />

  <h1 className="text-4xl font-bold mb-4">Error 404</h1>

  <NavLink to={'/'} className="text-blue-500 hover:text-blue-700">
    <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline">Go to Home</button>
  </NavLink>
</div>

  )
}

export default Error