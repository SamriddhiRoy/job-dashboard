// RightSidebar.js
import React from 'react';
import {
  Box,
  Typography,
  ListItemAvatar,
  List,
  ListItem,
  ListItemText,
  Avatar,
  Divider,
  IconButton,
} from '@mui/material';
import { Lock as LockIcon, CalendarToday as CalendarTodayIcon } from '@mui/icons-material';
import maleAvatar from '../assets/male.png'; // Adjust the path as needed
import femaleAvatar from '../assets/female.png'; // Adjust the path as needed
import ArrowRightIcon from '../assets/arrow-right.svg'; // Adjust the path as needed

function RightSidebar() {
  return (
    <Box
      sx={{
        width: '280px',
        height: '100vh',
        backgroundColor: '#fff',
        boxShadow: '-2px 0px 5px rgba(0, 0, 0, 0.1)',
        p: 2,
      }}
    >
      {/* Reveals Left Section */}
      <Box
        display="flex"
        alignItems="center"
        mb={2}
        p={1}
        bgcolor="#f9f9f9"
        borderRadius="8px"
      >
        <LockIcon sx={{ mr: 1, color: '#999', fontSize: '1.2rem' }} />
        <Box>
          <Typography variant="subtitle2" sx={{ fontWeight: 600, fontSize: '0.9rem' }}>
            5/5 Reveals Left
          </Typography>
          <Typography variant="caption" color="text.secondary" sx={{ fontSize: '0.8rem' }}>
            Unlock 50 Resumes at ₹399
          </Typography>
        </Box>
      </Box>

      <Divider sx={{ mb: 2 }} />

      {/* Scheduled Interviews Section (Boxed with This Week) */}
      <Box
        mb={1}
        p={1}
        borderRadius="8px"
        border="1px solid #e0e0e0"
      >
        <Box
          display="flex"
          justifyContent="space-between"
          alignItems="center"
          mb={1}
        >
          <Typography variant="subtitle2" sx={{ fontWeight: 600, fontSize: '0.9rem' }}>
            Scheduled Interviews
          </Typography>
          <IconButton size="small">
            <img src={ArrowRightIcon} alt="Arrow Right" style={{ width: '1.2rem' }} />
          </IconButton>
        </Box>
        <Divider sx={{ mb: 1 }} />
        <Typography variant="caption" color="text.secondary" sx={{ fontSize: '0.8rem' }}>
          This Week
        </Typography>
        <List dense>
          <ListItem alignItems="flex-start" disableGutters>
            <ListItemAvatar>
              <Avatar
                alt="Pritesh Srivastava"
                src={maleAvatar}
                sx={{ width: 30, height: 30 }}
              />
            </ListItemAvatar>
            <ListItemText
              primary={
                <Typography variant="body2" sx={{ fontSize: '0.8rem', fontWeight: 600 }}>
                  Pritesh Srivastava
                </Typography>
              }
              secondary={
                <Box display="flex" alignItems="center">
                  <CalendarTodayIcon sx={{ fontSize: '0.8rem', mr: 0.5 }} />
                  <Typography variant="caption" sx={{ fontSize: '0.7rem' }}>
                    24 May 2024 - 3:30 PM
                  </Typography>
                </Box>
              }
            />
          </ListItem>
          <ListItem alignItems="flex-start" disableGutters>
            <ListItemAvatar>
              <Avatar
                alt="Nikita Mansingha"
                src={femaleAvatar}
                sx={{ width: 30, height: 30 }}
              />
            </ListItemAvatar>
            <ListItemText
              primary={
                <Typography variant="body2" sx={{ fontSize: '0.8rem', fontWeight: 600 }}>
                  Nikita Mansingha
                </Typography>
              }
              secondary={
                <Box display="flex" alignItems="center">
                  <CalendarTodayIcon sx={{ fontSize: '0.8rem', mr: 0.5 }} />
                  <Typography variant="caption" sx={{ fontSize: '0.7rem' }}>
                    24 May 2024 - 3:30 PM
                  </Typography>
                </Box>
              }
            />
          </ListItem>
        </List>
      </Box>
    </Box>
  );
}
export default RightSidebar;