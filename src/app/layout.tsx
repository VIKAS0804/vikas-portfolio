import type { Metadata } from "next";

import Taskbar from "@/components/taskbar/taskbar";
import { DesktopProvider } from "@/contexts/desktop-context";
import DynamicTitle from "@/components/DynamicTitle";

import "./globals.css";

export const metadata: Metadata = {
  title: {
    default: "Vikas Neriyanuru | Software Engineer Portfolio",
    template: "%s | Vikas Neriyanuru",
  },
  description:
    "Software Development Engineer with 2+ years experience at Jio Platforms. MS CS @ Northeastern University. Full-stack developer specializing in React, Node.js, Java, and AWS cloud architecture.",
  keywords: [
    "Vikas Neriyanuru",
    "Software Engineer",
    "Full Stack Developer",
    "React",
    "Node.js",
    "AWS",
    "Northeastern University",
    "Boston",
    "Co-op",
  ],
  authors: [{ name: "Vikas Neriyanuru" }],
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon.ico",
    apple: "/favicon.ico",
  },
  openGraph: {
    title: "Vikas Neriyanuru - Software Engineer",
    description:
      "Software Development Engineer with 2+ years experience at Jio Platforms. MS CS @ Northeastern University. Full-stack developer specializing in React, Node.js, Java, and AWS cloud architecture.",
    type: "website",
    url: "https://vikasneriyanuru.com",
    images: [
      {
        url: "/images/vikas.jpg",
        width: 1200,
        height: 630,
        alt: "Vikas Neriyanuru - Software Engineer",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Vikas Neriyanuru - Software Engineer",
    description:
      "Software Development Engineer with 2+ years experience at Jio Platforms. MS CS @ Northeastern University. Full-stack developer specializing in React, Node.js, Java, and AWS cloud architecture.",
    images: ["/images/vikas.jpg"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="overflow-hidden">
      <body>
        <DynamicTitle />
        <DesktopProvider>
          <main className="h-[calc(100vh-32px)] bg-bliss bg-cover">
            {children}
          </main>
          <Taskbar />
        </DesktopProvider>
      </body>
    </html>
  );
}
