import React from 'react';
import { AppBar, Toolbar, IconButton, useTheme, Box } from '@mui/material';
import { Icon } from '@iconify/react';
import Image from 'next/image';

interface HeaderProps {
  onMenuClick: () => void;
}

const Header: React.FC<HeaderProps> = ({ onMenuClick }) => {
  const theme = useTheme();
  const headerHeight = 80; // Set your desired header height here

  return (
    <AppBar
      position="static"
      elevation={0}
      sx={{
        zIndex: theme.zIndex.appBar + 1,
        transition: theme.transitions.create(['height'], {
          duration: theme.transitions.duration.shorter,
        }),
        backgroundColor: theme.palette.background.default,
        height: headerHeight,
      }}
    >
      <Toolbar sx={{ height: '100%', minHeight: 'unset', padding: 0 }}>
        <Box sx={{ height: '100%', position: 'relative', aspectRatio: '150/150' }}>
          <Image alt="j9mh logo" src="/logo/watermark.png" layout="fill" objectFit="contain" />
        </Box>
        <IconButton
          size="large"
          edge="end"
          aria-label="menu"
          sx={{
            display: { sm: 'none' },
            color: theme.palette.text.primary,
            marginLeft: 'auto',
          }}
          onClick={onMenuClick}
        >
          <Icon icon="mdi:menu" />
        </IconButton>
      </Toolbar>
    </AppBar>
  );
};

export default Header;
