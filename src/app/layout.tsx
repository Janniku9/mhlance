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

  return (
    <html lang="en">
      <body>
        <ThemeProvider theme={theme}>
          <CssBaseline />
          <Box sx={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
            <Header onMenuClick={handleNavToggle} />
            <Box sx={{ display: 'flex', flexGrow: 1 }}>
              <Navigation isOpen={isNavOpen} onClose={handleNavToggle} />
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
