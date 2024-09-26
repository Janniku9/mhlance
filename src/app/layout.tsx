'use client';

import './globals.css';
import { Container, CssBaseline, ThemeProvider } from '@mui/material';

import theme from '../theme/theme';
import Header from '@/components/layout/header';

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <ThemeProvider theme={theme}>
          <CssBaseline />
          <Header />
          <Container>
            <main>{children}</main>
          </Container>
        </ThemeProvider>
      </body>
    </html>
  );
}
