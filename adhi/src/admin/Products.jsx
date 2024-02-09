import React, { useEffect, useState } from 'react';
import "./admin.css";
import Sidenav from './Sidenav';
import axios from 'axios';

function Products() {
  const [products, setProducts] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');

  useEffect(() => {
    axios.get('http://localhost:5000/products')
      .then((response) => {
        setProducts(response.data);
      })
      .catch((error) => {
        console.error('Error fetching products', error);
      });
  }, []);
  const handleDelete = async (productId) => {
    // Show a confirmation dialog before deleting
    const userConfirmed = window.confirm('Are you sure you want to delete this product?');

    if (!userConfirmed) {
      return;
    }

    try {
      await axios.delete(`http://localhost:5000/products/${productId}`);
      setProducts(prevProducts => prevProducts.filter(product => product._id !== productId));
      console.log('Product deleted successfully');
    } catch (error) {
      console.error('Error deleting product', error);
    }
  };
  const filteredProducts = products.filter(product =>
    product.modelno.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div>
      <header className="admin-header">
        <Sidenav />
      </header>
      <div className="product-list-container">
        <h2 className="product-list-heading">Product List</h2>
        <input
          type="text"
          placeholder="Search by Model No"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
        <table className="product-table">
          <thead>
            <tr>
              <th>ID</th>
              <th>Image</th>
              <th>Model No</th>
              <th>Dimensions</th>
              <th>Made Up Of</th>
              <th>Warranty ID</th>
              <th>Category ID</th>
              <th>Subcategory ID</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {filteredProducts.map(product => (
              <tr key={product._id}>
                <td>{product._id}</td>
                <td>
                  <img src={product.addimage} width={100} height={100} alt={`Product ${product._id}`} />
                </td>
                <td>{product.modelno}</td>
                <td>{product.dimentions}</td>
                <td>{product.madeupof}</td>
                <td>{product.warrantyId.month}</td>
                <td>{product.categoryId.name}</td>
                <td>{product.subcategoryId.name}</td>
                <td>
                  <button onClick={() => handleEdit(product._id)}>Edit</button>
                  <button onClick={() => handleDelete(product._id)}>Delete</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default Products;
