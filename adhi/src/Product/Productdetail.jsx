import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import Navbar from '../Page/Navbar'
function Productdetail() {
    const { productId } = useParams()
    const [product, setproduct] = useState()
    const navigate = useNavigate()
    useEffect(() => {
        axios.get(`https://api.adhiinteriors.com/products/${productId}`)
            .then((res) => {

                setproduct(res.data)
                console.log(productId)

            })
            .catch((error) => {
                console.error('api error', error)
            })
    }, [productId])
    const handleEnquiryClick = () => {
        if (product) {
            navigate(`/inquiry-form?model=${product.modelno}&subcategory=${product.subcategoryId.name}`);
        }
    };

    return (
        <div className="div">
             <header>
                <Navbar />
            </header><br></br>
        <div className="flex flex-col lg:flex-row items-center justify-center mt-20 ml-4">
    {/* Product Image */}
    <div className="lg:w-1/2 lg:mr-8">
        {product ? (
            <img src={product.addimage} alt={product.modelno} className="single-img rounded-lg shadow-md w-96 h-96" />
        ) : (
            <p>Loading...</p>
        )}
    </div>

    {/* Product Details */}
    <div className="lg:w-1/2 px-4 py-2">
        {product ? (
            <div className="text-left">
                <h2 className="text-2xl font-bold mb-4">{product.modelno}</h2>
                <div className="flex flex-col mb-4 justify-between">
                    <p className="text-gray-700 text-lg">Subcategory: {product.subcategoryId.name}</p>
                    <p className="text-gray-700 text-lg">Warranty: {product.warrantyId.month}</p>
                    <p className="text-gray-700 text-lg">Material: {product.madeupof}</p>
                    <p className="text-gray-700 text-lg">Dimensions: {product.dimentions}</p>
                </div>
                <button className="btn bg-pink-500 rounded-badge px-4 py-2 hover:translate-y-4 flex" onClick={handleEnquiryClick} >Ask for Details</button>
            </div>
        ) : (
            <p>Loading...</p>
        )}
    </div>
</div><br></br>
<footer className="footer p-10 bg-base-300 text-base-content">
  <nav>
    <h6 className="footer-title">Services</h6> 
    <a className="link link-hover">Branding</a>
    <a className="link link-hover">Design</a>
    <a className="link link-hover">Marketing</a>
    <a className="link link-hover">Advertisement</a>
  </nav> 
  <nav>
    <h6 className="footer-title">Company</h6> 
    <a className="link link-hover">About us</a>
    <a className="link link-hover">Contact</a>
    <a className="link link-hover">Jobs</a>
    <a className="link link-hover">Press kit</a>
  </nav> 
  <nav>
    <h6 className="footer-title">Social</h6> 
    <div className="grid grid-flow-col gap-4">
      <a><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" className="fill-current"><path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"></path></svg></a>
      <a><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" className="fill-current"><path d="M19.615 3.184c-3.604-.246-11.631-.245-15.23 0-3.897.266-4.356 2.62-4.385 8.816.029 6.185.484 8.549 4.385 8.816 3.6.245 11.626.246 15.23 0 3.897-.266 4.356-2.62 4.385-8.816-.029-6.185-.484-8.549-4.385-8.816zm-10.615 12.816v-8l8 3.993-8 4.007z"></path></svg></a>
      <a><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" className="fill-current"><path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z"></path></svg></a>
    </div>
  </nav>
</footer>
</div>
    )
    
}

export default Productdetail