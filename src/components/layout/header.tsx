import React, { useEffect, useState } from 'react';
import { AppBar, Toolbar, IconButton, useTheme, Box, Stack } from '@mui/material';
import { Icon } from '@iconify/react';
import Image from 'next/image';

interface HeaderProps {
  headerHeight: number;
  onMenuClick: () => void;
}

const Header: React.FC<HeaderProps> = ({ onMenuClick, headerHeight }) => {
  const theme = useTheme();
  const [isScrolled, setIsScrolled] = useState(false);

  // Add scroll event listener to change header background color on scroll
  useEffect(() => {
    const handleScroll = () => {
      const offset = window.scrollY;
      setIsScrolled(offset > 0);
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <AppBar
      position="fixed"
      elevation={0}
      sx={{
        zIndex: theme.zIndex.appBar + 1,
        transition: theme.transitions.create(['height'], {
          duration: theme.transitions.duration.shorter,
        }),
        backgroundColor: theme.palette.background.default,
        height: headerHeight,
        boxShadow: isScrolled ? `0 0 30px ${theme.palette.text.secondary}` : 'none',
      }}
    >
      <Toolbar sx={{ height: '100%', minHeight: 'unset', padding: 0 }}>
        <Stack
          direction={'row'}
          height={'100%'}
          width={'100%'}
          spacing={1}
          paddingLeft={'20px'}
          paddingRight={'20px'}
          justifyContent={'space-between'}
        >
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
        </Stack>
      </Toolbar>
    </AppBar>
  );
};

export default Header;
