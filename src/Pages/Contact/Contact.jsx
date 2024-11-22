import React, { useState, useEffect } from 'react';
import { Paper, Typography} from '@mui/material';
import { DataGrid } from '@mui/x-data-grid';
import Navbar from '../../Components/Navbar/Navbar';
import './Contact.css';

const Contact = () => {
  const paginationModel = { page: 0, pageSize: 5 };

  // Define state for storing fetched data and loading state
  const [rows, setRows] = useState([]);
  const [loading, setLoading] = useState(true);

  // Define columns for the DataGrid
  const columns = [
    { field: 'id', headerName: 'ID', width: 150 },
    { field: 'name', headerName: 'Name', width: 200 },
    { field: 'username', headerName: 'Username', width: 200 },
    { field: 'email', headerName: 'Email', width: 250 },
    { field: 'address', headerName: 'Address', width: 300 },
    { field: 'phone', headerName: 'Phone', width: 200 },
    { field: 'website', headerName: 'Website', width: 200 },
    { field: 'company', headerName: 'Company', width: 250 }
  ];

  // Fetch data when the component mounts
  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then((response) => response.json())
      .then((data) => {
        // Prepare the data in a suitable format for DataGrid
        const formattedData = data.map((item) => ({
          id: item.id, // DataGrid expects each row to have a unique 'id'
          name: item.name,
          username: item.username,
          email: item.email,
          address: `${item.address.street}, ${item.address.city}`, // Concatenate address fields
          phone: item.phone,
          website: item.website,
          company: item.company.name
        }));
        setRows(formattedData); // Set the fetched data to rows
        setLoading(false); // Set loading to false after data is fetched
      })
      .catch((error) => {
        console.error('Error fetching data:', error);
        setLoading(false);
      });
  }, []);

  return (
    <div className='home' style={{display: 'flex', flexDirection: 'column' }}>
      <Navbar/>
      <div className='table-container'>
        <Paper sx={{ height: '100%', width: '100%' }}>
          <DataGrid
            rows={rows} // Data for the grid
            columns={columns} // Columns configuration
            initialState={{ pagination: { paginationModel } }}
            loading={loading} // Show loading spinner while fetching data
            pageSizeOptions={[5, 10]} // Pagination options
            checkboxSelection
            sx={{ border: 0 }}
          />
        </Paper>
      </div>
    </div>
  );
}

export default Contact