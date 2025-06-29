import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Navbar } from "@/components/Navbar";
import { Toaster } from "react-hot-toast";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "makeMagma | Web Development & Digital Solutions Agency",
  description: "Professional web development, mobile apps, SEO, and digital marketing services. We build high-performance websites and digital solutions to grow your business.",
  keywords: [
    "web development",
    "SEO services",
    "mobile app development",
    "digital marketing",
    "ecommerce solutions",
    "website design",
    "frontend development",
    "backend development",
    "react development",
    "next.js development",
    "graphic design",
    "video editing",
    "social media marketing",
    "content marketing",
    "web hosting",
    "ERP solutions",
    "CRM development"
  ],
  openGraph: {
    title: "makeMagma | Web Development & Digital Solutions Agency",
    description: "Professional web development, mobile apps, SEO, and digital marketing services",
    url: "https://www.makemagma.com",
    siteName: "makeMagma",
    images: [
      {
        url: "https://www.makemagma.com/og-image.jpg",
        width: 1200,
        height: 630,
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "makeMagma | Web Development & Digital Solutions Agency",
    description: "Professional web development, mobile apps, SEO, and digital marketing services",
    images: ["https://www.makemagma.com/twitter-image.jpg"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon-16x16.png",
    apple: "/apple-touch-icon.png",
  },
  verification: {
    google: "your-google-verification-code",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        <Navbar/>
        {children}
        <Toaster
          position="top-center"
          toastOptions={{
            style: {
              background: "#FB2056",
              color: "#fff",
              border: "1px solid #FB2056",
            },
            success: {
              duration: 3000,
              iconTheme: {
                primary: "#FB2056",
                secondary: "#fff",
              },
            },
            error: {
              style: {
                border: "1px solid #ff4d4f",
              },
              iconTheme: {
                primary: "#ff4d4f",
                secondary: "#fff",
              },
            },
            loading: {
              duration: Infinity,
            },
          }}
        />
      </body>
    </html>
  );
}