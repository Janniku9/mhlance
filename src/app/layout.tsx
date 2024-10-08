'use client';

import React, { useState } from 'react';
import './globals.css';
import { Box, Container, CssBaseline, ThemeProvider } from '@mui/material';
import theme from '../theme/theme';
import Header from '@/components/layout/header';
import Navigation from '@/components/layout/side-nav';

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

  return (
    <html lang="en">
      <body>
        <ThemeProvider theme={theme}>
          <CssBaseline />
          <Box sx={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
            <Header onMenuClick={handleNavToggle} headerHeight={headerHeight} />
            <Box sx={{ display: 'flex', flexGrow: 1, mt: `${headerHeight}px` }}>
              <Navigation isOpen={isNavOpen} onClose={handleNavToggle} headerHeight={headerHeight} />
              <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
                <Container>{children}</Container>
              </Box>
            </Box>
          </Box>
        </ThemeProvider>
      </body>
    </html>
  );
}
