import React from 'react';
import { AppBar, Toolbar, IconButton, useTheme } from '@mui/material';
import { Icon } from '@iconify/react';

interface HeaderProps {
  onMenuClick: () => void;
}

const Header: React.FC<HeaderProps> = ({ onMenuClick }) => {
  const theme = useTheme();

  return (
    <AppBar
      position="static"
      elevation={0}
      sx={{
        zIndex: theme.zIndex.appBar + 1,
        transition: theme.transitions.create(['height'], {
          duration: theme.transitions.duration.shorter,
        }),
        borderBottom: `0.1px dotted ${theme.palette.text.secondary}`,
        backgroundColor: theme.palette.background.default,
      }}
    >
      <Toolbar>
        E
        <IconButton
          size="large"
          edge="end"
          aria-label="menu"
          sx={{
            display: { sm: 'none' },
            color: theme.palette.text.primary,
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
