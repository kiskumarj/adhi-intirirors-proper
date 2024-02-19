import axios from 'axios';
import React, { useEffect, useState } from 'react'
import Sidenav from './Sidenav';
function Createproduct() {
    document.body.style.display = 'flex'
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
        <div>
            <header>
                <Sidenav></Sidenav>
            </header>
            <form onSubmit={handlepost}>
                <label>add image</label><br></br>
                <input type='url' id='addimage' placeholder='url only' name='addimage' value={productdata.addimage} onChange={handlechange} required></input><br></br>
                <label>model no</label><br></br>
                <input type='text' id='modelno' placeholder='give moddel no' name='modelno' value={productdata.modelno} onChange={handlechange} required ></input><br></br>
                <label>add Dimentions</label><br></br>
                <input type='text' id='dimentions' placeholder='give dimentions' name='dimentions' value={productdata.dimentions} onChange={handlechange} required></input><br></br>
                <label>add warranty</label><br></br>
                <select
                    id="warrantyId"
                    name="warrantyId"
                    onChange={handlechange}
                    value={productdata.warrantyId}
                    required
                >
                    <option value="">Select a warranty</option>
                    {warranties.map((warranty) => (
                        <option key={warranty._id} value={warranty._id}>
                            {warranty.month} Month Warranty
                        </option>
                    ))}
                </select><br></br>
                <label>madupof</label><br></br>
                <input type='text' id='madeupof' placeholder='matireal used' name='madeupof' value={productdata.madeupof} onChange={handlechange} required></input><br></br>
                <label>category</label><br></br>
                <select
                    id="categoryId"
                    name="categoryId"
                    onChange={handlechange}
                    value={productdata.categoryId}
                    required
                >
                    <option value="">Select a category</option>
                    {categories.map((category) => (
                        <option key={category._id} value={category._id}>
                            {category.name}
                        </option>
                    ))}
                </select><br></br>
                <label>subcategory</label><br></br>
                <select
                    id="subcategoryId"
                    name="subcategoryId"
                    onChange={handlechange}
                    value={productdata.subcategoryId}
                    required
                >
                    <option value="">Select a subcategory</option>
                    {subcategories.map((subcategory) => (
                        <option key={subcategory._id} value={subcategory._id}>
                            {subcategory.name}
                        </option>
                    ))}
                </select><br></br>
                <button type='submit'>POST</button>
            </form>
        </div>
    )
}

export default Createproduct