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
  Typography,
  useTheme,
} from '@mui/material';
import { Icon } from '@iconify/react';
import Logo from '../logo';

interface NavigationProps {
  headerHeight: number;
  isOpen: boolean;
  onClose: () => void;
  navbarWidth: number;
}

interface NavItem {
  title: string;
  emoji: string;
  subItems?: string[];
}

const navItems: NavItem[] = [
  { title: 'BUILDS', emoji: '🛡️', subItems: ['Sub-build 1', 'Sub-build 2'] },
  { title: 'GUIDES', emoji: '📚', subItems: ['Guide 1', 'Guide 2'] },
  { title: 'TOOLS', emoji: '🛠️', subItems: ['Tool 1', 'Tool 2'] },
  { title: 'DATA', emoji: '💾', subItems: ['Data 1', 'Data 2'] },
];

const Navigation: React.FC<NavigationProps> = ({ headerHeight, isOpen, onClose, navbarWidth }) => {
  const theme = useTheme();
  const isDesktop = useMediaQuery((theme: Theme) => theme.breakpoints.up('sm'));
  const [openItems, setOpenItems] = useState<{ [key: string]: boolean }>({});

  const handleToggle = (title: string) => {
    setOpenItems((prev) => ({ ...prev, [title]: !prev[title] }));
  };

  const content = (
    <>
      {isDesktop && (
        <Stack
          direction="row"
          alignItems="center"
          justifyContent="center"
          sx={{ height: headerHeight, borderBottom: '1px solid rgba(0, 0, 0, 0.12)' }}
        >
          <Logo />
        </Stack>
      )}
      <List sx={{ pt: isDesktop ? 3 : 0 }}>
        {' '}
        {/* Added padding top when in desktop mode */}
        {navItems.map((item) => (
          <React.Fragment key={item.title}>
            <ListItem disablePadding>
              <ListItemButton onClick={() => handleToggle(item.title)}>
                <ListItemIcon>
                  <Typography fontSize="1.5rem" sx={{ color: theme.palette.text.primary }}>
                    {item.emoji}
                  </Typography>
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
    </>
  );

  if (isDesktop) {
    return (
      <Drawer
        variant="permanent"
        sx={{
          width: navbarWidth,
          flexShrink: 0,
          '& .MuiDrawer-paper': {
            width: navbarWidth,
            boxSizing: 'border-box',
            top: 0,
            height: '100%',
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
        '& .MuiDrawer-paper': { width: navbarWidth },
      }}
    >
      <Stack
        direction="row"
        alignItems="center"
        height={headerHeight}
        justifyContent="flex-end"
        paddingRight="25px"
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
