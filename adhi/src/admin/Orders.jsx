import axios from 'axios';
import React, { useEffect, useState } from 'react'
import Sidenav from './Sidenav';
import moment from 'moment';
function Orders() {
  const [requests, setRequests] = useState([]);
  const [newInquiryAlert, setNewInquiryAlert] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const [filteredRequests, setFilteredRequests] = useState([]);

  useEffect(() => {
    // Fetch data from the server
    const fetchRequests = async () => {
      try {
        const response = await axios.get('https://api.adhiinteriors.com/get-inquiries');
        setRequests(response.data);
        console.log(requests);
      } catch (error) {
        console.error('Error fetching requests:', error);
      }
    };

    // Call the fetchRequests function
    fetchRequests();
  }, []); // Empty dependency array to run once on component mount

  useEffect(() => {
    // Check if there are new requests and show an alert
    const newRequests = requests.filter((request) => !request.seen);
    if (newRequests.length > 0) {
      setNewInquiryAlert(true);
    }
  }, [requests]);

  useEffect(() => {
    // Filter requests based on the search query
    const filtered = requests.filter((request) =>
      request.customerDetails.createdAt.includes(searchQuery)
    );
    setFilteredRequests(filtered);
  }, [searchQuery, requests]);

  const markAsSeen = async (requestId) => {
    // Update the server that the request has been seen
    try {
      await axios.patch(`http://localhost:5000/customer-requests/${requestId}`, { seen: true });
      setNewInquiryAlert(false);
    } catch (error) {
      console.error('Error marking request as seen:', error);
    }
  };
  return (
    <div className="flex flex-col md:flex-row">
    <header className="md:w-1/4">
      <Sidenav />
    </header>
    <div className="md:w-3/4 px-4 py-6">
      <h2 className="text-lg font-semibold mb-4">Orders</h2>
  
      {newInquiryAlert && (
        <div className="alert alert-info" role="alert">
          new inquire came
        </div>
      )}
  
      <div className="mb-4">
        <label htmlFor="search">Today's Requests:</label>
        <input
          type="text"
          id="search"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          className="border border-gray-300 rounded-md px-3 py-2 mt-4"
        />
      </div>
  
      <div className="overflow-x-auto">
        <table className="table-auto w-full">
          <thead>
            <tr>
              <th className="px-4 py-2">Req-On</th>
              <th className="px-4 py-2">Model Number</th>
              <th className="px-4 py-2">Subcategory</th>
              <th className="px-4 py-2">Customer Name</th>
              <th className="px-4 py-2">Email</th>
              <th className="px-4 py-2">Phone</th>
              <th className="px-4 py-2">Message</th>
              <th className="px-4 py-2">Actions</th>
            </tr>
          </thead>
          <tbody>
            {(searchQuery ? filteredRequests : requests).map((request) => (
              <tr key={request._id} className={!request.seen ? 'new-request' : ''}>
                <td className="px-4 py-2">{moment(request.customerDetails.createdAt).format('YYYY-MM-DD HH:mm:ss')}</td>
                <td className="px-4 py-2">{request.modelNumber}</td>
                <td className="px-4 py-2">{request.subcategory}</td>
                <td className="px-4 py-2">{request.customerDetails.name}</td>
                <td className="px-4 py-2">{request.customerDetails.email}</td>
                <td className="px-4 py-2">{request.customerDetails.phone}</td>
                <td className="px-4 py-2">{request.customerDetails.inquiry}</td>
                <td className="px-4 py-2">
                  {!request.seen && (
                    <button onClick={() => markAsSeen(request._id)} className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                      Mark as Seen
                    </button>
                  )}
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

export default Orders