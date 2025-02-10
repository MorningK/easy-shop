import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Link from "next/link";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const links = [{
  href: '/',
  text: '首页'
}, {
  href: '/shopping-cart',
  text: '购物车'
}];

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
        <header className="fixed top-0 z-10 flex h-16 w-full flex-wrap items-center overflow-hidden bg-white/80  backdrop-blur-xl">
          
          {links.map(({ href, text}) => (
            <Link key={href} className='px-10 text-base font-semibold text-black-1' href={href}>{text}</Link>
          ))}
        </header>
        <main className="px-16 py-20">
        {children}
        </main>
      </body>
    </html>
  );
}
