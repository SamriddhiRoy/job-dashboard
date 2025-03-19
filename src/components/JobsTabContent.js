import React, { useState } from 'react';
import { Box, List, ListItem, ListItemText, Button, Popover, Menu, MenuItem } from '@mui/material';
import ArrowRightIcon from '../assets/arrow-right.svg';
import { Search as SearchIcon } from '@mui/icons-material';
import { InputBase, IconButton } from '@mui/material';
import { useNavigate } from 'react-router-dom'; 

function JobsTabContent() {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedJob, setSelectedJob] = useState(null);
  const navigate = useNavigate(); 

  const handleSearch = (term) => {
    setSearchTerm(term);
  };

  const jobListingsData = [
    { id: 1, title: 'Senior Product Designer', location: 'Bengaluru, India', posted: '3 Days Ago' },
    { id: 2, title: 'UI/UX Design Intern', location: 'Delhi, India', posted: '8 Days Ago' },
    { id: 3, title: 'Senior Full Stack Developer', location: 'Delhi, India', posted: '19 Days Ago' },
    { id: 4, title: 'Product Manager', location: 'Mumbai, India', posted: '2 Days Ago' },
    { id: 5, title: 'Frontend Developer', location: 'Hyderabad, India', posted: '10 Days Ago' },
  ];

  const filteredJobListings = () => {
    return jobListingsData.filter((job) => job.title.toLowerCase().includes(searchTerm.toLowerCase()));
  };

  function JobFilters({ onSearch, searchTerm: parentSearchTerm }) {
    const [localSearchTerm, setLocalSearchTerm] = useState(parentSearchTerm);

    const handleSearchChange = (event) => {
      const value = event.target.value;
      setLocalSearchTerm(value);
      onSearch(value);
    };

    const handleClearSearch = () => {
      setLocalSearchTerm('');
      onSearch('');
    };

    return (
      <Box display="flex" alignItems="center" mb={3}>
        <Button variant="outlined" sx={{ mr: 1, textTransform: 'none', borderRadius: '20px', padding: '4px 16px', borderColor: '#e0e0e0', color: '#585858', backgroundColor: '#F8F8F8', '&:hover': { backgroundColor: '#B6E77740' } }}>Open</Button>
        <Button variant="outlined" sx={{ mr: 1, textTransform: 'none', borderRadius: '20px', padding: '4px 16px', borderColor: '#e0e0e0', color: '#585858', backgroundColor: '#F8F8F8', '&:hover': { backgroundColor: '#B6E77740' } }}>Closed</Button>
        <Button variant="outlined" sx={{ mr: 2, textTransform: 'none', borderRadius: '20px', padding: '4px 16px', borderColor: '#e0e0e0', color: '#585858', backgroundColor: '#F8F8F8', '&:hover': { backgroundColor: '#B6E77740' } }}>Draft</Button>
        <Box sx={{ flexGrow: 0.5, display: 'flex', alignItems: 'center', border: '1px solid #e0e0e0', borderRadius: '20px', padding: '2px 8px', backgroundColor: '#F8F8F8', height: '32px', minWidth: '200px' }}>
          <InputBase placeholder="Search Jobs" sx={{ ml: 1, flex: 1, fontSize: '0.875rem' }} value={localSearchTerm} onChange={handleSearchChange} />
          {localSearchTerm && (<IconButton type="button" sx={{ p: '6px' }} aria-label="clear" onClick={handleClearSearch}><span style={{ fontSize: '1rem', color: '#585858' }}>x</span></IconButton>)}
          <IconButton type="button" sx={{ p: '6px' }} aria-label="search"><SearchIcon sx={{ fontSize: '1.25rem' }} /></IconButton>
        </Box>
      </Box>
    );
  }

  function JobListings({ jobListings, onJobSelect }) {
    return (
      <Box px={2}>
        <List>
          {jobListings.map((job) => (
            <ListItem
              button
              divider
              key={job.id}
              sx={{
                border: '1px solid #e0e0e0',
                borderRadius: '8px',
                mb: 2,
                p: 2,
                '&:hover': {
                  boxShadow: '0px 2px 4px rgba(0, 0, 0, 0.1)',
                }
              }}
              onClick={() => onJobSelect(job)}
            >
              <Box display="flex" alignItems="center" width="100%">
                <ListItemText
                  primary={
                    <Box display="flex" alignItems="center">
                      {job.title}
                      <img src={ArrowRightIcon} alt="Arrow Right" style={{ width: '0.8rem', marginLeft: '4px' }} />
                    </Box>
                  }
                  secondary={`Posted ${job.posted} - ${job.location}`}
                />
                <Box display="flex" alignItems="center">
                  <Button variant="outlined" sx={{ mr: 2, textTransform: 'none', borderRadius: '20px', padding: '4px 16px', borderColor: '#e0e0e0', color: '#585858', backgroundColor: '#F8F8F8' }}>
                    Active Until Jan 31, 2026
                  </Button>
                  <Button
                    variant="outlined"
                    sx={{
                      mr: 2,
                      textTransform: 'none',
                      borderRadius: '20px',
                      padding: '4px 16px',
                      borderColor: '#e0e0e0',
                      color: '#585858',
                      backgroundColor: '#B6E77740',
                    }}
                    onClick={() => {
                      onJobSelect(job);
                      navigate('/jobs'); 
                    }}
                  >
                    3 New Applications
                  </Button>
                  <Button
                    variant="outlined"
                    sx={{
                      borderColor: '#e0e0e0',
                      color: '#585858',
                      borderRadius: '20px',
                      padding: '4px 8px',
                      display: 'flex',
                      alignItems: 'center',
                      backgroundColor: '#B6E77740',
                    }}
                  >
                    Active
                    <span style={{ marginLeft: '4px', fontSize: '0.8rem' }}>▼</span>
                  </Button>
                </Box>
              </Box>
            </ListItem>
          ))}
        </List>
      </Box>
    );
  }

  const handleJobSelect = (job) => {
    setSelectedJob(job);
    console.log("Job selected:", job);
  };

  return (
    <Box>
      <JobFilters onSearch={handleSearch} searchTerm={searchTerm} />
      <JobListings jobListings={filteredJobListings()} onJobSelect={handleJobSelect} />
    </Box>
  );
}

export default JobsTabContent;