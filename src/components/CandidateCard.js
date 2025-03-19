import React, { useState } from 'react';
import {
  Card,
  CardContent,
  Grid,
  Box,
  Avatar,
  Typography,
  IconButton,
  Chip,
  Button,
  Popover,
} from '@mui/material';
import {
  Lock,
  BookmarkBorder,
  NoteAdd,
  Check,
} from '@mui/icons-material';
import profileImage from '../assets/job.png'; 

function CandidateCard({ profile, buttonType, onClick }) {
  const [anchorElBookmark, setAnchorElBookmark] = useState(null);
  const [anchorElNotes, setAnchorElNotes] = useState(null);

  const handleBookmarkClick = (event) => {
    setAnchorElBookmark(event.currentTarget);
  };

  const handleNotesClick = (event) => {
    setAnchorElNotes(event.currentTarget);
  };

  const handlePopoverClose = () => {
    setAnchorElBookmark(null);
    setAnchorElNotes(null);
  };

 
  const openNotes = Boolean(anchorElNotes);
   const openBookmark = Boolean(anchorElBookmark);

  return (
    <Card
      sx={{
        mb: 2,
        boxShadow: '0px 2px 4px rgba(0, 0, 0, 0.1)',
        borderRadius: '8px',
        transition: 'transform 0.2s',
        '&:hover': {
          transform: 'translateY(-4px)',
          boxShadow: '0px 4px 8px rgba(0, 0, 0, 0.15)',
        },
      }}
    >
      <CardContent>
        <Grid container alignItems="center" spacing={2}>
          <Grid item xs={12} sm={6}>
            <Box display="flex" alignItems="center">
              <Avatar sx={{ width: 40, height: 40, mr: 2 }} src={profileImage} />
              <Box>
                <Box display="flex" alignItems="center">
                  <Lock sx={{ mr: 0.5, fontSize: 'small', color: '#666' }} />
                  <Typography variant="subtitle1" sx={{ fontWeight: 600, fontSize: '16px', color: '#333' }}>
                    Profile Locked
                  </Typography>
                </Box>
                <Typography variant="body2" sx={{ fontSize: '14px', color: '#666' }}>
                  {profile.location} - {profile.experience} Years of Exp.
                </Typography>
              </Box>
            </Box>
          </Grid>
          <Grid item xs={12} sm={6} textAlign="right">
            
            <IconButton aria-label="notes" onClick={handleNotesClick}>
              <NoteAdd sx={{ fontSize: '20px', color: '#666' }} />
            </IconButton>
            <IconButton aria-label="bookmark" sx={{ mr: 1 }} onClick={handleBookmarkClick}>
              <BookmarkBorder sx={{ fontSize: '20px', color: '#666' }} />
            </IconButton>
          </Grid>
        </Grid>
        <Box mt={2}>
          <Typography variant="subtitle2" sx={{  fontSize: '14px', color: '#333' }}>
            Recent Experience
          </Typography>
          <Typography variant="body2" sx={{ fontSize: '14px', color: '#333' }}>
  <strong>Lead Designer</strong>  - Lollypop Designs
</Typography>
          <Typography variant="caption" sx={{ fontSize: '12px', color: '#666' }}>
            {profile.recentExperience.duration}
          </Typography>
        </Box>
        <Box mt={2}>
          <Typography variant="subtitle2" sx={{ fontSize: '14px', color: '#333' }}>
            Education
          </Typography>


          <Typography variant="body2" sx={{ fontSize: '14px', color: '#333' }}>
  <strong>MA, Graphic Design</strong> <span style={{ color: '#ccc', marginRight: '4px' }}>•</span> Kingston University London - 2022
</Typography>
</Box> 
        <Box mt={2} display="flex" alignItems="center">
          {profile.skills.map((skill, index) => (
            <Chip
              key={skill}
              label={skill}
              sx={{
                mr: 1,
                mb: 1,
                backgroundColor: index === 0 ? '#B6E77740' : '#f0f0f0',
                fontSize: '12px',
                color: '#333',
                '& .MuiChip-icon': {
                  color: '#333',
                  fontSize: '14px',
                },
              }}
              icon={index === 0 ? <Check /> : null}
            />
          ))}
          {profile.moreSkills && (
            <Chip label={`+${profile.moreSkills}`} sx={{ mr: 1, mb: 1, backgroundColor: '#f0f0f0', fontSize: '12px', color: '#333' }} />
          )}
        </Box>
        <Box mt={2} display="flex" justifyContent="space-between" alignItems="center">
          <Typography variant="caption" sx={{ fontSize: '12px', color: '#666' }}>
            Applied 2 Days Ago
          </Typography>
          {buttonType === 'viewApplication' ? (
            <Button
              variant="outlined"
              sx={{
                borderColor: '#e0e0e0',
                color: '#585858',
                borderRadius: '8px',
                padding: '6px 12px',
                fontSize: '14px',
                '&:hover': {
                  backgroundColor: '#B6E77740',
                  borderColor: '#B6E777',
                },
              }}
              startIcon={
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M12 19H5L5.007 12H7V17H12V19ZM18.992 12H17V7H12V5H19L18.992 12Z" fill="#585858" />
                </svg>
              }
              onClick={() => onClick(profile)}
            >
              View Application
            </Button>
          ) : (
            <Button
              variant="outlined"
              sx={{
                borderColor: '#e0e0e0',
                color: '#585858',
                borderRadius: '8px',
                padding: '6px 12px',
                fontSize: '14px',
                '&:hover': {
                  backgroundColor: '#B6E77740',
                  borderColor: '#B6E777',
                },
              }}
              startIcon={
                <svg width="22" height="26" viewBox="0 0 22 26" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M6 11.75V6.75C6 3.98858 8.23858 1.75 11 1.75C13.7614 1.75 16 3.98858 16 6.75M11 16.75V19.25M3.5 24.25H18.5C19.8807 24.25 21 23.1307 21 21.75V14.25C21 12.8693 19.8807 11.75 18.5 11.75H3.5C2.11929 11.75 1 12.8693 1 14.25V21.75C1 23.1307 2.11929 24.25 3.5 24.25Z" stroke="#585858" strokeWidth="2" strokeLinecap="round" />
                </svg>
              }
              onClick={() => onClick(profile)}
            >
              Reveal Profile
            </Button>
          )}
        </Box>
        <Popover
          open={openBookmark}
          anchorEl={anchorElBookmark}
          onClose={handlePopoverClose}
          anchorOrigin={{
            vertical: 'bottom',
            horizontal: 'left',
          }}
          transformOrigin={{
            vertical: 'top',
            horizontal: 'left',
          }}
        >
          <Typography sx={{ p: 2 }}>Bookmark action</Typography>
        </Popover>
        <Popover
          open={openNotes}
          anchorEl={anchorElNotes}
          onClose={handlePopoverClose}
          anchorOrigin={{
            vertical: 'bottom',
            horizontal: 'left',
          }}
          transformOrigin={{
            vertical: 'top',
            horizontal: 'left',
          }}
        >
          <Typography sx={{ p: 2 }}>Notes action</Typography>
        </Popover>
      </CardContent>
    </Card>
  );
}

export default CandidateCard;