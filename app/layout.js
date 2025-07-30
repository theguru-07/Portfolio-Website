
import './globals.css'
import { Poppins, Roboto_Mono } from 'next/font/google'

export const metadata = {
  title: 'My Portfolio',
  description: 'Personal portfolio built with Next.js',
};

const poppins = Poppins({
  subsets: ['latin'],
  weight: ['400', '600', '700'],
  variable: '--font-poppins',
})

const robotoMono = Roboto_Mono({
  subsets: ['latin'],
  weight: ['400'],
  variable: '--font-roboto',
})

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${poppins.variable} ${robotoMono.variable}`}>
      <body>{children}</body>
    </html>
  )
}
