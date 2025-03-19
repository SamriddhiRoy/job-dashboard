import React, { useState, useEffect } from 'react';
import {
  Grid,
  Box,
  AppBar,
  Toolbar,
  Typography,
  Button,
  IconButton,
  Tabs,
  Tab,
  TextField,
  InputLabel,
  FormControl,
  Select,
  MenuItem,
} from '@mui/material';
import {
  Lock,
  ArrowDropDown,
  Add,
  Edit,
  Search,
} from '@mui/icons-material';
import CandidateCard from '../components/CandidateCard';
import CandidateResumeView from './CandidateResumeView';
import Navbar from '../components/Navbar'; 

const CustomArrow = () => (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M7 10L12 15L17 10" stroke="#666" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
);


function Jobs() {
  const [profiles, setProfiles] = useState(null);
  const [selectedProfile, setSelectedProfile] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [tabValue, setTabValue] = useState(0);
  const [sortValue, setSortValue] = useState('newest');

  useEffect(() => {
    const fetchData = async () => {
      try {
        setTimeout(() => {
          const mockData = [
            {
              id: 1,
              location: 'London',
              experience: 5,
              recentExperience: { duration: '1 year' },
              skills: ['React', 'JavaScript'],
              moreSkills: 2,
              education: { degree: 'MA', university: 'Kingston', year: '2022' },
            },
            {
              id: 2,
              location: 'New York',
              experience: 3,
              recentExperience: { duration: '6 months' },
              skills: ['Node.js', 'Express'],
              moreSkills: 1,
              education: { degree: 'BS', university: 'NYU', year: '2021' },
            },
          ];
          setProfiles(mockData);
          setLoading(false);
        }, 1000);
      } catch (err) {
        setError(err);
        setLoading(false);
      }
    };
    fetchData();
  }, []);

  const handleViewApplication = (profile) => {
    setSelectedProfile(profile);
  };

  const handleCloseResumeView = () => {
    setSelectedProfile(null);
  };

  const handleTabChange = (event, newValue) => {
    setTabValue(newValue);
  };

  const handleSortChange = (event) => {
    setSortValue(event.target.value);
  };

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error.message || 'Failed to load profiles.'}</div>;
  }

  if (!profiles) {
    return <div>No profiles available.</div>;
  }

  return (
    <Box sx={{ flexGrow: 1, borderRadius: '8px', padding: '16px' }}> 
      <Navbar />
      <AppBar position="static" sx={{ backgroundColor: 'white', color: 'black', boxShadow: 'none', borderBottom: 'none' }}>
  <Toolbar sx={{ padding: '8px 16px' }}>
    <Box display="flex" alignItems="center" justifyContent="flex-start" width="auto">
      <Typography variant="body2" sx={{ fontWeight: 600, fontSize: '14px', mr: 1 }}>
        ← Back to Dashboard
      </Typography>
      <Typography variant="body2" sx={{ fontSize: '14px', mr: 2 }}>
        Active Until: Jan 31, 2026
      </Typography>
      <Button variant="outlined" sx={{
        borderColor: '#e0e0e0',
        color: 'black',
        borderRadius: '20px',
        padding: '4px 12px',
        fontSize: '14px',
        marginLeft: '16px',
        '&:hover': {
          backgroundColor: 'white',
        },
      }}>
        <Lock sx={{ fontSize: '16px', mr: 0.5, color: '#66bb6a' }} />
        4/5 Reveals Left
      </Button>
    </Box>
  </Toolbar>
</AppBar>
  
      <Grid container spacing={2} sx={{ p: 2, borderTop: '1px solid #e0e0e0' }}>
        <Grid item xs={12} sm={6} sx={{ paddingRight: '16px' }}>
          <Box sx={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            border: '1px solid #e0e0e0',
            borderRadius: '8px',
            padding: '12px 16px',
            marginBottom: '16px'
          }}>
            <Box>
              <Box display="flex" alignItems="center">
                <Typography variant="h6" sx={{ fontWeight: 600, fontSize: '18px', mr: 1 }}>
                  Senior Product Designer
                </Typography>
                <IconButton size="small">
                  <ArrowDropDown />
                </IconButton>
              </Box>
              <Typography variant="body2" sx={{ fontSize: '14px', color: '#666' }}>
                Posted 3 Days Ago · Bengaluru, India
              </Typography>
            </Box>
            <Box display="flex" alignItems="center">
              <Button
                variant="contained"
                startIcon={<Add />}
                sx={{
                  backgroundColor: '#D4D3D3',
                  color: '#333',
                  borderRadius: '8px',
                  padding: '6px 12px',
                  fontSize: '14px',
                  '&:hover': {
                    backgroundColor: '#B6E77740',
                    color: '#333',
                  },
                  mr: 1,
                  boxShadow: 'none',
                }}
              >
                Add team member
              </Button>
              <Button
                variant="contained"
                startIcon={<Edit />}
                sx={{
                  backgroundColor: '#D4D3D3',
                  color: '#333',
                  borderRadius: '8px',
                  padding: '6px 12px',
                  fontSize: '14px',
                  '&:hover': {
                    backgroundColor: '#B6E77740',
                    color: '#333',
                  },
                  boxShadow: 'none',
                }}
              >
                Edit Job
              </Button>
            </Box>
          </Box>
          <Tabs
            value={tabValue}
            onChange={handleTabChange}
            aria-label="candidate tabs"
            sx={{
              '& .MuiTabs-indicator': { display: 'none' },
              '& .MuiButtonBase-root': {
                borderRadius: '20px',
                padding: '4px 12px',
                fontSize: '14px',
                minWidth: '80px',
                marginRight: '18px',
                textTransform: 'none',
                color: '#757575',
                backgroundColor: '#f0f0f0',
                '&:hover': {
                  backgroundColor: '#B6E77740',
                },
                '&.Mui-selected': {
                  color: 'black',
                  backgroundColor: '#B6E77740',
                },
              },
            }}
          >
            <Tab label="All" />
            <Tab label="Unlocked" />
            <Tab label="Interviewing" />
            <Tab label="Accepted" />
            <Tab label="Rejected" />
            <Tab label="Saved" />
          </Tabs>
  
          <Box display="flex" alignItems="center" sx={{ mt: 2 }}>
            <TextField label="Search Candidate" variant="outlined" fullWidth InputProps={{ endAdornment: (<IconButton position="end"><Search sx={{ color: '#66bb6a' }} /></IconButton>) }} sx={{ mr: 2, fontSize: '14px', flex: '1', '& .MuiOutlinedInput-root': { borderRadius: '20px', '& fieldset': { borderColor: '#e0e0e0' } } }} />
            <Box display="flex" alignItems="center">
              <CustomArrow />
              <InputLabel id="sort-by-label" sx={{ fontSize: '14px', color: '#666', mr: 1 }}>Sort by</InputLabel>
              <FormControl variant="outlined" size="small" sx={{ borderRadius: '20px', minWidth: '150px', flex: '2' }}>
                <Select labelId="sort-by-label" id="sort-by" value={sortValue} onChange={handleSortChange} label="Sort by" sx={{ fontSize: '14px', borderRadius: '20px', padding: '4px 12px', '& fieldset': { borderColor: '#e0e0e0' } }} renderValue={(selected) => { if (selected === 'newest') { return 'Newest'; } else if (selected === 'oldest') { return 'Oldest'; } return ''; }}>
                  <MenuItem value="newest" sx={{ fontSize: '14px' }}>Newest</MenuItem>
                  <MenuItem value="oldest" sx={{ fontSize: '14px' }}>Oldest</MenuItem>
                </Select>
              </FormControl>
            </Box>
          </Box>
  
          <Box mt={2} mb={2}>
            <Typography variant="subtitle2">Today</Typography>
          </Box>
  
          {profiles.map((profile) => (
            <CandidateCard
              key={profile.id}
              profile={profile}
              buttonType="viewApplication"
              onClick={handleViewApplication}
            />
          ))}
        </Grid>
        <Grid item xs={12} sm={6} sx={{ borderLeft: '1px solid #e0e0e0' }}>
          {selectedProfile && (
            <CandidateResumeView profile={selectedProfile} onClose={handleCloseResumeView} />
          )}
        </Grid>
      </Grid>
    </Box>
 
);

}



export default Jobs;