import type { Metadata } from 'next';

import { montserrat } from '@/assets/fonts';

import '@/assets/globals.css';

import { QueryProvider } from '@/components/query-provider';

import { cn } from '@/lib/utils';

export const metadata: Metadata = {
  title: 'Frontend Test | Volvo',
  description: 'Frontend test for Volvo',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={cn('min-h-screen w-full font-sans antialiased', montserrat.variable)}
      >
        <QueryProvider>{children}</QueryProvider>
      </body>
    </html>
  );
}
