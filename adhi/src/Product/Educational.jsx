import  { useEffect, useState } from 'react'
import educ from '../mycon/educ.jpg'
import axios from 'axios';
import Navbar from '../Page/Navbar';
import { Link } from 'react-router-dom';
function Educational() {
    const [products, setProducts] = useState([]);
    const [allProducts, setAllProducts] = useState([]);
    const [subcategories, setSubcategories] = useState([]);
    useEffect(() => {
      // Fetch all products initially
      axios.get('https://api.adhiinteriors.com/products/sofa/ht:652290c17919a078826d08c6')
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
    <header>
        <Navbar />
    </header>
    <br />
    <h1 className='officeprod text-center text-2xl md:text-3xl lg:text-4xl'>SOFA'S</h1>
  
    <div className="w-full h-auto rounded-2xl">
        <img src={educ} className='w-full h-auto rounded-2xl sm:h-auto mt-10' alt="Sofa Banner" />
    </div>
    <br />
    {/* Subcategory buttons */}
    <div className='office-button flex justify-center snap-start'>
        <button value="all" onClick={() => handleSubcategoryFilter('all')} className='btn bg-pink-500 rounded-badge px-4 py-2 hover:translate-y-4 mr-4'>All</button>
        {subcategories.map(subcategory => (
            <button key={subcategory} value={subcategory} onClick={() => handleSubcategoryFilter(subcategory)} className='btn bg-pink-500 rounded-badge px-4 py-2 hover:translate-y-4 flex mr-4'>
                {subcategory}
            </button>
        ))}
    </div>
    <br />
    <div className='product-container-office grid grid-cols-1 sm:justify-between md:grid-cols-2 lg:grid-cols-4 gap-4 '>
        {products.map((product) => (
            <div key={product._id} className="border rounded-lg lg:bg-slate-300 p-4 hover:shadow-md lg:w-52 sm:w-full sm:bg-slate-100 ">
                <Link to={`/product/${product._id}`}>
                    <img src={product.addimage} alt="" className='img-office mx-auto rounded-2xl hover:shadow-2xl delay-300 ' />
                    <p className="text-center font-semibold">{product.modelno}</p>
                    <p className="text-center">{product.subcategoryId.name}</p>
                </Link>
            </div>
        ))}
    </div>
</div>
  )
}

export default Educational