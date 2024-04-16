import React, { useEffect, useState } from 'react'
import Sidenav from './Sidenav'
import axios from 'axios';
function Createproduct() {
  const [productdata, setproductdata] = useState({
    addimage: '',
    modelno: '',
    dimentions: '',
    warrantyId: '',
    madeupof: '',
    categoryId: '',
    subcategoryId: '',
  })
  const [categories, setCategories] = useState([]);
  const [subcategories, setSubcategories] = useState([]);
  const [warranties, setwarranties] = useState([])
  const handlechange = (e) => {
    const { name, value } = e.target
    setproductdata({ ...productdata, [name]: value })

  }
  const handlepost = (a) => {
    a.preventDefault()
    axios.post('https://api.adhiinteriors.com/product', productdata)
      .then((response) => {
        console.log('Product added successfully:', response.data);
        alert("product Created succesfully")
      })
      .catch((error) => {
        console.error('Error adding product:', error);
      });

  }
  useEffect(() => {
    // Fetch categories
    axios.get('https://api.adhiinteriors.com/categories')
      .then((response) => {
        setCategories(response.data);
      })
      .catch((error) => {
        console.error('Error fetching categories:', error);
      });
    axios.get('https://api.adhiinteriors.com/subcategories')
      .then((response) => {
        setSubcategories(response.data);
      })
      .catch((error) => {
        console.error('Error fetching categories:', error);
      });
    axios.get('https://api.adhiinteriors.com/warranty')
      .then((response) => {
        setwarranties(response.data);
      })
      .catch((error) => {
        console.error('Error fetching categories:', error);
      });
  }, []);
  return (
    <div className="flex flex-col md:flex-row ">
    {/* Sidenav */}
    <header className="md:w-1/4">
      <Sidenav />
    </header>
  
    {/* Form */}
    <div className="flex justify-center">
    <form onSubmit={handlepost} className="md:w-3/4 p-4 ">
      <label className="block mb-2">Add Image</label>
      <input
        type="url"
        id="addimage"
        placeholder="URL only"
        name="addimage"
        value={productdata.addimage}
        onChange={handlechange}
        className="input-style mb-4 border rounded-md p-2 w-full md:w-auto"
        required
      />
  
      <label className="block mb-2">Model No</label>
      <input
        type="text"
        id="modelno"
        placeholder="Give Model No"
        name="modelno"
        value={productdata.modelno}
        onChange={handlechange}
        className="input-style mb-4 border rounded-md p-2 w-full md:w-auto"
        required
      />
  
      <label className="block mb-2">Add Dimensions</label>
      <input
        type="text"
        id="dimensions"
        placeholder="Give Dimensions"
        name="dimensions"
        value={productdata.dimentions}
        onChange={handlechange}
        className="input-style mb-4 border rounded-md p-2 w-full md:w-auto"
        required
      />
  
      <label className="block mb-2">Add Warranty</label>
      <select
        id="warrantyId"
        name="warrantyId"
        onChange={handlechange}
        value={productdata.warrantyId}
        className="input-style mb-4 border rounded-md p-2 w-full md:w-auto"
        required
      >
        <option value="">Select a Warranty</option>
        {warranties.map((warranty) => (
          <option key={warranty._id} value={warranty._id}>
            {warranty.month} Month Warranty
          </option>
        ))}
      </select>
  
      <label className="block mb-2">Made of</label>
      <input
        type="text"
        id="madeupof"
        placeholder="Material Used"
        name="madeupof"
        value={productdata.madeupof}
        onChange={handlechange}
        className="input-style mb-4 border rounded-md p-2 w-full md:w-auto"
        required
      />
  
      <label className="block mb-2">Category</label>
      <select
        id="categoryId"
        name="categoryId"
        onChange={handlechange}
        value={productdata.categoryId}
        className="input-style mb-4 border rounded-md p-2 w-full md:w-auto"
        required
      >
        <option value="">Select a Category</option>
        {categories.map((category) => (
          <option key={category._id} value={category._id}>
            {category.name}
          </option>
        ))}
      </select>
  
      <label className="block mb-2">Subcategory</label>
      <select
        id="subcategoryId"
        name="subcategoryId"
        onChange={handlechange}
        value={productdata.subcategoryId}
        className="input-style mb-4 border rounded-md p-2 w-full md:w-auto"
        required
      >
        <option value="">Select a Subcategory</option>
        {subcategories.map((subcategory) => (
          <option key={subcategory._id} value={subcategory._id}>
            {subcategory.name}
          </option>
        ))}
      </select><br></br>
  
      <button type="submit" className="btn bg-pink-500 rounded-badge px-4 py-2 ">
        POST
      </button>
    </form>
    </div>
  </div>
  
  )
}

export default Createproduct