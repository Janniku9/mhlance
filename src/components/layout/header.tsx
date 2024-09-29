import React from 'react';
import { AppBar, Toolbar, Typography, useTheme } from '@mui/material';

const Header: React.FC = () => {
  const theme = useTheme();
  return (
    <AppBar position="static" sx={{ backgroundColor: theme.palette.background.default }}>
      <Toolbar>
        <Typography variant="h6">J9MH</Typography>
      </Toolbar>
    </AppBar>
  );
};

export default Header;
