// ActivityTabContent.js
import React from 'react';
import { Box, Typography, List, ListItem, ListItemIcon, ListItemText, Paper, Divider } from '@mui/material';
import { History, AssignmentTurnedIn, PersonAdd, Description } from '@mui/icons-material';

function ActivityTabContent() {
  const activities = [
    { id: 1, type: 'application', action: 'John Doe applied for Senior Product Designer', time: '10:30 AM' },
    { id: 2, type: 'interview', action: 'Scheduled interview with Jane Smith', time: 'Yesterday' },
    { id: 3, type: 'team', action: 'Mike Johnson added to the team', time: '2 days ago' },
    { id: 4, type: 'document', action: 'Updated job description for Junior Developer', time: '3 days ago' },
  ];

  const getActivityIcon = (type) => {
    switch (type) {
      case 'application':
        return <AssignmentTurnedIn />;
      case 'interview':
        return <History />;
      case 'team':
        return <PersonAdd />;
      case 'document':
        return <Description />;
      default:
        return <History />;
    }
  };

  return (
    <Box sx={{ p: 3, display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', minHeight: '300px' }}>
      <Paper elevation={3} sx={{ p: 3, borderRadius: '16px', maxWidth: '700px', width: '100%' }}> 
        <Typography variant="h6" color="success" sx={{ mb: 2, textAlign: 'center', fontWeight: 600 }}>
          Activity Log
        </Typography>
        <List>
          {activities.map((activity) => (
            <React.Fragment key={activity.id}>
              <ListItem alignItems="flex-start">
                <ListItemIcon>
                  {getActivityIcon(activity.type)}
                </ListItemIcon>
                <ListItemText
                  primary={activity.action}
                  secondary={
                    <Typography
                      sx={{ display: 'inline' }}
                      component="span"
                      variant="body2"
                      color="text.secondary"
                    >
                      {activity.time}
                    </Typography>
                  }
                />
              </ListItem>
              <Divider variant="inset" component="li" />
            </React.Fragment>
          ))}
        </List>
        {activities.length === 0 && (
          <Typography variant="body2" color="textSecondary" sx={{ mt: 2, textAlign: 'center' }}>
            No recent activities.
          </Typography>
        )}
      </Paper>
    </Box>
  );
}

export default ActivityTabContent;