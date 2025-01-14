import React from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import Grid from '@mui/material/Grid'; 
import Persoanloan from "../images/personalloan.jpg"

const Loans = () => {
  return (
    <Card sx={{
      width: '1200px',
      height: '500px',
      borderRadius: 1,
      marginTop: '100px',
      marginLeft: '170px',
      display: 'flex', // Use flexbox for better layout
      justifyContent: 'space-around', // Space cards evenly
    }}>
      <Grid container spacing={1} sx={{marginTop: '50px'}}> 
        {/* Use Grid for better layout and spacing */}
        <Grid item xs={12} sm={6} md={4}> 
          <Card sx={{ minWidth: 150 }}> 
            <Box sx={{ p: 2 }}>
              <img src={Persoanloan} height={"50px"} width={ "100px"} />
              <h4>Personal Loan</h4>
            </Box>
          </Card>
        </Grid>
        <Grid item xs={12} sm={6} md={4}>
          <Card sx={{ minWidth: 100 }}>
            <Box sx={{ p: 2 }}>
              <h4>Home Loan</h4>
            </Box>
          </Card>
        </Grid>
        <Grid item xs={12} sm={6} md={4}>
          <Card sx={{ minWidth: 100 }}>
            <Box sx={{ p: 2 }}>
              <h4>Car Loan</h4>
            </Box>
          </Card>
        </Grid>
        <Grid item xs={12} sm={6} md={4}>
          <Card sx={{ minWidth: 100 }}>
            <Box sx={{ p: 2 }}>
              <h4>Two Wheeler Loan</h4>
            </Box>
          </Card>
        </Grid>
        <Grid item xs={12} sm={6} md={4}>
          <Card sx={{ minWidth: 100 }}>
            <Box sx={{ p: 2 }}>
              <h4>Gold Loan</h4>
            </Box>
          </Card>
        </Grid>
        <Grid item xs={12} sm={6} md={4}>
          <Card sx={{ minWidth: 100 }}>
            <Box sx={{ p: 2 }}>
              <h4>Doctor Loan</h4>
            </Box>
          </Card>
        </Grid>
      </Grid>
    </Card>
  );
}

export default Loans;