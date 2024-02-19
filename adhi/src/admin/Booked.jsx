import React, { useEffect, useState } from 'react';
import Sidenav from './Sidenav';
import axios from 'axios';
import moment from 'moment';
function Booked() {
    document.body.style.display = 'flex';
    const [customerRequests, setCustomerRequests] = useState([]);
    const [searchDate, setSearchDate] = useState('');

    useEffect(() => {
        // Fetch customer requests from the server
        const fetchCustomerRequests = async () => {
            try {
                const response = await axios.get('https://api.adhiinteriors.com/getcustomerrequests'); 
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
            <h1>Booked</h1>
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
                        <th>City</th>
                        <th>Email</th>
                        <th>Description</th>

                    </tr>
                </thead>
                <tbody>
                    {customerRequests.map((request) => (
                        <tr key={request._id}>
                            <td>{moment(request.createdAt).format('YYYY-MM-DD HH:mm:ss')}</td>
                            <td>{request.name}</td>
                            <td>{request.phoneNumber}</td>
                            <td>{request.city}</td>
                            <td>{request.email}</td>
                            <td>{request.description}</td>

                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
}

export default Booked;
