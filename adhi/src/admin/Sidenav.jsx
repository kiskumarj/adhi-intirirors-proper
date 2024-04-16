import React from 'react'

function Sidenav() {
  return (
    <div className="drawer lg:drawer-open lg:h-full">
  <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
  <div className="drawer-content flex flex-col items-center justify-center">
    {/* Page content here */}
    <label htmlFor="my-drawer-2" className="btn btn-outline drawer-button w-full rounded-none lg:hidden">Open drawer</label>
  
  </div> 
  <div className="drawer-side">
    <label htmlFor="my-drawer-2" aria-label="close sidebar" className="drawer-overlay"></label> 
    <ul className="menu p-4 w-80 min-h-full bg-base-200 text-base-content">
      {/* Sidebar content here */}
      <li><a href='/admin'>Admin</a></li>
      <li><a href='/createproduct'>createproduct</a></li>
      <li> <a href='/prodlist'>products</a></li>
      <li> <a href='/uploadimg'>Uploadimage</a></li>
      <li><a href='/asked'>Asking</a></li>
      <li><a href='/orders'>orders</a></li>
      <li> <a href='/createcategory'>createcategory</a></li>
      <li> <a href='/booked'>Booked</a></li>
    </ul>
  
  </div>
</div>
  )
}

export default Sidenav