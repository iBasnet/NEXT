import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider"
import { ModeToggle } from "@/components/mode-toggle";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <header className="h-[4rem] bg-slate-950 flex items-center justify-center border-b-2 border-dashed border-slate-900">
            < h1
              className="text-slate-200 text-3xl text-center "
            >ToDo App™</h1 >
            <div className="absolute right-4">
              <ModeToggle />
            </div>
          </header>
          {children}
          <footer className="h-[4rem] bg-slate-950 text-slate-500 flex items-center justify-center border-t-2 border-dotted border-slate-900">
            <p>&copy; {new Date().getFullYear()} ToDo App™ is a registered trademark. All Rights Reserved.</p>
          </footer>
        </ThemeProvider>
      </body>
    </html>
  );
}
