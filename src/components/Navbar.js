
import React, { useState } from 'react';
import { Box, InputBase, IconButton, Button, Typography, Avatar, Modal } from '@mui/material';
import { Search as SearchIcon } from '@mui/icons-material';
import HomeIcon from './icons/HomeIcon';
import MessageIcon from './icons/MessageIcon';
import NotificationIcon from './icons/NotificationIcon';
import ProfileIcon from './icons/ProfileIcon';
import {  TextField, Select, MenuItem, FormControl, InputLabel } from '@mui/material';
function Navbar() {
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <Box
      sx={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        padding: '8px 24px',
        backgroundColor: '#fff',
        borderBottom: '1px solid #e0e0e0',
      }}
    >
      
      <Avatar
        alt="Demo Logo"
        src="/path/to/demo-logo.png"
        sx={{ width: 36, height: 36, marginRight: '16px' }}
      />

      <Box
        sx={{
          width: '450px',
          height: '30px',
          display: 'flex',
          alignItems: 'center',
          border: '1px solid #e0e0e0',
          borderRadius: '20px',
          padding: '8px 23px',
          backgroundColor: 'white',
          gap: '10px',
          flex: '0 0 auto',
          marginRight: '16px',
          marginLeft: '132px',
        }}
      >
        <InputBase placeholder="Search for people or company" sx={{ ml: 1, flex: 1 }} />
        <IconButton type="button" sx={{ p: '10px' }} aria-label="search">
          <SearchIcon />
        </IconButton>
      </Box>

     
      <Box sx={{ display: 'flex', alignItems: 'center' }}>
        
        <Box display="flex" alignItems="center">
          <IconButton aria-label="home" sx={{ marginRight: '8px' }}>
            <HomeIcon />
          </IconButton>
          <IconButton aria-label="messages" sx={{ marginRight: '8px' }}>
            <MessageIcon />
          </IconButton> <IconButton aria-label="profile" sx={{ marginRight: '8px' }}>
            <ProfileIcon />
          </IconButton>
          <IconButton aria-label="notifications" sx={{ marginRight: '8px' }}>
            <NotificationIcon />
          </IconButton>
         
        </Box>

      
        <Button
          variant="contained"
          sx={{
            width: '170px',
            height: '40px',
            backgroundColor: '#B6E777',
            color: '#fff',
            borderRadius: '20px',
            padding: '8px 24px',
            boxShadow: '0px 2px 4px rgba(0, 0, 0, 0.1)',
            '&:hover': {
              backgroundColor: '#95d160',
            },
          }}
          onClick={handleOpen} 
        >
          <Typography variant="body2" sx={{ fontWeight: 600 }}>
            + Create a Job
          </Typography>
        </Button>
      </Box>

  
  <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="create-job-modal-title"
        aria-describedby="create-job-modal-description"
      >
        <Box
          sx={{
            position: 'absolute',
            top: '50%',
            left: '50%',
            transform: 'translate(-50%, -50%)',
            width: 400,
            bgcolor: 'background.paper',
            border: '1px solid #e0e0e0',
            borderRadius: '12px',
            boxShadow: '0px 4px 12px rgba(0, 0, 0, 0.1)',
            p: 3,
          }}
        >
          <Typography id="create-job-modal-title" variant="h6" component="h2" sx={{ mb: 2, textAlign: 'center' }}>
            Create a New Job
          </Typography>
          <TextField label="Job Title" fullWidth margin="normal" size="small" />
          <FormControl fullWidth margin="normal" size="small">
            <InputLabel id="job-type-label">Job Type</InputLabel>
            <Select labelId="job-type-label" id="job-type-select" label="Job Type">
              <MenuItem value="Full-time">Full-time</MenuItem>
              <MenuItem value="Part-time">Part-time</MenuItem>
              
              <MenuItem value="Internship">Internship</MenuItem>
              <MenuItem value="Contract">Contract</MenuItem>
            </Select>
          </FormControl>
          <TextField label="Location" fullWidth margin="normal" size="small" />

        
          <Box sx={{ display: 'flex', justifyContent: 'center', mt: 3 }}>
            <Button variant="contained" sx={{ backgroundColor: '#B6E777', color: 'white', '&:hover': { backgroundColor: '#95d160' }, mr: 1 }} onClick={handleClose}>
              Create Job
            </Button>
            <Button onClick={handleClose} sx={{ backgroundColor: '#ffe0e0', color: '#d32f2f', '&:hover': { backgroundColor: '#f5c6c6' } }}>
  Cancel
</Button>
          </Box>
        </Box>
      </Modal>
    </Box>
  );
}
export default Navbar;