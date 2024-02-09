import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Sidenav from './Sidenav';

function Createcategory() {
  const [formData, setFormData] = useState({
    categoryName: '',
    subcategoryName: '',
    selectedCategoryId: '',
  });
    document.body.style.display ="flex"
  const [categories, setCategories] = useState([]);
  const [message, setMessage] = useState('');

  useEffect(() => {
    // Fetch categories from your Express server
    axios
      .get('http://localhost:5000/categories')
      .then((response) => {
        setCategories(response.data);
      })
      .catch((error) => {
        console.error('Error fetching categories:', error);
      });
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleCategorySubmit = (e) => {
    e.preventDefault();

    // Send a POST request to create a new category
    axios
      .post('http://localhost:5000/categories', {
        name: formData.categoryName,
      })
      .then((response) => {
        setMessage('Category added successfully.');
        // Clear the category input field
        setFormData({ ...formData, categoryName: '' });
      })
      .catch((error) => {
        console.error('Error adding category:', error);
      });
  };

  const handleSubcategorySubmit = (e) => {
    e.preventDefault();

    // Send a POST request to create a new subcategory under the selected category
    axios
      .post('http://localhost:5000/subcategories', {
        name: formData.subcategoryName,
        categoryId: formData.selectedCategoryId,
      })
      .then((response) => {
        setMessage('Subcategory added successfully.');
        // Clear the subcategory input field
        setFormData({ ...formData, subcategoryName: '' });
      })
      .catch((error) => {
        console.error('Error adding subcategory:', error);
      });
  };

  return (
    <div>
        <header>
        <Sidenav></Sidenav>
        </header>
      <h2 className='createcate'>Create a New Category or Subcategory</h2>
      <form onSubmit={handleCategorySubmit}>
        <div>
          <label>Category Name:</label><br></br>
          <input
            type="text"
            name="categoryName"
            value={formData.categoryName}
            onChange={handleChange}
            required
          />
        </div>
        <button type="submit">Add Category</button>
      </form>
      <form onSubmit={handleSubcategorySubmit}>
        <div>
          <label>Subcategory Name:</label><br></br>
          <input
            type="text"
            name="subcategoryName"
            value={formData.subcategoryName}
            onChange={handleChange}
            required
          />
        </div>
        <button type="submit">Add Subcategory</button>
      </form>
      <p>{message}</p>
    </div>
  );
}

export default Createcategory;
