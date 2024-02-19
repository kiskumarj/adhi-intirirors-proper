import axios from 'axios'
import React, { useEffect, useState } from 'react'
import Navbar from '../Page/Navbar';
import { useNavigate, useParams } from 'react-router-dom'
import "./proddetail.css"
import Footer from '../Page/Footer';
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
        <div>
            <header>
                <Navbar />
            </header>
            <h1></h1>

            {product ? (
                <div>
                    <img src={product.addimage} alt={product.modelno}  className='single-img'/>
                    <div className='single-detail'>
                    <h3>{product.modelno}</h3><br></br>
                    <div className='single-fornt'>
                    <p>{product.subcategoryId.name}</p><br></br>
                    <p>{product.warrantyId.month}</p><br></br>
                    <p>{product.madeupof}</p><br></br>
                    <p>{product.dimentions}</p><br></br>
                    </div>
                    <button className='single-but' onClick={handleEnquiryClick}>Ask</button>
                    </div>
                </div>
            ) : (
                <p>Loading...</p>
            )}<br></br>
            <Footer></Footer>
        </div>
    )
}

export default Productdetail