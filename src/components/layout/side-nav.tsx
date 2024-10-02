import React from 'react';
import {
  List,
  ListItem,
  ListItemText,
  Drawer,
  useMediaQuery,
  Theme,
  ListItemIcon,
  ListItemButton,
} from '@mui/material';
import { Icon } from '@iconify/react';

interface NavigationProps {
  isOpen: boolean;
  onClose: () => void;
}

const Navigation: React.FC<NavigationProps> = ({ isOpen, onClose }) => {
  const isDesktop = useMediaQuery((theme: Theme) => theme.breakpoints.up('sm'));

  const content = (
    <List>
      <ListItem disablePadding>
        <ListItemButton>
          <ListItemIcon>
            <Icon icon="mdi:home" />
          </ListItemIcon>
          <ListItemText primary="Home" />
        </ListItemButton>
      </ListItem>
      <ListItem disablePadding>
        <ListItemButton>
          <ListItemIcon>
            <Icon icon="mdi:information" />
          </ListItemIcon>
          <ListItemText primary="About" />
        </ListItemButton>
      </ListItem>
      <ListItem disablePadding>
        <ListItemButton>
          <ListItemIcon>
            <Icon icon="mdi:email" />
          </ListItemIcon>
          <ListItemText primary="Contact" />
        </ListItemButton>
      </ListItem>
    </List>
  );

  if (isDesktop) {
    return (
      <Drawer
        variant="permanent"
        sx={{
          width: 240,
          flexShrink: 0,
          '& .MuiDrawer-paper': {
            width: 240,
            boxSizing: 'border-box',
            top: ['48px', '56px', '64px'],
            height: 'auto',
            bottom: 0,
          },
        }}
      >
        {content}
      </Drawer>
    );
  }

  return (
    <Drawer
      anchor="right"
      open={isOpen}
      onClose={onClose}
      sx={{
        '& .MuiDrawer-paper': { width: 240 },
      }}
    >
      {content}
    </Drawer>
  );
};

export default Navigation;
