import type { Metadata, Viewport } from 'next'
import { Inter, Merriweather } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'

import './globals.css'

import { Header } from '@/components/layout/header'
import { Footer } from '@/components/layout/footer'

const inter = Inter({
  subsets: ['latin', 'latin-ext'],
  variable: '--font-inter',
  display: 'swap',
})

const merriweather = Merriweather({
  subsets: ['latin', 'latin-ext'],
  weight: ['300', '400', '700', '900'],
  variable: '--font-merriweather',
  display: 'swap',
})

export const metadata: Metadata = {
  title: {
    default: 'Ranking Materaców i Pościeli 2026 | Testy i porównania',
    template: '%s | Ranking-Materacow.pl 2026',
  },

  description:
    'Redakcja testująca produkty do sypialni - materace, prześcieradła i pościel. Sprawdź rankingi, recenzje i porównania najlepszych produktów na polskim rynku.',

  keywords: [
    'materace',
    'test materacy',
    'ranking materacy',
    'ranking prześcieradeł',
    'test materaców',
    'ranking materaców',
    'materac piankowy',
    'prześcieradło jersey z gumką',
    'prześcieradło bawełna',
    'porównanie materacy',
    'porównanie materaców',
    'najlepszy materac',
    'najlepsze prześcieradło',
    'najlepszy materac 2026',
  ],

  authors: [
    {
      name: 'Redakcja Ranking-Materacow.pl',
    },
  ],

  creator: 'Ranking-Materacow.pl',
  publisher: 'Ranking-Materacow.pl',

  metadataBase: new URL('https://ranking-materacow.pl'),

  alternates: {
    canonical: '/',
  },

  icons: {
    icon: '/favicon.ico',
  },

  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },

  openGraph: {
    title: 'Ranking Materaców i Pościeli 2026 | Testy i porównania',

    description:
      'Redakcja testująca produkty do sypialni - materace, prześcieradła i pościel. Sprawdź rankingi najlepszych produktów w Polsce.',

    url: 'https://ranking-materacow.pl',

    siteName: 'Ranking-Materacow.pl',

    locale: 'pl_PL',

    type: 'website',

    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Ranking Materaców 2026',
      },
    ],
  },

  robots: {
    index: true,
    follow: true,

    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
}

export const viewport: Viewport = {
  themeColor: '#2563eb',
  width: 'device-width',
  initialScale: 1,
  maximumScale: 5,
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html
      lang="pl"
      className={`${inter.variable} ${merriweather.variable} bg-background`}
      data-scroll-behavior="smooth"
    >
      <body className="min-h-screen font-sans antialiased flex flex-col">
        <Header />

        <main className="flex-1">
          {children}
        </main>

        <Footer />

        {process.env.NODE_ENV === 'production' && <Analytics />}
      </body>
    </html>
  )
}
