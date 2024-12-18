import './globals.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import { Providers } from '@/lib/providers';
import { ConfigProvider } from 'antd';
import theme from '@/lib/theme';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'CoachAI - AI-Powered Coaching Platform',
  description: 'Manage your coaching business with AI-powered tools',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Providers>
          <ConfigProvider theme={theme}>
            {children}
          </ConfigProvider>
        </Providers>
      </body>
    </html>
  );
}