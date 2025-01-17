import React, { ReactNode } from 'react';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import AppWrappers from './AppWrappers';

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning={true}>
      <body id={'root'} suppressHydrationWarning>
      <ToastContainer />
        <AppWrappers>{children}</AppWrappers>
      </body>
    </html>
  );
}
