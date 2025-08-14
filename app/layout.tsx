import type { Metadata } from "next";
import { Inter } from 'next/font/google';
import "./globals.css";

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: "ChurchTalk - Connect Your Church Community",
  description: "The complete church management platform that helps you grow spiritually and connect meaningfully. Track spiritual journeys, manage events, handle giving, and build community.",
  keywords: "church management, church software, church app, spiritual growth, church community, church giving, church events",
  openGraph: {
    title: "ChurchTalk - Connect Your Church Community",
    description: "The complete church management platform for spiritual growth and community connection.",
    url: "https://churchtalk.com",
    siteName: "ChurchTalk",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
      }
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "ChurchTalk - Connect Your Church Community",
    description: "The complete church management platform for spiritual growth and community connection.",
    images: ["/og-image.jpg"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        {children}
      </body>
    </html>
  );
}