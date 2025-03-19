
import React from 'react';
import { Box, Typography, Paper, List, ListItem, ListItemIcon, ListItemText, Divider, Chip } from '@mui/material';
import { Event, AccessTime, LocationOn, Person, CalendarToday } from '@mui/icons-material';

function ScheduleTabContent() {
  const appointments = [
    { id: 1, title: 'Interview with John Doe', time: '10:00 AM - 11:00 AM', date: '2024-03-15', location: 'Online', candidate: 'John Doe', type: 'interview' },
    { id: 2, title: 'Team Meeting', time: '2:00 PM - 3:00 PM', date: '2024-03-16', location: 'Conference Room', candidate: null, type: 'meeting' },
    { id: 3, title: 'Candidate Screening', time: '11:00 AM - 12:00 PM', date: '2024-03-17', location: 'Phone Call', candidate: 'Jane Smith', type: 'screening' },
  ];

  const getChipColor = (type) => {
    switch (type) {
      case 'interview': return 'primary';
      case 'meeting': return 'secondary';
      case 'screening': return 'success';
      default: return 'default';
    }
  };

  return (
    <Box sx={{ p: 3, display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', minHeight: '300px' }}>
      <Paper elevation={5} sx={{ p: 4, borderRadius: '20px', maxWidth: '650px', width: '100%', boxShadow: '0 8px 24px rgba(0, 0, 0, 0.1)' }}>
        <Typography variant="h5" color="primary" sx={{ mb: 3, textAlign: 'center', fontWeight: 700, color: 'green' }}>
          Your Schedule
        </Typography>
        <List>
          {appointments.map((appointment) => (
            <React.Fragment key={appointment.id}>
              <ListItem alignItems="flex-start" sx={{ py: 2 }}>
                <ListItemIcon sx={{ minWidth: 'auto', mr: 2 }}>
                  <CalendarToday sx={{ fontSize: '2rem', color: '#1976d2' }} />
                </ListItemIcon>
                <ListItemText
                  primary={
                    <Box display="flex" justifyContent="space-between" alignItems="center">
                      <Typography variant="subtitle1" sx={{ fontWeight: 600 }}>{appointment.title}</Typography>
                      <Chip label={appointment.type} color={getChipColor(appointment.type)} size="small" />
                    </Box>
                  }
                  secondary={
                    <React.Fragment>
                      <Box display="flex" alignItems="center" mt={1}>
                        <AccessTime sx={{ fontSize: '1.2rem', mr: 1, color: '#757575' }} />
                        <Typography variant="body2" color="textSecondary">{appointment.time}</Typography>
                      </Box>
                      <Box display="flex" alignItems="center" mt={0.5}>
                        <LocationOn sx={{ fontSize: '1.2rem', mr: 1, color: '#757575' }} />
                        <Typography variant="body2" color="textSecondary">{appointment.location}</Typography>
                      </Box>
                      {appointment.candidate && (
                        <Box display="flex" alignItems="center" mt={0.5}>
                          <Person sx={{ fontSize: '1.2rem', mr: 1, color: '#757575' }} />
                          <Typography variant="body2" color="textSecondary">{appointment.candidate}</Typography>
                        </Box>
                      )}
                    </React.Fragment>
                  }
                />
              </ListItem>
              <Divider variant="middle" component="li" />
            </React.Fragment>
          ))}
        </List>
        {appointments.length === 0 && (
          <Typography variant="body2" color="textSecondary" sx={{ mt: 3, textAlign: 'center' }}>
            No scheduled appointments.
          </Typography>
        )}
      </Paper>
    </Box>
  );
}

export default ScheduleTabContent;