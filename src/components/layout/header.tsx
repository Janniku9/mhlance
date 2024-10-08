import React, { useEffect, useState } from 'react';
import { AppBar, Toolbar, IconButton, useTheme, Box, Stack, Breadcrumbs } from '@mui/material';
import { Icon } from '@iconify/react';
import Image from 'next/image';
import GameSelect from './game-select';

interface HeaderProps {
  headerHeight: number;
  onMenuClick: () => void;
}

const games = ['Game 1', 'Game 2', 'Game 3'];

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
        backgroundColor: theme.palette.background.paper,
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
          <Stack direction={'row'} alignItems={'center'} spacing={1}>
            <Box sx={{ height: '70%', position: 'relative', aspectRatio: '146/52' }}>
              <Image alt="j9mh logo" src="/logo/full_logo.png" layout="fill" objectFit="contain" />
            </Box>

            <Breadcrumbs aria-label="breadcrumb" separator="›">
              <GameSelect games={games} />
              {/* You can add more breadcrumb items here if needed */}
            </Breadcrumbs>
          </Stack>

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
