// ApiTabContent.js
import React from 'react';
import { Box, Typography, Paper, Grid, Card, CardContent, CardActions, Button, Chip } from '@mui/material';
import { Code, CloudUpload, SettingsInputComponent } from '@mui/icons-material';

function ApiTabContent() {
  return (
    <Box sx={{ p: 3, display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', minHeight: '300px' }}>
      <Paper elevation={5} sx={{ p: 4, borderRadius: '20px', maxWidth: '800px', width: '100%', boxShadow: '0 8px 24px rgba(0, 0, 0, 0.1)' }}>
        <Typography variant="h5" sx={{ mb: 3, textAlign: 'center', fontWeight: 700, color: '#4CAF50' }}> 
          API Integration
        </Typography>
        <Typography variant="body2" color="textSecondary" sx={{ mb: 3, textAlign: 'center' }}>
          Connect your applications using our API.
        </Typography>
        <Grid container spacing={3} justifyContent="center">
          <Grid item xs={12} sm={6} md={4}>
            <Card elevation={3} sx={{ height: '100%', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', textAlign: 'center' }}>
              <CardContent>
                <Code sx={{ fontSize: '3rem', color: '#81C784', mb: 2 }} /> 
                <Typography variant="h6" component="div" sx={{ fontWeight: 600 }}>
                  API Documentation
                </Typography>
                <Typography variant="body2" color="text.secondary" sx={{ mt: 1 }}>
                  Learn how to use our API.
                </Typography>
                <Chip label="Coming Soon" sx={{ backgroundColor: '#E8F5E9', color: '#4CAF50', mt: 2 }} size="small" /> 
              </CardContent>
              <CardActions sx={{ p: 2 }}>
                <Button variant="outlined" sx={{ color: '#4CAF50', borderColor: '#81C784' }} fullWidth disabled> 
                  View Docs
                </Button>
              </CardActions>
            </Card>
          </Grid>
          <Grid item xs={12} sm={6} md={4}>
            <Card elevation={3} sx={{ height: '100%', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', textAlign: 'center' }}>
              <CardContent>
                <CloudUpload sx={{ fontSize: '3rem', color: '#81C784', mb: 2 }} /> 
                <Typography variant="h6" component="div" sx={{ fontWeight: 600 }}>
                  API Keys
                </Typography>
                <Typography variant="body2" color="text.secondary" sx={{ mt: 1 }}>
                  Manage your API keys.
                </Typography>
                <Chip label="Coming Soon" sx={{ backgroundColor: '#E8F5E9', color: '#4CAF50', mt: 2 }} size="small" /> 
              </CardContent>
              <CardActions sx={{ p: 2 }}>
                <Button variant="outlined" sx={{ color: '#4CAF50', borderColor: '#81C784' }} fullWidth disabled> 
                  Manage Keys
                </Button>
              </CardActions>
            </Card>
          </Grid>
          <Grid item xs={12} sm={6} md={4}>
            <Card elevation={3} sx={{ height: '100%', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', textAlign: 'center' }}>
              <CardContent>
                <SettingsInputComponent sx={{ fontSize: '3rem', color: '#81C784', mb: 2 }} /> 
                <Typography variant="h6" component="div" sx={{ fontWeight: 600 }}>
                  API Settings
                </Typography>
                <Typography variant="body2" color="text.secondary" sx={{ mt: 1 }}>
                  Configure your API settings.
                </Typography>
                <Chip label="Coming Soon" sx={{ backgroundColor: '#E8F5E9', color: '#4CAF50', mt: 2 }} size="small" /> 
              </CardContent>
              <CardActions sx={{ p: 2 }}>
                <Button variant="outlined" sx={{ color: '#4CAF50', borderColor: '#81C784' }} fullWidth disabled> 
                  Configure
                </Button>
              </CardActions>
            </Card>
          </Grid>
        </Grid>
        <Box mt={4} textAlign="center">
          <Chip label="Coming Soon" sx={{ backgroundColor: '#E8F5E9', color: '#4CAF50' }} size="large" /> 
        </Box>
      </Paper>
    </Box>
  );
}

export default ApiTabContent;