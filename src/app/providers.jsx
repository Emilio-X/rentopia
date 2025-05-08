'use client'  // this file is purely client-side

import { SessionProvider } from 'next-auth/react';

export function Providers({ children }) {
  return (
    <SessionProvider>
      {children}
    </SessionProvider>
  );
}
