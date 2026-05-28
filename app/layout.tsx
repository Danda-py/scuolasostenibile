import type { Metadata } from 'next'
import { Poppins, Inter } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import './globals.css'

const poppins = Poppins({ 
  subsets: ["latin"],
  weight: ['400', '500', '600', '700'],
  variable: '--font-poppins'
});

const inter = Inter({ 
  subsets: ["latin"],
  variable: '--font-inter'
});

export const metadata: Metadata = {
  title: 'Eco Saraceno-Romegialli | Verso una Scuola Sostenibile',
  description: "L'iniziativa degli studenti di Morbegno per trasformare l'Istituto Saraceno-Romegialli in una Green School certificata.",
  keywords: ['green school', 'sostenibilità', 'Morbegno', 'Saraceno-Romegialli', 'ambiente', 'scuola sostenibile'],
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="it" className="scroll-smooth">
      <body className={`${poppins.variable} ${inter.variable} font-sans antialiased bg-background`}>
        {children}
        {process.env.NODE_ENV === 'production' && <Analytics />}
      </body>
    </html>
  )
}
