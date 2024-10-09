'use client';

import React, { useState } from 'react';
import './globals.css';
import { Box, Container, CssBaseline, ThemeProvider } from '@mui/material';
import theme from '../theme/theme';
import Header from '@/components/layout/header/header';
import Navigation from '@/components/layout/nav-bar/side-nav';

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const [isNavOpen, setIsNavOpen] = useState(false);

  const handleNavToggle = () => {
    setIsNavOpen(!isNavOpen);
  };

  const headerHeight = 60;
  const navbarWidth = 240;

  return (
    <html lang="en">
      <body>
        <ThemeProvider theme={theme}>
          <CssBaseline />
          <Box sx={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
            <Header onMenuClick={handleNavToggle} headerHeight={headerHeight} navbarWidth={navbarWidth} />
            <Box sx={{ display: 'flex', flexGrow: 1, mt: { xs: `${headerHeight}px`, sm: 0 } }}>
              <Navigation
                isOpen={isNavOpen}
                onClose={handleNavToggle}
                headerHeight={headerHeight}
                navbarWidth={navbarWidth}
              />
              <Box
                component="main"
                sx={{
                  flexGrow: 1,
                  p: 3,
                  ml: { sm: `${navbarWidth}px` },
                  mt: `${headerHeight}px`,
                }}
              >
                <Container>{children}</Container>
              </Box>
            </Box>
          </Box>
        </ThemeProvider>
      </body>
    </html>
  );
}
