import React from 'react';
import {
  Box,
  Typography,
  IconButton,
  Button,
  Tabs,
  Tab,
  Avatar,
  Divider,
  Chip,
} from '@mui/material';

import {
  FileDownload,
  Link,
  BookmarkBorder,
  Event,
  Check,
} from '@mui/icons-material';
function CandidateResumeView({ onClose }) {
  const skills = [
    'Visual Design',
    'Prototyping',
    'Problem Solving',
    'Information Architecture',
    'Business Strategy',
    'Figma',
  ];

  return (
    <Box sx={{ p: 3, border: '1px solid #e0e0e0', borderRadius: '8px', backgroundColor: '#fff' }}>
   
      <Tabs
        value={0}
        aria-label="candidate tabs"
        sx={{
          mb: 3,
          '& .MuiTabs-indicator': { backgroundColor: '#333' },
          '& .MuiTab-root': {
            textTransform: 'none',
            minWidth: 'auto',
            px: 3,
            fontWeight: 400,
            '&:hover': {
              backgroundColor: '#f0f0f0',
            },
          },
          '& .Mui-selected': {
            fontWeight: 600,
            backgroundColor: '#f0f0f0',
          },
        }}
      >
        <Tab label="Resume" />
        <Tab label="Screening Questions" />
        <Tab label="Message" />
        <Tab label="Notes" />
        <Tab label="Schedule" />
      </Tabs>

     
      <Box sx={{ backgroundColor: 'white', borderRadius: '8px', p: 2, mb: 3 }}>
        
        <Box display="flex" justifyContent="space-between" alignItems="center">
          <Box>
            <Typography variant="h6" sx={{ fontWeight: 600, mb: 1 }}>
              Candidate's Resume
            </Typography>
            <Typography variant="body2" color="text.secondary" sx={{ fontSize: '0.8rem', mb: 0 }}>
              Last Updated May 2024
            </Typography>
          </Box>

          <Box display="flex" alignItems="center">
            <IconButton aria-label="download" sx={{ mr: 0.5 }}>
              <FileDownload />
            </IconButton>
            <IconButton aria-label="link" sx={{ mr: 0.5 }}>
              <Link />
            </IconButton>
           
            <Button
              variant="outlined"
              sx={{
                borderRadius: '4px',
                mr: 0.5,
                borderColor: '#ccc',
                color: '#333',
                fontSize: '0.7rem',
                padding: '4px 10px',
                backgroundColor: '#FFCDCD33',
              }}
            >
              Not a Good Fit
            </Button>
            <Button
              variant="contained"
              sx={{
                borderRadius: '4px',
                mr: 0.5,
                fontSize: '0.7rem',
                padding: '4px 10px',
                backgroundColor: '#212121',
                color: '#fff',
              }}
            >
              Good Fit
            </Button> 
            <IconButton aria-label="bookmark" sx={{ mr: 1, color: '#B6E777', backgroundColor: '#B6E77740', borderRadius: '0' }}>
  <BookmarkBorder />
</IconButton>
          </Box>
        </Box>

      
        <Divider sx={{ my: 2 }} />

     
        <Box display="flex" justifyContent="space-between" alignItems="center">
          <Box display="flex" alignItems="center">
            <Avatar sx={{ width: 40, height: 40, mr: 2 }} src="https://i.pravatar.cc/150?img=7" />
            <Box>
              <Typography variant="subtitle1" sx={{ fontWeight: 600, fontSize: '1rem', display: 'flex', alignItems: 'center' }}>
                Pritesh Srivastava <Check sx={{ fontSize: '0.8rem', ml: 0.5, color: 'green' }} />
              </Typography>
              <Typography variant="body2" color="text.secondary" sx={{ fontSize: '0.8rem' }}>
                Bengaluru, India - 8 Years of Exp.
              </Typography>
            </Box>
          </Box>
          <Button
            variant="outlined"
            startIcon={<Event />}
            sx={{
              borderRadius: '4px',
              borderColor: '#ccc',
              color: 'black',
              fontSize: '0.7rem',
              padding: '4px 10px',
              backgroundColor: 'white',
              textTransform: 'none',
            }}
          >
            Send Calendar Invite
          </Button>
        </Box>
      </Box>

  
    
   
      <Typography variant="subtitle2" sx={{ fontWeight: 600, mb: 2 }}>
        Skills
      </Typography>
      <Box display="flex" flexWrap="wrap">
        {skills.map((skill) => (
          <Chip
            key={skill}
            label={skill}
            sx={{
              mr: 1,
              mb: 1,
              backgroundColor: '#f0f0f0',
              color: '#333',
              fontSize: '0.7rem',
              padding: '2px 8px',
            }}
          />
        ))}
      </Box>

  
      <Typography variant="subtitle2" sx={{ fontWeight: 600, mt: 3, mb: 2 }}>
        Recent Experience
      </Typography>
      <Typography variant="subtitle1" sx={{ fontWeight: 600 }}>
        Lead Designer Lollypop Designs
      </Typography>
      <Typography variant="body2" color="text.secondary">
        Jan 2022 - Present - 2 years 8 months
      </Typography>
      <Typography variant="body2" color="text.secondary">
        Bengaluru, India
      </Typography>
      <Typography variant="body2" sx={{ mt: 1 }}>
        Developed a successful, scalable pellet-less shooting experience in collaboration with product managers, coaches, and athletes. Also, recognised by EnAble India, a non-profit organisation that has been empowering people with disabilities. Developed a successful, scalable pellet-less shooting experience in collaboration with product managers, coaches, and athletes. Also, recognised by EnAble India, a non-profit organisation that has been empowering people with disabilities.
      </Typography>
      <Typography variant="subtitle1" sx={{ fontWeight: 600, mt: 2 }}>
        Intern Designer Santander Bank
      </Typography>
      <Typography variant="body2" color="text.secondary">
        Jan 2021 - Mar 2021 - 3 months
      </Typography>
      <Typography variant="body2" color="text.secondary">
        London, UK
      </Typography>
      <Typography variant="body2" sx={{ mt: 1 }}>
        Developed a successful, scalable pellet-less shooting experience in collaboration with product managers, coaches, and athletes. Also, recognised by EnAble India, a non-profit organisation that has been empowering people with disabilities. Developed a successful, scalable pellet-less shooting experience in collaboration with product managers, coaches, and athletes. Also, recognised by EnAble India, a non-profit organisation that has been empowering people with disabilities.
      </Typography>
      <Button variant="text" sx={{ mt: 2, textTransform: 'none', p: 0, fontSize: '0.8rem' }}>
        + 3 More
      </Button>

      
      <Typography variant="subtitle2" sx={{ fontWeight: 600, mt: 3, mb: 2 }}>
        Education
      </Typography>
      <Typography variant="subtitle1" sx={{ fontWeight: 600 }}>
        MA, Graphic Design Kingston University
      </Typography>
      <Typography variant="body2" color="text.secondary">
        Jan 2022 - Sep 2023
      </Typography>
      <Typography variant="body2" color="text.secondary">
        London, UK
      </Typography>
      <Typography variant="body2" sx={{ mt: 1 }}>
        Developed a successful, scalable pellet-less shooting experience in collaboration with product managers, coaches, and athletes. Also, recognised by EnAble India, a non-profit organisation that has been empowering people with disabilities. Developed a successful, scalable pellet-less shooting experience in collaboration with product managers, coaches, and athletes. Also, recognised by EnAble India, a non-profit organisation that has been empowering people with disabilities.
      </Typography>

      
      <Typography variant="subtitle2" sx={{ fontWeight: 600, mt: 3, mb: 2 }}>
        Achievements
      </Typography>
      <Typography variant="subtitle1" sx={{ fontWeight: 600 }}>
        Course Leader Kingston University
      </Typography>
      <Typography variant="body2" color="text.secondary">
        Jan 2022 - Sep 2023
      </Typography>
      <Typography variant="body2" color="text.secondary">
        London, UK
      </Typography>
      <Typography variant="body2" sx={{ mt: 1 }}>
        Developed a successful, scalable pellet-less shooting experience in collaboration with product managers, coaches, and athletes.
      </Typography>

     
      <Typography variant="subtitle2" sx={{ fontWeight: 600, mt: 3, mb: 2 }}>
        Languages Known
      </Typography>
      <Box display="flex" flexWrap="wrap">
        <Chip label="Hindi" sx={{ mr: 1, mb: 1 }} />
        <Chip label="Telugu" sx={{ mr: 1, mb: 1 }} />
        <Chip label="English" sx={{ mr: 1, mb: 1 }} />
        <Chip label="German" sx={{ mr: 1, mb: 1 }} />
      </Box>
    </Box>
  );
}

export default CandidateResumeView;