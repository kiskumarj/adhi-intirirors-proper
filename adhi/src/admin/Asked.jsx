import React, { useEffect, useState } from 'react'
import Sidenav from './Sidenav'
import axios from 'axios';
import moment from 'moment';
function Asked() {
  document.body.style.display = 'flex';
  const [customerRequests, setCustomerRequests] = useState([]);
  const [searchDate, setSearchDate] = useState('');

  useEffect(() => {
      // Fetch customer requests from the server
      const fetchCustomerRequests = async () => {
          try {
              const response = await axios.get('http://localhost:5000/getasks'); // Replace with your API endpoint
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
    <div className="product-table">
            <header>
                <Sidenav />
            </header>
            <h1>Asked</h1>
            <div>
                <label htmlFor="search">enter the date</label>
                <input
                    type="text"
                    id="search"
                    value={searchDate}
                    onChange={(e) => setSearchDate(e.target.value)}
                />
                <button onClick={handleSearch}>enter</button>
            </div>
            <table className="product-table">
                <thead>
                    <tr>
                        <th>req-on</th>
                        <th>Name</th>
                        <th>Phone Number</th>
                        
                        <th>Email</th>
                        

                    </tr>
                </thead>
                <tbody>
                    {customerRequests.map((request) => (
                        <tr key={request._id}>
                            <td>{moment(request.createdAt).format('YYYY-MM-DD HH:mm:ss')}</td>
                            <td>{request.name}</td>
                            <td>{request.phone}</td>
                            <td>{request.gmail}</td>

                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
  )
}

export default Asked