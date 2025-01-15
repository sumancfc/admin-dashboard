import { Box } from '@chakra-ui/react';
import React, { ReactNode } from 'react';
import AppWrappers from './AppWrappers';

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning={true}>
      <body id={'root'} suppressHydrationWarning>
        <AppWrappers>{children}</AppWrappers>
      </body>
    </html>
  );
}
