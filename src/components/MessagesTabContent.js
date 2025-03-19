
import React from 'react';
import { Box, Typography, List, ListItem, ListItemIcon, ListItemText, Avatar, Divider, Paper } from '@mui/material';
import { Mail, AccountCircle } from '@mui/icons-material';

function MessagesTabContent() {
  const messages = [
    { id: 1, sender: 'John Doe', message: 'Hi, I saw your application...', time: '10:30 AM' },
    { id: 2, sender: 'Jane Smith', message: 'Regarding the interview...', time: 'Yesterday' },
    { id: 3, sender: 'Mike Johnson', message: 'Any updates on my application?', time: '2 days ago' },
  ];

  return (
    <Box sx={{ p: 3, display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', minHeight: '300px' }}>
      <Paper elevation={3} sx={{ p: 3, borderRadius: '16px', maxWidth: '500px', width: '100%' }}>
        <Typography variant="h6" color="secondary" sx={{ mb: 2, textAlign: 'center', fontWeight: 600 }}>
          Your Messages
        </Typography>
        <List>
          {messages.map((message) => (
            <React.Fragment key={message.id}>
              <ListItem alignItems="flex-start">
                <ListItemIcon>
                  <Avatar>
                    <AccountCircle />
                  </Avatar>
                </ListItemIcon>
                <ListItemText
                  primary={message.sender}
                  secondary={
                    <React.Fragment>
                      <Typography
                        sx={{ display: 'inline' }}
                        component="span"
                        variant="body2"
                        color="text.primary"
                      >
                        {message.message}
                      </Typography>
                      {` — ${message.time}`}
                    </React.Fragment>
                  }
                />
              </ListItem>
              <Divider variant="inset" component="li" />
            </React.Fragment>
          ))}
        </List>
        {messages.length === 0 && (
          <Typography variant="body2" color="textSecondary" sx={{ mt: 2, textAlign: 'center' }}>
            No messages yet.
          </Typography>
        )}
      </Paper>
    </Box>
  );
}

export default MessagesTabContent;