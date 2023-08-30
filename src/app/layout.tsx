import './globals.css'
import type { Metadata } from 'next'
import Script from 'next/script'
import { Mulish } from 'next/font/google'
import { Footer, Header, ThemeProvider } from '@/components'

const mulish = Mulish({ subsets: ['latin']})

export const metadata: Metadata = {
  title: {
    default: 'Zora Santos',
    template: '%s | Zora Santos'
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
      <body className={`${mulish.className} min-h-screen px-10 md:px-24`}>
      <noscript>
        <iframe
          src={`https://www.googletagmanager.com/ns.html?id=${process.env.GA_TRACKING_ID}`}
          height="0"
          width="0"
          style={{display: 'none', visibility: 'hidden'}}>
        </iframe>
      </noscript>
        <ThemeProvider>
          <Header />
          {children}
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  )
}
