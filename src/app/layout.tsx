import './globals.css'
import dynamic from "next/dynamic"
import Script from 'next/script'
import { Mulish } from 'next/font/google'
import type { Metadata } from 'next'
import { ScrollDirectionProvider } from '@/context/ScrollDirection'

const Footer = dynamic(() => import("@/components/Footer"))
const Header = dynamic(() => import("@/components/Header"))
const ThemeProvider = dynamic(() => import("@/components/ThemeProvider"))

const mulish = Mulish({ subsets: ['latin']})

export const metadata: Metadata = {
  alternates: {
    canonical: 'https://zorasantos.dev',
    languages: {
      'en-US': 'https://en.zorasantos.dev',
      'pt-BR': 'https://zorasantos.dev'
    }
  },
  title: {
    default: 'Zora Santos',
    template: '%s | Zora Santos'
  },
  robots: {
    follow: true,
    index: true
  }
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="pt-br">
      <head>
        <Script
          id='gtm'
          dangerouslySetInnerHTML={{
            __html: `
            (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
            new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
            j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
            'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
            })(window,document,'script','dataLayer','${process.env.GA_TRACKING_ID}');
            `
          }}
        />
      </head>
      <body className={`${mulish.className} min-h-screen`}>
      <noscript>
        <iframe
          src={`https://www.googletagmanager.com/ns.html?id=${process.env.GA_TRACKING_ID}`}
          height="0"
          width="0"
          style={{display: 'none', visibility: 'hidden'}}>
        </iframe>
      </noscript>
        <ThemeProvider>
          <ScrollDirectionProvider>
            <Header />
            <main className='px-10 md:px-24'>{children}</main>
            <Footer />
          </ScrollDirectionProvider>
        </ThemeProvider>
      </body>
    </html>
  )
}
