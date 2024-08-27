import './globals.css'
import Header from './components/Header'
import Footer from './components/Footer'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import Script from 'next/script'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Negocios Micaela',
  description: 'Negocios Micaela',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
        <Script async src="https://www.googletagmanager.com/gtag/js?id=G-PSCNZKFT11"></Script>
        <Script id='google-analytics'>
          {
            `
           window.dataLayer = window.dataLayer || [];
           function gtag(){dataLayer.push(arguments);}
           gtag('js', new Date());
           gtag('config', 'G-PSCNZKFT11');
          `
          }
        </Script>
        <Script id="adsense-inline-script">
          {` async
          src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-3866346027024083"
          crossOrigin="anonymous"`}
        </Script>
      </head>
      <body className={inter.className}>
        <Header></Header>
        {children}
        <Footer></Footer>
      </body>

    </html>
  )
}
