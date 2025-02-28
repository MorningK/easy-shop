import { Geist, Geist_Mono } from 'next/font/google';
import './globals.css';
import Link from 'next/link';
import StoreProvider from '@/component/store-provider';
import { Toaster } from 'sonner';

const geistSans = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin'],
});

const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
});

const links = [
  {
    href: '/',
    text: '首页',
  },
  {
    href: '/shopping-cart',
    text: '购物车',
  },
];

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
        <StoreProvider>
          <header className="fixed top-0 z-10 flex h-16 w-full flex-wrap items-center overflow-hidden bg-white/80 backdrop-blur-xl">
            {links.map(({ href, text }) => (
              <Link
                key={href}
                className="text-black-1 px-10 text-base font-semibold"
                href={href}
              >
                {text}
              </Link>
            ))}
          </header>
          <main className="mt-16 px-16 py-4">{children}</main>
          <Toaster />
        </StoreProvider>
      </body>
    </html>
  );
}
