import type { Metadata } from 'next';
import { Inter, DM_Serif_Display } from 'next/font/google';
import './globals.css';

const inter = Inter({ 
  subsets: ['latin'],
  variable: '--font-inter',
});

const dmSerif = DM_Serif_Display({ 
  weight: '400',
  subsets: ['latin'],
  variable: '--font-dm-serif',
});

export const metadata: Metadata = {
  title: 'ChurchTalk - Church Management Platform',
  description: 'The complete church management platform designed for growing communities. Track spiritual growth, manage members, and build stronger connections.',
  keywords: 'church management, church software, member management, spiritual growth tracking, church app',
  openGraph: {
    title: 'ChurchTalk - Church Management Platform',
    description: 'The complete church management platform designed for growing communities',
    url: 'https://churchtalk.pro',
    siteName: 'ChurchTalk',
    images: [
      {
        url: '/og-image.png',
        width: 1200,
        height: 630,
      }
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'ChurchTalk - Church Management Platform',
    description: 'The complete church management platform designed for growing communities',
    images: ['/og-image.png'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${inter.variable} ${dmSerif.variable}`}>
      <body className={inter.className}>
        {children}
      </body>
    </html>
  );
}