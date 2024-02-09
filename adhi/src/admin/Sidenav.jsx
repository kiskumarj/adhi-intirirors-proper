import React from 'react'
import "./admin.css"
function Sidenav() {
    return (
        <div className='main-side'>
            <a href='/admin'>Admin</a>
            <a href='/createproduct'>createproduct</a>
            <a href='/prodlist'>products</a>
            <a href='/uploadimg'>Uploadimage</a>
            <a href='/asked'>Asking</a>
            <a href='/orders'>orders</a>
            <a href='/createcategory'>createcategory</a>
            <a href='/booked'>Booked</a>

        </div>
    )
}

export default Sidenav