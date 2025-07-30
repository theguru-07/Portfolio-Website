// app/layout.js or app/layout.tsx
import './globals.css'
import { Poppins, Roboto_Mono } from 'next/font/google'

export const metadata = {
  title: 'My Portfolio',
  description: 'Personal portfolio built with Next.js',
};

// Load fonts with weights
const poppins = Poppins({
  subsets: ['latin'],
  weight: ['400', '600', '700'],  // Choose what you need
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
