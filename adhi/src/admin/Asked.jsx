import React, { useEffect, useState } from 'react'
import Sidenav from './Sidenav';
import axios from 'axios';
import moment from 'moment';
function Asked() {
  const [customerRequests, setCustomerRequests] = useState([]);
  const [searchDate, setSearchDate] = useState('');

  useEffect(() => {
      // Fetch customer requests from the server
      const fetchCustomerRequests = async () => {
          try {
              const response = await axios.get('https://api.adhiinteriors.com/getasks'); 
              setCustomerRequests(response.data);
          } catch (error) {
              console.error('Error fetching customer requests:', error);
          }
      };

      // Call the fetchCustomerRequests function
      fetchCustomerRequests();
  }, []);
  const handleSearch = () => {
      // Filter customer requests based on the search date
      const filteredRequests = customerRequests.filter((request) =>
          new Date(request.createdAt).toLocaleDateString().includes(searchDate)
      );
      setCustomerRequests(filteredRequests);
  };
  return (
    <div className="flex flex-col md:flex-row">
  <header className="md:w-1/4">
   <Sidenav></Sidenav>
  </header>
  <div className="md:w-3/4 px-4 py-6">
    <h1 className="text-lg font-semibold mb-4">Customer Requests</h1>
    <div className="mb-4">
      <label htmlFor="search" className="mr-2">Enter the date:</label>
      <input
        type="text"
        id="search"
        value={searchDate}
        onChange={(e) => setSearchDate(e.target.value)}
        className="border border-gray-300 rounded-md px-3 py-2"
      />
      <button onClick={handleSearch} className="btn bg-pink-500 rounded-md mb-2 mt-2 px-4 py-2 ml-3">
        Search
      </button>
    </div>
    <div className="overflow-x-auto">
      <table className="table-auto w-full">
        <thead>
          <tr>
            <th className="px-4 py-2">Req-On</th>
            <th className="px-4 py-2">Name</th>
            <th className="px-4 py-2">Phone Number</th>
            <th className="px-4 py-2">Email</th>
          </tr>
        </thead>
        <tbody>
          {customerRequests.map((request) => (
            <tr key={request._id}>
              <td className="px-4 py-2">{moment(request.createdAt).format('YYYY-MM-DD HH:mm:ss')}</td>
              <td className="px-4 py-2">{request.name}</td>
              <td className="px-4 py-2">{request.phone}</td>
              <td className="px-4 py-2">{request.gmail}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  </div>
</div>

  )
}

export default Asked