import { Container, Theme } from '@radix-ui/themes';
import '@radix-ui/themes/styles.css';
import './globals.css';
import './theme-config.css';

import Footer from '@/components/shared/Footer';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import Navbar from '../components/shared/Navbar';
import QueryProvider from './QueryProvider';
import NextAuthProvider from './auth/Provider';

import { ThemeProvider } from '@/components/theme-provider';

const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-inter',
});

export const metadata: Metadata = {
  title: 'Tracker.io',
  description: 'Tracker.io is a best Open source, end to end Software as a service (SAAS) to help users manage their tasks / issues efficiency on their own.',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang='en'>
      <body className={inter.variable}>
        {/* <Theme appearance="light" accentColor="violet" grayColor="slate" radius="full"></Theme> */}
        <QueryProvider>
          <NextAuthProvider>
            <ThemeProvider
              attribute='class'
              defaultTheme='system'
              enableSystem
              disableTransitionOnChange
            >
              <Theme accentColor='violet' grayColor='slate' radius='medium'>
                <Navbar />
                <main className='mx-auto py-8 px-4'>
                  <Container>{children}</Container>
                </main>
                <Footer />
              </Theme>
            </ThemeProvider>
          </NextAuthProvider>
        </QueryProvider>
      </body>
    </html>
  );
}
