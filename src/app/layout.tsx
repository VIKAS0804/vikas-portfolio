import type { Metadata } from "next";

import Taskbar from "@/components/taskbar/taskbar";
import { DesktopProvider } from "@/contexts/desktop-context";
import DynamicTitle from "@/components/DynamicTitle";

import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://vikasneriyanuru.com"),
  title: {
    default: "Vikas Neriyanuru | Software Engineer Portfolio",
    template: "%s | Vikas Neriyanuru",
  },
  description:
    "A playful Windows XP inspired home for Vikas Neriyanuru's products, systems, experiments, and engineering work across full stack, cloud, and applied machine learning.",
  keywords: [
    "Vikas Neriyanuru",
    "Software Engineer",
    "Full Stack Developer",
    "React",
    "Node.js",
    "AWS",
    "Northeastern University",
    "Boston",
    "Graduate Teaching Assistant",
    "Applied ML",
  ],
  authors: [{ name: "Vikas Neriyanuru" }],
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon.ico",
    apple: "/favicon.ico",
  },
  openGraph: {
    title: "Vikas Neriyanuru | Software Engineer",
    description:
      "A playful Windows XP inspired home for Vikas Neriyanuru's products, systems, experiments, and engineering work across full stack, cloud, and applied machine learning.",
    type: "website",
    url: "https://vikasneriyanuru.com",
    images: [
      {
        url: "/images/vikas.jpg",
        width: 1200,
        height: 630,
        alt: "Vikas Neriyanuru | Software Engineer",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Vikas Neriyanuru | Software Engineer",
    description:
      "A playful Windows XP inspired home for Vikas Neriyanuru's products, systems, experiments, and engineering work across full stack, cloud, and applied machine learning.",
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
