// ManageTabContent.js
import React from 'react';
import { Box, Typography, Paper, Grid, Card, CardContent, CardActions, Button } from '@mui/material';
import { Settings, Add, Edit, Delete } from '@mui/icons-material';

function ManageTabContent() {
  const jobPostings = [
    { id: 1, title: 'Senior Product Designer', status: 'Active' },
    { id: 2, title: 'Frontend Developer', status: 'Draft' },
    { id: 3, title: 'Data Scientist', status: 'Closed' },
  ];

  return (
    <Box sx={{ p: 3, display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', minHeight: '300px' }}>
      <Paper elevation={5} sx={{ p: 4, borderRadius: '20px', maxWidth: '800px', width: '100%', boxShadow: '0 8px 24px rgba(0, 0, 0, 0.1)' }}>
        <Typography variant="h5" color="error" sx={{ mb: 3, textAlign: 'center', fontWeight: 700, color: 'green' }}>
          Manage Jobs
        </Typography>
        <Grid container spacing={3}>
          {jobPostings.map((job) => (
            <Grid item xs={12} sm={6} md={4} key={job.id}>
              <Card elevation={3} sx={{ height: '100%', display: 'flex', flexDirection: 'column' }}>
                <CardContent sx={{ flexGrow: 1 }}>
                  <Typography variant="h6" component="div" sx={{ fontWeight: 600 }}>
                    {job.title}
                  </Typography>
                  <Typography variant="body2" color="text.secondary" sx={{ mt: 1 }}>
                    Status: {job.status}
                  </Typography>
                </CardContent>
                <CardActions sx={{ p: 2, display: 'flex', justifyContent: 'flex-end' }}>
                <Button variant="outlined" startIcon={<Edit />} size="small" sx={{ mr: 1, color: '#4caf50' }}> 
  Edit
</Button>
                  <Button variant="contained" startIcon={<Delete />} color="error" size="small" sx={{
                    backgroundColor: '#e57373', 
                    '&:hover': {
                      backgroundColor: '#e57373', 
                    },
                  }}>
                    Delete
                  </Button>
                </CardActions>
              </Card>
            </Grid>
          ))}
          <Grid item xs={12} sm={6} md={4}>
            <Card elevation={3} sx={{ height: '100%', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center' }}>
              <CardContent sx={{ textAlign: 'center' }}>
                <Button variant="contained" startIcon={<Add />} color="primary" sx={{
                  backgroundColor: '#e8f5e9', 
                  color: '#1b5e20', 
                  '&:hover': {
                    backgroundColor: '#c8e6c9',
                  },
                }}>
                  Add New Job
                </Button>
              </CardContent>
            </Card>
          </Grid>
        </Grid>
        <Box mt={4} textAlign="center">
          <Button variant="contained" startIcon={<Settings />} color="primary">
            Job Settings
          </Button>
        </Box>
      </Paper>
    </Box>
  );
}

export default ManageTabContent;