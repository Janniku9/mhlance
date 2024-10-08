import React, { useState } from 'react';
import {
  List,
  ListItem,
  ListItemText,
  Drawer,
  useMediaQuery,
  Theme,
  ListItemIcon,
  ListItemButton,
  IconButton,
  Stack,
  Collapse,
} from '@mui/material';
import { Icon } from '@iconify/react';

interface NavigationProps {
  headerHeight: number;
  isOpen: boolean;
  onClose: () => void;
}

interface NavItem {
  title: string;
  icon: string;
  subItems?: string[];
}

const navItems: NavItem[] = [
  { title: 'BUILDS', icon: 'mdi:hammer-wrench', subItems: ['Sub-build 1', 'Sub-build 2'] },
  { title: 'GUIDES', icon: 'mdi:book-open-variant', subItems: ['Guide 1', 'Guide 2'] },
  { title: 'TOOLS', icon: 'mdi:tools', subItems: ['Tool 1', 'Tool 2'] },
  { title: 'DATA', icon: 'mdi:database', subItems: ['Data 1', 'Data 2'] },
];

const Navigation: React.FC<NavigationProps> = ({ headerHeight, isOpen, onClose }) => {
  const isDesktop = useMediaQuery((theme: Theme) => theme.breakpoints.up('sm'));
  const [openItems, setOpenItems] = useState<{ [key: string]: boolean }>({});

  const handleToggle = (title: string) => {
    setOpenItems((prev) => ({ ...prev, [title]: !prev[title] }));
  };

  const content = (
    <List>
      {navItems.map((item) => (
        <React.Fragment key={item.title}>
          <ListItem disablePadding>
            <ListItemButton onClick={() => handleToggle(item.title)}>
              <ListItemIcon>
                <Icon icon={item.icon} />
              </ListItemIcon>
              <ListItemText primary={item.title} />
              {item.subItems && <Icon icon={openItems[item.title] ? 'mdi:chevron-up' : 'mdi:chevron-down'} />}
            </ListItemButton>
          </ListItem>
          {item.subItems && (
            <Collapse in={openItems[item.title]} timeout="auto" unmountOnExit>
              <List component="div" disablePadding>
                {item.subItems.map((subItem) => (
                  <ListItemButton key={subItem} sx={{ pl: 4 }}>
                    <ListItemText primary={subItem} />
                  </ListItemButton>
                ))}
              </List>
            </Collapse>
          )}
        </React.Fragment>
      ))}
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
            top: [`${headerHeight}px`],
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
      <Stack
        direction={'row'}
        alignItems={'center'}
        height={headerHeight}
        justifyContent={'flex-end'}
        paddingRight={'25px'}
        spacing={1}
      >
        <IconButton size="large" color="primary" onClick={onClose}>
          <Icon icon="mdi:close" />
        </IconButton>
      </Stack>
      {content}
    </Drawer>
  );
};

export default Navigation;
