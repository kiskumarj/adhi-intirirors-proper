import React, { useEffect, useState } from 'react'
import Navbar from '../Page/Navbar'
import axios from 'axios';
import homefur from '../mycon/homefur.jpg'  
import { Link } from 'react-router-dom';
function Homefurniture() {
  const [products, setProducts] = useState([]);
  const [allProducts, setAllProducts] = useState([]);
  const [subcategories, setSubcategories] = useState([]);
  

  useEffect(() => {
    // Fetch all products initially
    axios.get('https://api.adhiinteriors.com/products/sofa/hf:652290ad7919a078826d08c4')
      .then((response) => {
        setProducts(response.data);
        setAllProducts(response.data);
        
        // Extract unique subcategories from the products
        const uniqueSubcategories = [...new Set(response.data.map(product => product.subcategoryId.name))];
        setSubcategories(uniqueSubcategories);
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);

  function handleSubcategoryFilter(subcategoryName) {
    if (subcategoryName === 'all') {
      
      setProducts(allProducts);
    } else {
      
      const filtered = allProducts.filter(product => product.subcategoryId.name === subcategoryName);
      setProducts(filtered);
    }
  }

  return (
    <div className='office-main'>
      <header><Navbar></Navbar></header>
      <h1 className='officeprod'>HOME FURNITURE</h1>
      <div className='banner'>
       <img src={homefur} className='imgb'></img>
      </div><br></br>
     

      {/* Subcategory buttons */}
      <div className='office-button'>
        <button value="all" onClick={() => handleSubcategoryFilter('all')} className='all-office'>All</button>
        {subcategories.map(subcategory => (
          <button key={subcategory} value={subcategory} onClick={() => handleSubcategoryFilter(subcategory)} className='button-filt'>
            {subcategory}
          </button>
        ))}
      </div><br></br>
      
       <div className='product-container-office'>
      
      {products.map((product) => (
        <div key={product._id} className='prod-card'>
        <Link to={`/product/${product._id}`}>
        <img src={product.addimage} alt="" width={200} height={200} className='img-office'   />
        <p>{product.modelno}</p>
        <p>{product.subcategoryId.name}</p>
        </Link>
      </div>
      ))}
      </div>
    </div>
  )
}

export default Homefurniture