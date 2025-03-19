import React from 'react';
import { Box, Typography, Avatar, IconButton } from '@mui/material';
import { ArrowDropDown as ArrowDropDownIcon } from '@mui/icons-material';
import companyLogo from '../assets/companyl.png';

function CompanyProfileHeader() {
  return (
    <Box sx={{ width: '300px', p: 3, textAlign: 'left', fontFamily: 'sans-serif', position: 'relative' }}>
     
      <Box sx={{ position: 'absolute', top: '16px', left: '16px' }}>
        <Avatar
          alt="Acme Corp Ltd"
          src={companyLogo}
          sx={{ width: 56, height: 56 }}
        />
      </Box>

      
      <Box sx={{ display: 'flex', alignItems: 'center', mb: 0.5, mt: 7 }}> 
        <Typography variant="h6" sx={{ fontWeight: 600, mr: 0.5, fontSize: '1.15rem', lineHeight: '1.2' }}>
          Acme Corp Ltd
        </Typography>
        <IconButton size="small" aria-label="dropdown" sx={{ padding: '4px' }}>
          <ArrowDropDownIcon sx={{ fontSize: '1.1rem' }} />
        </IconButton>
      </Box>

      
      <Typography variant="body2" color="text.secondary" sx={{ lineHeight: '1.2', fontSize: '0.85rem' }}>
        @acmecorp • Bengaluru, India
      </Typography>

      
      <Typography variant="body2" sx={{ mt: 1, lineHeight: '1.2', fontSize: '0.9rem' }}>
        Keep it Real.
      </Typography>

      
      <Box display="flex" mt={1}>
        <Box sx={{ mr: 2 }}>
          <Typography variant="subtitle2" sx={{ fontWeight: 600, fontSize: '0.95rem', lineHeight: '1.2' }}>
            200
          </Typography>
          <Typography variant="caption" color="text.secondary" sx={{ fontSize: '0.8rem', lineHeight: '1.2' }}>
            Posts
          </Typography>
        </Box>
        <Box sx={{ mr: 2 }}>
          <Typography variant="subtitle2" sx={{ fontWeight: 600, fontSize: '0.95rem', lineHeight: '1.2' }}>
            380
          </Typography>
          <Typography variant="caption" color="text.secondary" sx={{ fontSize: '0.8rem', lineHeight: '1.2' }}>
            Followers
          </Typography>
        </Box>
        <Box>
          <Typography variant="subtitle2" sx={{ fontWeight: 600, fontSize: '0.95rem', lineHeight: '1.2' }}>
            1003
          </Typography>
          <Typography variant="caption" color="text.secondary" sx={{ fontSize: '0.8rem', lineHeight: '1.2' }}>
            Following
          </Typography>
        </Box>
      </Box>
    </Box>
  );
}

export default CompanyProfileHeader;