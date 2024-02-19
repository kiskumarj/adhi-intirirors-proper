import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './admin.css'; // Assuming this is your CSS file
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
    <div className='product-list-container'>
      <header>
        <Sidenav />
      </header>
      <h2>Orders</h2>

      {newInquiryAlert && (
        <div className="alert alert-info" role="alert">
          new inquire came
        </div>
      )}

      <div>
        <label htmlFor="search">today's req</label>
        <input
          type="text"
          id="search"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
        />
      </div>

      <table className="product-table">
        <thead>
          <tr>
            <th>req-on</th>
            <th>Model Number</th>
            <th>Subcategory</th>
            <th>Customer Name</th>
            <th>Email</th>
            <th>Phone</th>
            <th>Message</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {(searchQuery ? filteredRequests : requests).map((request) => (
            <tr key={request._id} className={!request.seen ? 'new-request' : ''}>
              <td>{moment(request.customerDetails.createdAt).format('YYYY-MM-DD HH:mm:ss')}</td>
              <td>{request.modelNumber}</td>
              <td>{request.subcategory}</td>
              <td>{request.customerDetails.name}</td>
              <td>{request.customerDetails.email}</td>
              <td>{request.customerDetails.phone}</td>
              <td>{request.customerDetails.inquiry}</td>
              <td>
                {!request.seen && (
                  <button onClick={() => markAsSeen(request._id)} className='mkse'>Mark as Seen</button>
                )}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default Orders;
