import axios from 'axios';
import React, { useEffect, useState } from 'react'
import Sidenav from './Sidenav';
function Createcaregory() {
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
      .get('https://api.adhiinteriors.com/categories')
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
  return (
    <div className="flex flex-col md:flex-row ">
  <header className="z-50">
    <Sidenav />
  </header>
  <div className="md:w-3/4 flex justify-center items-center flex-col relative lg:left-52">
    <h2 className="text-lg font-semibold mt-6">Create a New Category or Subcategory</h2>
    <form onSubmit={handleCategorySubmit} className="mt-4 w-full max-w-md md:max-w-lg">
      <div className="mb-4">
        <label className="block">Category Name:</label>
        <input
          type="text"
          name="categoryName"
          value={formData.categoryName}
          onChange={handleChange}
          className="input-style"
          required
        />
      </div>
      <button type="submit" className="btn bg-pink-500 rounded-md mb-2 mt-2 px-4 py-2">
        Add Category
      </button>
    </form>
    <form onSubmit={handleCategorySubmit} className="mt-4 w-full max-w-md md:max-w-lg">
      <div className="mb-4">
        <label className="block">Subcategory Name:</label>
        <input
          type="text"
          name="subcategoryName"
          value={formData.subcategoryName}
          onChange={handleChange}
          className="input-style "
          required
        />
      </div>
      <button type="submit" className="btn bg-pink-500 rounded-md mb-2 mt-2 px-4 py-2">
        Add Subcategory
      </button>
    </form>
    <p className="mt-4">{message}</p>
  </div>
</div>

  )
}

export default Createcaregory