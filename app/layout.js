import './globals.css';
import { Poppins, Roboto_Mono } from 'next/font/google';
import Navbar from '@/components/Navbar';
import CustomCursor from '@/components/CustomCursor';
import ScrollToTop from '@/components/ScrollToTop';
import PageTransition from '@/components/PageTransition';
import ThemeToggle from '@/components/ThemeToggle';

export const metadata = {
  title: 'Malhar Prasad Ray | MERN Stack Developer',
  description:
    'Portfolio of Malhar Prasad Ray — Full Stack Developer specializing in MERN Stack, Next.js, TypeScript, and Cloudflare Workers. Available for software developer roles.',
  keywords: [
    'MERN Stack Developer',
    'Next.js Developer',
    'React Developer',
    'Full Stack Developer',
    'Bhubaneswar',
    'Malhar Prasad Ray',
    'theguru-07',
  ],
  openGraph: {
    title: 'Malhar Prasad Ray | MERN Stack Developer',
    description: 'Full Stack Developer — MERN, Next.js, Cloudflare Workers, AI Integration',
    url: 'https://theguru-07.vercel.app',
    siteName: 'Malhar Portfolio',
    images: [
      {
        url: '/cv.jpg',
        width: 400,
        height: 400,
        alt: 'Malhar Prasad Ray',
      },
    ],
    locale: 'en_IN',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Malhar Prasad Ray | MERN Stack Developer',
    description: 'Full Stack Developer — MERN, Next.js, Cloudflare Workers, AI Integration',
    images: ['/cv.jpg'],
  },
};

const poppins = Poppins({
  subsets: ['latin'],
  weight: ['400', '600', '700', '800'],
  variable: '--font-poppins',
});

const robotoMono = Roboto_Mono({
  subsets: ['latin'],
  weight: ['400'],
  variable: '--font-roboto',
});

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${poppins.variable} ${robotoMono.variable}`}>
      <body>
        <CustomCursor />
        <Navbar />
        <ThemeToggle />
        <PageTransition>
          {children}
        </PageTransition>
        <ScrollToTop />
      </body>
    </html>
  );
}
