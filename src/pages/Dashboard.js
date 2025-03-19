
import React from 'react';
import { Box } from '@mui/material';
import Navbar from '../components/Navbar'; 
import CompanyProfileHeader from '../components/CompanyProfileHeader';
import JobDashboardMiddle from '../components/JobDashboardMiddle';
import RightSidebar from '../components/RightSidebar';

function JobDashboard() {
  return (
    <Box>
      <Navbar /> 
      <Box sx={{ display: 'flex' }}>
        <CompanyProfileHeader />
        <JobDashboardMiddle />
        <RightSidebar />
      </Box>
    </Box>
  );
}

export default JobDashboard;