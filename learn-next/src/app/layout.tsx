"use client";

import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Link from "next/link";
import { usePathname } from "next/navigation";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

// export const metadata: Metadata = {
//   title: "Create Next App",
//   description: "Generated by create next app",
// };

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {

  const pathname = usePathname();

  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <header className="bg-slate-900 text-slate-100 py-4 px-16 flex justify-between">
          <h1 className="font-bold text-lg">NEXT App</h1>
          <nav className="space-x-8">
            <Link href="/" className={pathname === "/" ? 'underline hover:underline' : 'hover:underline'}>Home</Link>
            <Link href="/user/patrick-bateman" className={pathname === "/user/patrick-bateman" ? 'underline hover:underline' : 'hover:underline'}>User</Link>
            <Link href="/clan/american-psycho" className={pathname === "/clan/american-psycho" ? 'underline hover:underline' : 'hover:underline'}>Clan</Link>
            <Link href="/profile" className={pathname === "/profile" ? 'underline hover:underline' : 'hover:underline'}>Profile</Link>
          </nav>
        </header>
        {children}
        <h1 className="bg-slate-900 text-slate-100 py-4 text-center">&copy; {new Date().getFullYear()}</h1>
      </body>
    </html >
  );
}
