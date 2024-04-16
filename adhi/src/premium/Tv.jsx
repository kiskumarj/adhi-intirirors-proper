import axios from 'axios';
import React, { useEffect, useState } from 'react'
import Navbar from '../Page/Navbar';
import { Link } from 'react-router-dom';
import tv from '../mycon/tv.png'
function Tv() {
  const [presofa, setpresofa] = useState([])
  useEffect(() => {
    // Fetch categories from your Express server
    axios
      .get('https://api.adhiinteriors.com/products/most-sell/tv:65a31015e082b4eb1af5154e')
      .then((response) => {
        setpresofa(response.data);
      })
      .catch((error) => {
        console.error('Error fetching categories:', error);
      });
  }, []);
  return (
    <div className="pre-sofa-main">
      <header>
        <Navbar />
      </header><br></br>
      <div className="flex flex-col md:flex-row  ml-5 mt-20">
        {/* Title */}
        <div className="md:w-1/2 md:mr-4 text-center md:text-left ">
          <h1 className="text-3xl font-bold mb-2 w-fit">Tv case</h1>
          <p className="text-gray-500 w-fit">Most selling</p>
          <div className="w-16 h-16 mb-10">
            <img src={tv} className="w-16 h-16 relative left-48 bottom-14" alt="Bed" />
          </div>
        </div>

      </div>

      {/* Products */}
      <div className="flex flex-wrap justify-center mt-4">
        {presofa.map((product) => (
          <div key={product._id} className="prod-card m-4">
            <Link to={`/product/${product._id}`}>
            <img src={product.addimage} alt="" className="w-48 h-48 md:w-64 md:h-64 object-cover rounded-lg shadow-md" />
            <p className="text-center mt-2">{product.modelno}</p>
            <p className="text-center">{product.subcategoryId.name}</p>
            </Link>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Tv