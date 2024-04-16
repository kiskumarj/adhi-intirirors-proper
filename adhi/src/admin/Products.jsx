import React, { useEffect, useState } from 'react'
import Sidenav from './Sidenav'
import axios from 'axios';
function Products() {
  const [products, setProducts] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');

  useEffect(() => {
    axios.get('https://api.adhiinteriors.com/products')
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
      await axios.delete(`https://api.adhiinteriors.com/products/${productId}`);
      setProducts(prevProducts => prevProducts.filter(product => product._id !== productId));
      console.log('Product deleted successfully');
    } catch (error) {
      console.error('Error deleting product', error);
    }
  };
  useEffect(() => {
    const interval = setInterval(products, 5000);
    return () => clearInterval(interval);
  }, [])
  const filteredProducts = products.filter(product =>
    product.modelno.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="flex flex-col md:flex-row">
  <header className="admin-header md:w-1/4">
    <Sidenav />
  </header>
  <div className="product-list-container md:w-3/4 px-4 py-6">
    <h2 className="product-list-heading text-lg font-semibold mb-4">Product List</h2>
    <input
      type="text"
      placeholder="Search by Model No"
      value={searchTerm}
      onChange={(e) => setSearchTerm(e.target.value)}
      className="border border-gray-300 rounded-md px-3 py-2 mb-4 w-full md:w-auto"
    />
    <div className="overflow-x-auto">
      <table className="table-auto w-full">
        <thead>
          <tr>
            <th className="px-4 py-2">ID</th>
            <th className="px-4 py-2">Image</th>
            <th className="px-4 py-2">Model No</th>
            <th className="px-4 py-2">Dimensions</th>
            <th className="px-4 py-2">Made Up Of</th>
            <th className="px-4 py-2">Warranty ID</th>
            <th className="px-4 py-2">Category ID</th>
            <th className="px-4 py-2">Subcategory ID</th>
            <th className="px-4 py-2">Actions</th>
          </tr>
        </thead>
        <tbody>
          {filteredProducts.map(product => (
            <tr key={product._id}>
              <td className="px-4 py-2">{product._id}</td>
              <td className="px-4 py-2">
                <img src={product.addimage} width={100} height={100} alt={`Product ${product._id}`} />
              </td>
              <td className="px-4 py-2">{product.modelno}</td>
              <td className="px-4 py-2">{product.dimentions}</td>
              <td className="px-4 py-2">{product.madeupof}</td>
              <td className="px-4 py-2">{product.warrantyId.month}</td>
              <td className="px-4 py-2">{product.categoryId.name}</td>
              <td className="px-4 py-2">{product.subcategoryId.name}</td>
              <td className="px-4 py-2">
                <button onClick={() => handleEdit(product._id)} className="text-blue-500 hover:text-blue-700 mr-2">Edit</button>
                <button onClick={() => handleDelete(product._id)} className="text-red-500 hover:text-red-700">Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  </div>
</div>
  )
}

export default Products