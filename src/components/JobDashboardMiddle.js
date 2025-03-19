import React, { useState } from 'react';
import {
  Box,
  Tabs,
  Tab,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  TextField,
  Button,
  IconButton,
  Menu,
  MenuItem,
} from '@mui/material';
import { MoreHoriz as MoreHorizIcon } from '@mui/icons-material';


import JobsTabContent from './JobsTabContent';
import DashboardTabContent from './DashboardTabContent';
import MessagesTabContent from './MessagesTabContent';
import ActivityTabContent from './ActivityTabContent';
import ScheduleTabContent from './ScheduleTabContent';
import ManageTabContent from './ManageTabContent';


function JobDashboardMiddle() {
  const [activeTab, setActiveTab] = useState(1); 
  const [open, setOpen] = useState(false);

  const handleChange = (event, newValue) => {
    setActiveTab(newValue);
  };

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const renderTabContent = () => {
    switch (activeTab) {
      case 0:
        return <DashboardTabContent />;
      case 1:
        return <JobsTabContent />;
      case 2:
        return <MessagesTabContent />;
      case 3:
        return <ActivityTabContent />;
      case 4:
        return <ScheduleTabContent />;
      case 5:
        return <ManageTabContent />;
    

      default:
        return <JobsTabContent />;
    }
  };

  return (
    <Box sx={{ p: 0, width: 'calc(100% - 280px - 300px)' }}>
      
      <Box
        sx={{
          width: '100%',
          height: '250px',
          backgroundImage: `url(${require('../assets/banner.png')})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          display: 'flex',
          justifyContent: 'flex-end',
          alignItems: 'flex-start',
          padding: '16px 8px 0 0',
        }}
      >
        <Box
          sx={{
            display: 'flex',
            alignItems: 'center',
            paddingRight: '8px',
          }}
        >
          <Box sx={{ display: 'flex', alignItems: 'center' }}>
            <IconButton onClick={handleClickOpen} sx={{ backgroundColor: 'white', borderRadius: '50%', marginRight: '8px' }}>
              <MoreHorizIcon />
            </IconButton>
            <Button
              variant="contained"
              sx={{
                borderRadius: '20px',
                textTransform: 'none',
                backgroundColor: 'white',
                color: 'black',
                '&:hover': {
                  backgroundColor: '#f0f0f0',
                },
              }}
            >
              Edit Profile
            </Button>
          </Box>
          <Dialog open={open} onClose={handleClose}>
            <DialogTitle>Create Job</DialogTitle>
            <DialogContent>
              <TextField autoFocus margin="dense" id="name" label="Job Title" type="text" fullWidth variant="standard" />
            
            </DialogContent>
            <DialogActions>
              <Button onClick={handleClose}>Cancel</Button>
              <Button onClick={handleClose}>Create</Button>
            </DialogActions>
          </Dialog>
        </Box>
      </Box>

      
      <Tabs value={activeTab} onChange={handleChange} aria-label="job tabs" sx={{ mb: 2 }}>
        <Tab label="Dashboard" />
        <Tab label="Jobs" />
        <Tab label="Messages" />
        <Tab label="Activity" />
        <Tab label="Schedule" />
        <Tab label="Manage" />
        <Tab label="API" />
        <Tab
          label="Coming Soon"
          sx={{
            backgroundColor: '#B6E77740 !important',
            color: '#4CAF50 !important',
            borderRadius: '16px !important',
            padding: '2px 8px !important',
            marginLeft: '4px !important',
            minWidth: 'auto !important',
            textTransform: 'none !important',
            fontSize: '0.75rem !important',
            '&:hover': {
              backgroundColor: '#98c56340 !important',
            },
          }}
        />
      </Tabs>

     
      {renderTabContent()}
    </Box>
  );
}

export default JobDashboardMiddle;