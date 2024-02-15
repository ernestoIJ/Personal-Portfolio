'use client';

import { useState } from 'react';
import { Inter } from 'next/font/google';
import './globals.css';
import Navbar from './components/navbar';
import Footer from './components/footer';

const inter = Inter({ subsets: ['latin'] });

export default function RootLayout({ children }) {
  const [theme, setTheme] = useState('dark');

  const toggleTheme = () => {
    setTheme(theme === 'light' ? 'dark' : 'light');
  };

  return (
    <html lang="en" className={theme}>
      <body className={theme}>
        <Navbar theme={theme} toggleTheme={toggleTheme} />
        {children}
        <Footer />
      </body>
    </html>
  );
}
