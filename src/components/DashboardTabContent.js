
import React from 'react';
import { Box, Typography, Paper } from '@mui/material';

function DashboardTabContent() {
  return (
    <Box sx={{ p: 3, display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', minHeight: '300px' }}>
      <Paper elevation={3} sx={{ p: 3, borderRadius: '16px', maxWidth: '400px', textAlign: 'center' }}>
        <Typography variant="h6" color="primary" sx={{ mb: 1, fontWeight: 600 }}>
          Welcome to your Dashboard!
        </Typography>
        <Typography variant="body2" color="textSecondary" sx={{ mb: 2 }}>
          Your job activity overview will be here.
        </Typography>
        <Box sx={{ mt: 2 }}>
          
        </Box>
        <Typography variant="caption" color="textSecondary" sx={{ mt: 2, fontStyle: 'italic', fontSize: '0.8rem' }}>
          Start exploring your jobs!
        </Typography>
      </Paper>
    </Box>
  );
}

export default DashboardTabContent;